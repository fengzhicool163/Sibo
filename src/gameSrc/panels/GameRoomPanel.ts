
module game.panel {
	
	export class GameRoomPanel extends GameRoomTable {

		public static readonly assets = asset.AssetConfig.GameRoomPanel;

		/** 是否是新牌桌 */
		protected isNetTable = true;

		/** 游戏菜单盒子 */
		protected gameMenuBox: game.component.GameMenuBox;

		/** 房间信息盒子 */
		protected roomInfoBox: game.component.GameRoomInfoBox;
		/** 7局未操作弹窗盒子 */
		protected tipMsgBox: game.commponet.TipMsgBox;
		/**  游戏路图 */
		protected gameTrendBox: game.component.GameTrendBox;
		protected netPosTop: number;
		protected netPosRight: number;
		protected betAreas: game.component.BetBox[];
		protected betAreasMap:any;
		protected gameBetCtrl: game.component.GameBetCtrlBarBox;
		private open_templete:laya.ani.bone.Templet;
		private open_skeleton:laya.ani.bone.Skeleton;
		private result_templete:laya.ani.bone.Templet;
		private result_skeleton:laya.ani.bone.Skeleton;
		private readonly LIGHT_TIME:number = 300;
		protected initComponents() {
			//
			super.initComponents();

			/**************************************** 游戏操作控件 **********************************************/
			//按钮MenuBox
			this.gameMenuBox = this.bindScript(game.component.GameMenuBox, this.roomMenuObj);

			// 下注按钮
			this.gameBetCtrl = this.bindScript(game.component.GameBetCtrlBarBox , this.betCtrlBoxObj);
			/**************************************** 房间控件 **********************************************/

			/****************************** 7局未操作弹窗绑定 */
			this.tipMsgBox = this.bindScript(game.commponet.TipMsgBox , this.tipmsgObj);
			//初始化游戏版本号
			this.gameVersion.text = "版本号:" + GameMain.VERSION;

			/** 游戏路图绑定 */
			this.gameTrendBox = this.bindScript(game.component.GameTrendBox , this.gameTrendBoxObj);
			//右上角房间信息Box
			this.roomInfoBox = this.bindScript(game.component.GameRoomInfoBox, this.roomInfoObj);
			this.betAreas = [];
			this.betAreasMap = {};
			for(let i = 0; i < 35; i++){
				var s:string = "betarea_" + i;
				var script = this.bindScript(game.component.BetBox , this[s]);
				var name:string = this[s].name;
				script.setBetArea(name);
				this.betAreas.push(script);
				this.betAreasMap[name] = script;
				
			}
			this.open_templete = new laya.ani.bone.Templet();
			this.open_templete.loadAni( game.asset.AssetConfigBase.GameAssetsDir + "/anim/sz-open.sk");
			this.open_templete.on(Laya.Event.COMPLETE , this , this.onLoadOpenComed);
			this.result_templete = new laya.ani.bone.Templet();
			this.result_templete.loadAni(game.asset.AssetConfigBase.GameAssetsDir + "/anim/sz-result_ske.sk");
			this.result_templete.on(Laya.Event.COMPLETE , this , this.onLoadResultComplete);
			/**  开奖动效的播放完成的回调函数 */
			this.openAnim.on(Laya.Event.COMPLETE , this , this.openAnimComPlete);
			this.yaosaiAnim.stop();
			this.yaosaiAnim.on(Laya.Event.LABEL , this , this.szPlayLabelEvent);
			/**************************************** 特效控件 **********************************************/
			
			//分辨率适配
			this.resize();
		}

		public destroy() {
			super.destroy();
			for(let i = 0; i < this.betAreas.length; i++){
				var betItem:game.component.BetBox = this.betAreas[i];
				betItem.destroy();
			}
			this.betAreas = [];
			this.betAreasMap = {};
			this.gameBetCtrl.destory();
			// 退出时候，暂停所有的动效，动画
			Laya.timer.clearAll(this);
		}

		protected updateNetPos() { //[5 518] [750 360] [1624 780]
			this.netPosTop = 5 / 360 * Laya.Browser.clientHeight;
			this.netPosRight = 128 / 780 * Laya.Browser.clientWidth + Laya.Browser.clientWidth / 2;
			if (GameMain.DEBUG) {
				console.error("Laya.Browser.clientHeight = " + Laya.Browser.clientHeight +
					" Laya.Browser.clientWidth = " + Laya.Browser.clientWidth +
					" netPosTop = " + this.netPosTop +
					" netPosRight = " + this.netPosRight);
			}
		}

		public resize() {
			this.updateNetPos();
			var wh = 16 / 9 + 0.01;
			if (Laya.stage.width / Laya.stage.height > wh) { //宽屏
			
				this.roomInfoBox.bindObj.left = 140;
				this.waitMsgNode.right = 78;
			} else {
				
				this.roomInfoBox.bindObj.left = 140;
				this.waitMsgNode.right = 105;
			}
		}

		public initlistener() {
			super.initlistener();
			this.netCtrl.addListener(net.GameNetEventMask.WAITANIMUPDATE, this, this.updateWaitAnim);
			this.gameCtrl.addListener(this.gameCtrl.Event.NetDelayUpdate, this, this.updateNetState);
			EventManager.register(game.event.GameEvent.UPDATE_BET_AREA , this ,this.showLightByName);
			EventManager.register(game.event.GameEvent.UPDATE_BET_MONEY , this , this.updateBetMoney);
			EventManager.register(game.event.GameEvent.TIPS , this , this.gameTipMsg);
				//***************************玩家列表按钮 */
			this.btnPlayer.on(Laya.Event.CLICK , this ,this.openPlayerList);
		}

		public unInitlistener() {
			super.unInitlistener();
			this.netCtrl.removeListener(net.GameNetEventMask.WAITANIMUPDATE, this, this.updateWaitAnim);
			EventManager.removeAllEvents(this);
			this.btnPlayer.off(Laya.Event.CLICK , this ,this.openPlayerList);
		}

		/******************************************************* 房间清理方法 **********************************************/
		/** 重置房间 */
		protected resetRoom() {
			//
			// 退出时候，暂停所有的动效，动画
			Laya.timer.clearAll(this);
			this.gameChipsBox.clearAllChip();
			this.stopAll();
			
			for(let i = 0; i < this.betAreas.length; i++){
				var betItem:game.component.BetBox = this.betAreas[i];
				betItem.clearBox();
			}
			//荷官
			this.dealer.visible = false;
			// 局数置0
			//this.tableInfoBG.visible = false;
			this.juShu.text = "";
			this.allBetNum.text = "";
			//this.playerSitAnim.stop();
			//关闭倒计时
			this.countDownBox.clearBox();
			//房间信息
			this.roomInfoBox.clearBox();
		}

		protected updateWaitAnim(key: boolean) {
			if (key) {
				if (!this.waitMsgNode.visible) {
					this.waitMsgAnim.play(0, true);
					this.waitMsgNode.visible = true;
				}
			} else {
				if (this.waitMsgNode.visible) {
					this.waitMsgAnim.stop();
					this.waitMsgNode.visible = false;
				}
			}
		}

		/******************************************************* 显示刷新响应方法 **********************************************/
		/** 清空房间 */
		public clearRoom() {
			
			//
			this.isNetTable = true;
			//
			//关闭房间功能菜单
			this.gameMenuBox.closeMenu();
			//
			this.resetRoom();
			//清空牌桌
			this.clearTable();
		}


		public showBetCtrl(v:boolean){
			
			this.betCtrlBoxObj.visible = v;
		}
		/** 房间恢复方法（快照数据处理） */
		public roomInit(roomObj: game.objs.GameRoomObj) {
			//清空牌桌
			this.resetRoom();
			//荷官动画
			if (this.isNetTable) {
				//this.playerSitAnim.play(0, false);
				this.dealer.visible = true;
			} else {
				this.dealer.visible = true;
			}
			//关闭匹配Mask
			lobby.panel.MatchPanel.Hide();
			//房间信息更新
			this.roomInfoBox.setData(roomObj);
			/**  设置用户数据 */
			var data = {username:UserInfoManger.UserName,userId:UserInfoManger.UserId,avatar:UserInfoManger.Avatar,balanceScore:UserInfoManger.Balance};
			this.gameCtrl.getMainPlayerObj().setData(data);
			var mySelf:any = this.gameCtrl.roomObj.getPlayerList()[10];
			if(mySelf){
				this.gameCtrl.getMainPlayerObj().setLastBonusScore(mySelf.lastBonusScore);
				this.gameCtrl.getMainPlayerObj().setRank(mySelf.seatIndex);
			}
			/** 设置是否能投注 */
			//this.showBetCtrl((this.gameCtrl.roomObj.getGameState()==2));
			this.showBetCtrl(true);
			if(this.gameCtrl.roomObj.getGameState()==2){
				this.gameBetCtrl.setDisable(false);
			}
			else{
				if(this.gameCtrl.roomObj.getGameState() == 3){
					this.waitNext.visible = true;
				}
				this.gameBetCtrl.setDisable(true);
			}
			/** 设置投注金额 */
			this.gameBetCtrl.setData(this.gameCtrl.roomObj.getChipRange());
			//初始化牌桌
			this.initTable(roomObj);
			/** 设置路图 */
			this.gameTrendBox.setData(roomObj.winInfo);
			//
			this.isNetTable = false;
		}

		

		/**
		 * 
		 * @param roomObj 开局推送消息  开局推送 准备中 34201
		 */
		public roomPushData(roomObj:any){
			  var data = roomObj.data;
			  //牌局号更新
			//this.paijuhao.text = "" + data.roundId;
			
			this.roomInfoBox.setRoundId("牌局号:" + data.roundId);
              //恢复或开始新一局游戏
            this.gameCountDown(data.remainingTime,data.state);
            this.gameReady();
			//this.betArea.disabled = true;
			//this.betCtrlBoxObj.disabled = true;
			this.gameBetCtrl.setDisable(true);
			this.gameChipsBox.clearAllChip();
			this.gameBetCtrl.playerReset();
			this.waitNext.visible = false;
		}

		/**
		 *  收到停止下注消息的处理  结算中  34203
		 */
		public stopBet(roomObj:any){
			var data = roomObj.data;
			 this.gameCountDown(data.remainingTime,data.state);
			 //this.betArea.disabled = true;
			 //this.betCtrlBoxObj.disabled = true;
			 this.gameBetCtrl.setDisable(true);
			 this.playStopEffect();
		}
		/**
		 * 推送开始下注事件  下注中 34202
		 */
		public pushBetEvent(roomObj:any){
			var data = roomObj.data;
			  this.gameCountDown(data.remainingTime,data.state);
            this.playStartBet();
            this.showBetCtrl(true);
            this.showLightEffect();
			this.betArea.disabled = false;
			//this.betCtrlBoxObj.disabled = false;
			this.gameBetCtrl.setDisable(false);
			Laya.timer.once(1000 , this , ()=>{
				SoundManager.PlayStarBetEffect();
			});
		}
		/** 超时托管设置更新 */
		public overHostUpdate(playerObj: any) {
			
		}

		// 下注开始 下注区域长亮

		public showLightEffect(){
			this.showLight();
			Laya.timer.once(1000,this , this.hideLight);
		}
		public showLight() {
			for(let i = 0 ; i < this.betAreas.length; i++){
				var item:game.component.BetBox = this.betAreas[i];
				item.showBg();

			}
		}

		// 长亮结束
		public hideLight(){
			for(let i = 0 ; i < this.betAreas.length ; i++){
				var item:game.component.BetBox = this.betAreas[i];
				item.hideBg();
				item.hideBetMoney();
			}
		}
	
		// 某个下注区长亮
		public showLightByName(name:string){
			var item:any = this.betArea.getChildByName(name) ;
			item.bj.visible = true;
			Laya.timer.once(500,this , this.hideLightByName,[name],false);
			//this.hideLightByNameSyc(name).run();
			
			//
		}

		// 0 name 1 money
		public updateBetMoney(data:any[]){
			var betBox:game.component.BetBox = this.betAreasMap[data[0]];
			betBox.updateBetMoney(data[1]);
		}
	
		public hideLightByName(name:string){
			var item:any = this.betArea.getChildByName(name) ;
			item.bj.visible = false;
		}



		public stopAll(){
			if(this.open_skeleton){
				this.open_skeleton.paused();
				this.open_skeleton.visible = false;
			}
			if(this.result_skeleton){
				this.result_skeleton.visible = false;
				this.result_skeleton.paused()
			}
			
			this.yaosaiAnim.stop();
			this.yaosaiAnim.visible = false;
			this.startBetAnim.stop();
			this.startBetAnim.visible = false;
			this.stopAnim.stop();
			this.stopAnim.visible = false;
		}


		/***************************** 摇塞子动画的事件帧事件 */
		public szPlayLabelEvent(e:any){
			var eData:Laya.EventData = e as Laya.EventData;
			if(eData.name == "start"){
				//SoundManager.PlayWin();
			}
			else if(eData.name == "end"){
				SoundManager.StopYaoSai();
			}
		}

//******************************* 开奖动画效果 *************************************** */

		//播放开奖动画
		public onLoadOpenComed(){
			
			  this.open_skeleton = this.open_templete.buildArmature(1);
			  this.openBox.addChild(this.open_skeleton);
			  this.open_skeleton.y = -100;
			  this.open_skeleton.on(Laya.Event.LABEL , this , this.playOpenLabelEvent);
			  this.open_skeleton.on(Laya.Event.STOPPED , this, this.playOpenComPlete);
			  //var t:laya.resource.Texture = Laya.loader.getRes(game.asset.AssetConfigBase.GameAssetsDir +"/panel/head01.png");
			 // this.open_skeleton.setSlotSkin("img_sb_sz-a_3" , t);
			  //this.open_skeleton.play(0,false);
		}

		/** 开牌动画结束回调 */
		public playOpenComPlete(){
			
			
		}

		/** 播放开骰子动画 开牌动画 */
		public playOpenResultAnim(){
			this.yaosaiAnim.visible = false;
			this.yaosaiAnim.stop();
			this.resetOpen.play(0,false);
			var num1:number = this.gameCtrl.roomObj.getOpenResultByName("dianshuOne");
			var num2:number = this.gameCtrl.roomObj.getOpenResultByName("dianshuTwo");
			var num3:number = this.gameCtrl.roomObj.getOpenResultByName("dianshuTree");
			var arr = [num1,num2,num3];
			var slot = ["img_sb_sz-a_3","img_sb_sz-c_1" ,"img_sb_sz-b_6"];
			var saiziPath = ["img_sb_sz-a_","img_sb_sz-b_","img_sb_sz-c_"];
			for(let i = 0; i < 3;i++){
				var t:laya.resource.Texture = Laya.loader.getRes(game.asset.AssetConfigBase.GameAssetsDir +"/saizi/" + saiziPath[i] + arr[i] + ".png");
				
				this.open_skeleton.setSlotSkin(slot[i] , t);
			}
			this.open_skeleton.visible = true;
			this.open_skeleton.play(0,false);
		}

		/** 开牌动画的 事件帧函数 */
		public playOpenLabelEvent(e:any){
			var eData:Laya.EventData = e as Laya.EventData;
			if(eData.name == "sounds"){
				this.playSiboNumSound();
				this.playResultAnim();
			}
		}
		/** 播放 报骰子 报牌点数声音 */
		public playSiboNumSound(){
			var num1:number = this.gameCtrl.roomObj.getOpenResultByName("dianshuOne");
			var num2:number = this.gameCtrl.roomObj.getOpenResultByName("dianshuTwo");
			var num3:number = this.gameCtrl.roomObj.getOpenResultByName("dianshuTree");
			var total:number = num1 + num2 + num3;
			SoundManager.PlaySiboNum(num1);
			Laya.timer.once(500,this , ()=>{
				SoundManager.PlaySiboNum(num2);
			});
			Laya.timer.once(1000 , this , ()=>{
				SoundManager.PlaySiboNum(num3);
			})
			Laya.timer.once(1500,this , ()=>{
				SoundManager.PlayDianShu(total);
			})
		}
		// 加载开奖动画
		public onLoadResultComplete(){
			this.result_skeleton = this.result_templete.buildArmature(1);
			this.animBox.addChild(this.result_skeleton);
			this.result_skeleton.on(Laya.Event.STOPPED , this , this.playResultComplete);
		}

		public playResultAnim(){
			SoundManager.PlayOpen();
			var result:string = this.gameCtrl.roomObj.getOpenResultByName("bIGOrSmall");
			var t:laya.resource.Texture;
			this.result_skeleton.visible = true;
			if(result == "small"){
				//t = Laya.loader.getRes(game.asset.AssetConfigBase.GameAssetsDir + "/saizi/img_sb_g-x.png");
				this.result_skeleton.play("xiao",false);
			}
			else if(result == "big"){
				//t = Laya.loader.getRes(game.asset.AssetConfigBase.GameAssetsDir + "/saizi/img_sb_g-d.png");
				this.result_skeleton.play("da",false);
			}
			else{
				//t = Laya.loader.getRes(game.asset.AssetConfigBase.GameAssetsDir + "/saizi/img_sb_g-b.png");
				this.result_skeleton.play("bao",false);
			}
		
			Laya.timer.once(2500 , this , ()=>{
				SoundManager.PlaySiboType(result);
			})
			//this.result_skeleton.setSlotSkin("img_sb_g-b",t);
			
		}

		public playResultComplete(){
			//this.open_skeleton.visible = false;
			Laya.timer.once(1500 , this , ()=>{
				this.result_skeleton.visible = false;
				this.openAnim.play(0,false);
				this.playCoin();
			})
			
		}

		/**  开奖动效的完成回调 */
		public openAnimComPlete(){
			this.open_skeleton.visible = false;
			this.yaosaiAnim.visible = true;
			this.yaosaiAnim.play(0,false,false,3000,3000);
			this.openBox.scale(1,1);
		}
		// 开奖结果处理
		public showOpenResult(){
			this.playOpenResultAnim();
		}
		/*******************************开奖飞金币效果************************************ */
		public playCoin(){
			//开奖区域亮一下
			this.playLight();
			Laya.timer.once(1500,this , ()=>{
				net.protocol.GameRequest.reqResult(this.gameCtrl.roomObj.curRoundUuid , this.gameCtrl.roomObj.getRoomId(),this.gameCtrl.roomObj.getTableId());
			});
		}

		/** 结算 开奖区域亮一下 */
		protected playLight(){
			/**   点数区域 */
			var dianshuCode = this.gameCtrl.roomObj.getOpenResultByName("dianshuCode");
			var dianshu = this.betArea.getChildByName(dianshuCode) ;
			if(dianshu){
				dianshu["bj"].visible = true;
				Laya.TimeLine.to(dianshu["bj"],{alpha:0},this.LIGHT_TIME)
				.to(dianshu["bj"],{alpha:1},this.LIGHT_TIME)
				.to(dianshu["bj"],{alpha:0},this.LIGHT_TIME)
				.to(dianshu["bj"],{alpha:1} , this.LIGHT_TIME)
				.play();
			}
			/** 三军区域 */
			var arr = ["sanjunOne","sanjunTwo","sanjunThree","sanjunFour","sanjunFives","sanjunSix"];
			for( let i = 0 ; i < arr.length; i++){
				var n = this.gameCtrl.roomObj.getOpenResultByName(arr[i]);
				if(n){
					var item = this.betArea.getChildByName(arr[i]);
					if(item){
						item["bj"].visible = true;
						Laya.TimeLine.to(item["bj"],{alpha:0},this.LIGHT_TIME)
						.to(item["bj"],{alpha:1},this.LIGHT_TIME)
						.to(item["bj"],{alpha:0},this.LIGHT_TIME)
						.to(item["bj"],{alpha:1} , this.LIGHT_TIME)
						.play();
					}
				}
			}
			/** 对子区域 */
			var duiziCode  = this.gameCtrl.roomObj.getOpenResultByName("duiziCode");
			if(duiziCode){
				var duizi = this.betArea.getChildByName(duiziCode);
				if(duizi){
					duizi["bj"].visible = true;
					Laya.TimeLine.to(duizi["bj"],{alpha:0},this.LIGHT_TIME)
						.to(duizi["bj"],{alpha:1},this.LIGHT_TIME)
						.to(duizi["bj"],{alpha:0},this.LIGHT_TIME)
						.to(duizi["bj"],{alpha:1} , this.LIGHT_TIME)
						.play();
				}
			}

			/** 大小区域 */
			var bIGOrSmall = this.gameCtrl.roomObj.getOpenResultByName("bIGOrSmall");
			if(bIGOrSmall == "small" || bIGOrSmall == "big"){
				let area = this.betArea.getChildByName(bIGOrSmall);
				if(area){
					area["bj"].visible = true;
					Laya.TimeLine.to(area["bj"] , {alpha:0}, this.LIGHT_TIME)
					.to(area["bj"],{alpha:1} , this.LIGHT_TIME)
					.to(area["bj"],{alpha:0} , this.LIGHT_TIME)
					.to(area["bj"] , {alpha:1} , this.LIGHT_TIME)
					.play();
				}
			}
			/** 是否是全围 */
			var isQuanWei = this.gameCtrl.roomObj.getOpenResultByName("isQuanwei");
			if(isQuanWei){
				let isQuanWeiarea = this.betArea.getChildByName("quanwei");
				if(isQuanWeiarea){
					isQuanWeiarea["bj"].visible = true;
					Laya.TimeLine.to(isQuanWeiarea["bj"] , {alpha:0}, this.LIGHT_TIME)
					.to(isQuanWeiarea["bj"],{alpha:1} , this.LIGHT_TIME)
					.to(isQuanWeiarea["bj"],{alpha:0} , this.LIGHT_TIME)
					.to(isQuanWeiarea["bj"] , {alpha:1} , this.LIGHT_TIME)
					.play();
				}
			}
			/** 围骰 */
			var weiTou = this.gameCtrl.roomObj.getOpenResultByName("weitouCode");
			if(weiTou){
				let weiTouarea = this.betArea.getChildByName(weiTou);
				if(weiTouarea){
					weiTouarea["bj"].visible = true;
					Laya.TimeLine.to(weiTouarea["bj"] , {alpha:0}, this.LIGHT_TIME)
					.to(weiTouarea["bj"],{alpha:1} , this.LIGHT_TIME)
					.to(weiTouarea["bj"],{alpha:0} , this.LIGHT_TIME)
					.to(weiTouarea["bj"] , {alpha:1} , this.LIGHT_TIME)
					.play();
				}
			}
		}

		/******************************* 游戏结算处理******************************* */
		public playGameSettlement(roomData:any){
			var data = roomData;
			 //this.gameCountDown(data.remainingTime,data.state);
			 this.gameChipsBox.chipPush();
			 Laya.timer.once(1500,this , this.playSettlementCoin);
			 // 更新路图
			 this.gameTrendBox.setData(this.gameCtrl.roomObj.winInfo);
			 //this.betArea.disabled = true;
			 //this.betCtrlBoxObj.disabled = true;
		}
		//  结算金币动画
		public playSettlementCoin(){
			SoundManager.PlayCoin();
			this.gameChipsBox.chipSettlement(this.gameCtrl.roomObj.getOpenResult());
			if(this.gameCtrl.getMainPlayerObj().getLastBonusScore() > 0){
				this.gameBetCtrl.playerWin(this.gameCtrl.getMainPlayerObj().getLastBonusScore());
				this.gameBetCtrl.setPlayerMoney(this.gameCtrl.getMainPlayerObj().balanceScore);
			}
			this.hideLight();
		}
		/*************************************** 外部调用 ************************************/
		/** 打开游戏界面 */
		public Show() {
			super.Show();
			//
			this.updateWaitAnim(false);
			//关闭 加载Mask
			//common.panel.LoadingPanel.Hide();
			common.panel.LoadingMask.Hide();
			//打开 匹配Mask
			lobby.panel.MatchPanel.Show();
			//
		
			//第一次进游戏清空房间（换桌也清空房间）
			this.clearRoom();
			//界面初始化完成,开始执行动作
			this.gameCtrl.actionQueue.resume();
			// 网络状态信息界面
			//this.showNetState();
		}

		public Hide() {
			//
			this.hideNetState();
			this.updateWaitAnim(false);
			this.clearRoom();
			super.Hide();
		}

		/************************************** 点击事件 **********************************/

	

		protected netStateShow = false;


		protected showNetState() {
			this.netStateShow = true;
			this.updateNetState(50);
		}

		protected hideNetState() {
			this.netStateShow = false;
			this.updateNetState(50);
		}

		/**
		{action:"appStatus",delay:网络延时毫秒,position:{top:number,right:number},isShow:1}
		action:   postMessage 消息tag
		delay:  游戏当前延时
		position: 状态栏窗口相对窗口右上角的位置
		isShow: 是否显示状态图片 默认1:
		 */
		protected updateNetState(delay: number) {
			var isShow = this.netStateShow ? 1 : 0;
			var msg = JSON.stringify({ action: "appStatus", delay: delay, position: { top: this.netPosTop, right: this.netPosRight }, isShow: isShow });
			window.top.postMessage(msg, "*");
			if (GameMain.DEBUG) console.log("刷新网络延时显示 msg = " + msg);
		}


		/**
		 * 游戏提示弹窗
		 */
		public gameTipMsg(data:any){
			this.tipMsgBox.showMsg(data);
		}


		/**
		 * 打开玩家列表
		 */
		public openPlayerList(){
			UIManager.getInstance().ShowPopUI(game.panel.GamePlayerList, game.asset.AssetConfig.PlayerListMap);
		}
	}
}