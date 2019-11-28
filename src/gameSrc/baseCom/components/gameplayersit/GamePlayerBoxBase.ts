


module game.component {

	export abstract class GamePlayerBoxBase extends common.component.UIComponent {

		/** 所用使用该Box脚本的控件请必须遵照以下UI设置 */
		public bindObj: ui.gameUI.GamePlayerSit.GamePlayerBoxUI;

		/** 倒计时盒子 */
		//protected gpCDBox : GamePlayerCountDown;

		

		/** 玩家方向 */
		protected isLeft : boolean;

		/**  */
		protected updateSortBoxHandler : Laya.Handler;

		protected initComponents() {
			//
			this.updateSortBoxHandler = Laya.Handler.create(this,this.updateSortBox,null,false);
			//倒计时盒子
			//this.gpCDBox = this.bindScript(GamePlayerCountDown,this.bindObj.gamePlayerCDBoxObj);
			//初始化
			this.clearPlayer();
		}

		/** 玩家金币设配 */
		protected updateSortBox(){
			//
			this.bindObj.moneySortNode.width = this.bindObj.playerMoney.width + 40;
		}

		/*********************************************** 外部调用函数 *********************************************/

		/** 重置玩家显示 */
		public resetPlayer() {
			//倒计时
			//this.gpCDBox.resetBox();
			//玩家状态
			//this.setPlayerState(null);
			this.bindObj.winlight.visible = false;
			this.bindObj.winEffect.visible = false;
			this.bindObj.effectLabel.visible = false;
			this.bindObj.flyLabel.stop();
		}

		/** 清空玩家显示 */
		public clearPlayer() {
			//
			this.resetPlayer();
			//
			this.bindObj.visible = false;
		}

	

		/** 设置玩家名称 */
		public setPlayerName( playerName : string ){
			this.bindObj.playerName.text = util.StringUtils.starString(playerName, "****");;
		}

		/** 设置玩家头像 */
		public setPlayerHead( avatar : string ){
			//设置头像
			var url = this.getHeadImage(avatar);
			this.bindObj.headImage.skin = url;
			//this.bindObj.headImage.loadImage(url, 0, 0, 90, 90)
			this.bindObj.headImage.visible = true;
		}

		/**
		 * 设置玩家当前金币
		 * @param money 
		 */
		public setPlayerMoney( money : number ,isAnim : boolean = true){
			var balanceScore = money;
			//玩家金币
			if(isAnim){
				this.bindObj.playerMoney.ScrollNum(balanceScore,500,this.updateSortBoxHandler);
			}else{
				var str = util.StringUtils.FormatGameMoney( balanceScore , 2 );
				this.bindObj.playerMoney.curNum = balanceScore;
				this.bindObj.playerMoney.text = str;
			}
			this.updateSortBox();
		}

		/**
		 * 设置玩家状态
		 * @param stateType 玩家状态
		 */
		public setPlayerState( stateTypeData: any ) {
			var stateUrl = this.getStateImage( stateTypeData );
			if (stateUrl) {
			
			} else {
				
			}
		}

		

		/** 设置玩家倒计时 */
		public playerCoundDown( remainingTime : number , allRemainingTime : number = 20 ){
			//设置玩家倒计时
			if (remainingTime > 0) {
				//this.gpCDBox.setData(remainingTime, allRemainingTime);
			} else {
				//this.gpCDBox.resetBox();
			}
		}

		/************************************************** 子类复写函数 ******************************************************/
		/** 子类实现根据自己的Type类型返回对应图片地址 */
		protected abstract getStateImage( stateTypeData : any) : string;

		/** 子类实现根据自己的Type类型返回对应图片地址 */
		protected abstract getHeadImage( headData : any) : string;

		/** 玩家要说话的图片 */
		protected abstract getTalkImage(talkTypeData: any): string ;
	}
}