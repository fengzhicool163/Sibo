

module game.component {

	export class GameShowCardBox extends common.component.UIComponent {

        protected bindObj : ui.gameUI.GameSettlementBox.GameShowCardBoxUI;
        
        protected cardList : items.GameCardItem[];

        protected initComponents() {
            this.cardList = [];
            for (let index = 1; index <= 3; index++) {
				const cardItem = this.bindObj["card" + index];
				this.cardList.push(cardItem);
			}
		}

		public destroy(){
            this.bindObj.timer.clear(this,this.hide);
			super.destroy();
        }

        /** 设置手牌类型显示 */
		protected setCardType( cardType : string ){
            var url = asset.AssetConfig.ShowCardTpyeMap[cardType];
            if(url){
                this.bindObj.cardType.skin = url;
                this.bindObj.cardType.alpha = 1;
                this.bindObj.cardTypeNode.visible = false;
                return true;
            }else{
                return false;
                // this.bindObj.cardType.alpha = 0;
                // var typeUrl = asset.AssetConfig.CardTpyeMap[cardType];
                // if(typeUrl){
                //     this.bindObj.cardTypeIcon.skin = typeUrl;
                //     this.bindObj.cardTypeNode.visible = true;
                // }else{
                //     this.bindObj.cardTypeNode.visible = false;
                // }
            }
        }

        /** 显示手牌数据 */
        protected showCardData(cardDatas : number[]){
            for (let index = 0; index < cardDatas.length; index++) {
                const cardNum = cardDatas[index];
                const cardItem = this.cardList[index];
                cardItem.showCardNum(cardNum,true);
            }
        }
        
		
        /**
         * 设置亮牌数据
         * @param cardDatas 
         * @param cardType 
         */
        public show( cardDatas : number[] , cardType : string ){
            try{
                //
                if(this.setCardType(cardType)){
                    //
                    this.showCardData(cardDatas);
                    //
                    this.bindObj.showCardAnim.play(0,false);
                    //
                    this.bindObj.visible = true;
                    return true;
                }
                return false;
            }catch( e ) {
                console.error(e,cardDatas);
            } 
        }

		public hide(){
            this.bindObj.timer.clear(this,this.hide);
            this.bindObj.showCardAnim.stop();
			this.bindObj.visible = false;
		}

	
	}
}