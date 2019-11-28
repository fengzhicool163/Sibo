


module game.component {

	export class GamePlayerBox extends GamePlayerBoxBase {
		
		protected getStateImage(stateTypeData: any): string {
			throw new Error("Method not implemented.");
		}		
		
		protected getHeadImage(headData: any): string {
				var headUrl = asset.AssetConfig.GetHeadAsset(headData);
			return headUrl;
		}
		
		protected getTalkImage(talkTypeData: any): string {
			throw new Error("Method not implemented.");
		}



		public playerSitDown(playerObj: game.objs.PlayerObject) {
			
			this.setPlayerHead(playerObj.avatar);
			this.setPlayerName(playerObj.username);
			this.setPlayerMoney(playerObj.balanceScore, false);
			this.bindObj.visible = true;
		}


		/**   玩家胜利动效 */
		public playerWin(addNum:number){
			this.bindObj.winlight.visible = true;
			this.bindObj.winEffect.visible = true;
			this.bindObj.winEffect.play(0 , false);
			this.bindObj.effectLabel.text = "+" + addNum;
			this.bindObj.effectLabel.visible = true;
			this.bindObj.flyLabel.play(0, false);
		}

		/** 隐藏玩家胜利动效 */
		public playerWinHide(){
			this.bindObj
		}
	}
}