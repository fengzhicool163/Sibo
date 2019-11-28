/**
* name 
*/
module game.component {

	export class GameChipsBox extends common.component.UIComponent {

		/** 筹码列表 */
		private static _chipList: number[];
		protected gameCtrl: ctrl.GameRoomCtrl;
		private static sortFunc(a: number, b: number): number {
			return a - b;
		}
		
		/** 筹码列表 */
		protected static get chipList() {
			if (this._chipList) return this._chipList;
			this._chipList = [];
			for (const key in asset.AssetConfig.ChipImageMap) {
				var chipNum = parseFloat(key);
				this._chipList.push(chipNum);
			}
			this._chipList.sort(this.sortFunc);
			return this._chipList;
		}

		protected bindObj: Laya.Box;

		protected localSitBoxs: Array<Laya.Box> = [];
		protected chipPool: util.PoolUtil<items.GameChipItem>;
		protected chipShowList: Array<items.GameChipItem> = [];
		protected chipShowMap: { [key: number]: items.GameChipItem } = {};
		protected posNode:Laya.Box;
		protected initComponents() {
			this.chipPool = new util.PoolUtil<items.GameChipItem>(items.GameChipItem, 20, 50);
			this.gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
			this.posNode = this.bindObj.getChildByName("posNode") as Laya.Box;
			// for (let index = 0; index < 5; index++) {
			// 	const posBox = posNode.getChildByName("localSit" + index) as Laya.Box;
			// 	this.localSitBoxs.push(posBox);
			// }
		}

		public destroy(){
			this.chipPool.destroy();
			super.destroy();
		}

		/** 根据总下注数反推筹码构成，不准确，除非服务器改协议 */
		protected getChipNumList(betNum: number) {
			var chipNums = [];
			var leftBetNum = betNum;
			while (leftBetNum > 0) {
				//先扫描有数值的筹码
				for (let index = GameChipsBox.chipList.length - 1; index >= 0; --index) {
					const chipNum = GameChipsBox.chipList[index];
					//扫到0筹码了
					if (chipNum == 0) {
						leftBetNum = 0;
						chipNums.push(chipNum);
						break;
					} else if (chipNum <= leftBetNum) { //取筹码金额
						leftBetNum -= chipNum;
						chipNums.push(chipNum);
						break;
					}
				}
			}
			return chipNums;
		}

		/** 获取要下注的筹码列表 */
		protected getChipsWithBetNum(betNum: number) {
			var chipList: Array<items.GameChipItem> = [];
			var chipNums = this.getChipNumList(betNum);
			for (let index = 0; index < chipNums.length; index++) {
				const chipNum = chipNums[index];
				var chip = this.chipPool.getItem();
				this.bindObj.addChild(chip);
				chip.setChipNum(chipNum);
				chipList.push(chip);
				this.chipShowMap[chipNum] = chip;
				this.chipShowList.push(chip);
			}
			return chipList;
		}

		/**
		 * 玩家下注
		 * @param localSit 玩家本地座位
		 * @param betNum 下注金额
		 */
		public callBetNum(userId:string ,localSit: string, betNum: number,isAnim: boolean = true,flyTime : number = 1000) {
			//var localSitPos = this.localSitBoxs[localSit];
			var sitName:string =  (userId == UserInfoManger.UserId)? "localSit1":"localSit0";
			
			var startPos = this.posNode.getChildByName(sitName) as Laya.Box;
			var localSitPos = this.posNode.getChildByName(localSit) as Laya.Box;
			var chipList = this.getChipsWithBetNum(betNum);
			var moveX = localSitPos.x;
			var moveY = localSitPos.y;
			if(userId == UserInfoManger.UserId){
				EventManager.dispath(game.event.GameEvent.UPDATE_BET_AREA,localSit);
			}
			
			//播放筹码音效
			if (isAnim) {
				//chipList.length > 1 ? SoundManager.PlayChipMore() : SoundManager.PlayChipOne();
				if(userId == UserInfoManger.UserId && chipList.length == 1){
					SoundManager.PlayChipOne();
				}
				else{
					SoundManager.PlayChipMore();
				}
			}
			//飞筹码
			for (let index = 0; index < chipList.length; index++) {
				const  chip = chipList[index];
				chip.setTargetArea(localSit);
				chip.setStartPos(startPos.x , startPos.y);
				//var moveX = util.NumberUtils.getRandomNum(chip.width / 2, this.bindObj.width - chip.width / 2);
				//var moveY = util.NumberUtils.getRandomNum(chip.height / 2, this.bindObj.height - chip.height / 2);
				if (isAnim) {
					//筹码初始化位置
					chip.flyChip(startPos.x, startPos.y, moveX, moveY, flyTime);
				
				} else {
					chip.pos(moveX, moveY);
					chip.visible = true;
				}
			}
		}

		/** 筹码结算 */
		public ChipSettlement(settlementPlayerObjs : game.objs.PlayerObject[], isAnim: boolean = true) {
			var winPlayer: game.objs.PlayerObject = settlementPlayerObjs[0];		
			if (!isAnim) {
				this.clearAllChip();
			} else {
				var pos = this.localSitBoxs[winPlayer.localSeatIndex];
				//飞筹码
				for (let index = 0; index < this.chipShowList.length; index++) {
					const chip = this.chipShowList[index];
					chip.flyChip(chip.x, chip.y, pos.x, pos.y);
				}
			}
		}

		/*** 筹码派彩，从荷官飞到下注区域 */
		public chipPush( ){
			var startPos = this.posNode.getChildByName("dealerSit") as Laya.Box;
			for(let i = 0 ; i < this.chipShowList.length; i++){
				var chip = this.chipShowList[i];
				var name = chip.getTargetArea();
				var dianshuCode = this.gameCtrl.roomObj.getWinArea(name);
				
				if(dianshuCode){
					var endPosX = chip.x;
					var endPosY = chip.y;
					//chip.x = startPos.x;
					//chip.y = startPos.y;
					chip.visible = true;
					
					chip.flyChip(startPos.x , startPos.y , endPosX , endPosY,1000,true);
					//Laya.timer.once(100+ i*20 , this , this.p ,[startPos ,chip],false);
				}
			
				
			}
		}

		public p(startPos:any,chip:any){
			var endPosX = chip.x;
			var endPosY = chip.y;
			chip.x = startPos.x;
			chip.y = startPos.y;
			chip.visible = true;
					
			chip.flyChip(startPos.x , startPos.y , endPosX , endPosY,200 , true);
		}
		/*********** 结算金币的动画 */
		public chipSettlement(data:any){
			for(let i = 0 ; i < this.chipShowList.length; i++){
				var chip = this.chipShowList[i];
				var name = chip.getTargetArea();
				var dianshuCode = this.gameCtrl.roomObj.getWinArea(name);
				if(dianshuCode){
					//var endPosX = chip.getStartPosX();
					//var endPosY = chip.getStartPosY();
					
					//chip.flyChip(chip.x , chip.y , endPosX , endPosY);
					Laya.timer.once(50+ i*10 , this , this.chipSettlementOneByOne ,[chip],false);
				}
			}
		}

		public chipSettlementOneByOne(chip:any){
			var endPosX = chip.getStartPosX();
			var endPosY = chip.getStartPosY();
			chip.flyChip(chip.x , chip.y , endPosX , endPosY,500);
		}
		/** 清空所有筹码 */
		public clearAllChip() {
			for (let index = 0; index < this.chipShowList.length; index++) {
				const chip = this.chipShowList[index];
				chip.clearChip();
				this.chipPool.recover(chip);
			}
			this.chipShowList.length = 0;
			this.chipShowMap = {};
		}
	}

}