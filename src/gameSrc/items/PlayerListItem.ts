module items{
    export class PlayerListItem extends ui.gameUI.GameItems.PlayListItemUI{
        protected itemData : any;
        constructor(){
			super();
			//EventManager.addTouchScaleListener(this.numberLabel,this,this.copyOrderNo);
		}

        public destroy(){
			super.destroy(true);
		}

		public removeSelf(){
			this.itemData = null;
			return super.removeSelf();
		}

        public setData( itemData: any ){
			this.itemData = itemData;
		
			//var amount = util.StringUtils.FormatMoney(itemData.amount,2);
            //设置头像
			var url = lobby.asset.AssetConfig.GetHeadAsset( itemData.avatar );
			this.headImg.loadImage(url, 0, 0, 80, 80);
            this.playername.text =  util.StringUtils.starString(itemData.userName, "****");
            this.balance.text = itemData.balanceScore;
            this.money.text = itemData.lastBonusScore;
            this.rankLabel.visible = false;
            this.rankicon_0.visible = false;
            this.rankicon_1.visible = false;
            this.rankicon_2.visible = false;
            this.rankicon_3.visible = false;
            if(itemData.rank ==1){
                this.rankicon_0.visible = true;
            }
            else if(itemData.rank == 2){
                this.rankicon_1.visible = true;
            }
            else if(itemData.rank == 3){
                this.rankicon_2.visible = true;
            }
            else{
                this.rankLabel.visible = true;
                this.rankLabel.text = itemData.rank;
            }

		}


        public setMySelf(data:game.objs.PlayerObject){
             //设置头像
			var url = lobby.asset.AssetConfig.GetHeadAsset( data.avatar );
			this.headImg.loadImage(url, 0, 0, 80, 80);
            this.playername.text = util.StringUtils.starString(data.username, "****");
            this.balance.text = "" + data.balanceScore;
            this.money.text = "" + data.lastBonusScore;
            this.rankLabel.visible = false;
            this.rankicon_0.visible = false;
            this.rankicon_1.visible = false;
            this.rankicon_2.visible = false;
            this.rankicon_3.visible = false;
            if(data.rank ==1){
                this.rankicon_0.visible = true;
            }
            else if(data.rank == 2){
                this.rankicon_1.visible = true;
            }
            else if(data.rank == 3){
                this.rankicon_2.visible = true;
            }
            else if(data.rank < 10){
                this.rankLabel.visible = true;
                 this.rankLabel.text = "" + data.rank;
            }
            else{
               this.rankicon_3.visible = true;
               
            }
        }

    }
}