/**
* name 
*/
module game.component {

	/** 手牌盒子基础类,只负责设置手牌与手牌显示动画 */
	export abstract class GamePlayerHCBoxBase extends common.component.UIBox {
		
		/** 所用使用该Box脚本的控件请必须遵照以下UI设置 */
		protected bindObj : ui.gameUI.GamePlayerSit.GamePlayerHCBoxUI;

		public cardList : items.GameCardItem[];

		protected initComponents() {
			//
			this.cardList = [];
			for (let index = 0; index < 3; index++) {
				const cardItem = this.bindObj["card" + index];
				this.cardList.push(cardItem);
			}
			//
			this.bindObj.visible = false;
		}

		/**
		 * 设置默认手牌
		 */
		public resetBox() {
			for (let index = 0; index < this.cardList.length; index++) {
				const cardItem = this.cardList[index];
				cardItem.resetCard();
			}
			this.bindObj.visible = true;
		}

		/**
		 * 清空手牌
		 */
		public clearBox() {
			for (let index = 0; index < this.cardList.length; index++) {
				const cardItem = this.cardList[index];
				cardItem.hideCard();
			}
			this.bindObj.visible = false;
		}
		/**
		 * 设置手牌
		 * @param cardData 手牌数据
		 * @param isAnim 是否播放开牌动画
		 */
		public setData(cardData : number[] , isAnim : boolean) {
			this.bindObj.visible = true;
			for (let index = 0; index < this.cardList.length; index++) {
				const cardItem = this.cardList[index];
				const cardNum = cardData[index];
				cardItem.showCardNum(cardNum,isAnim);
			}
		}
		
	}
}