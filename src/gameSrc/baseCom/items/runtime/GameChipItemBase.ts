
//items.GameCardItem
module items {
	export abstract class GameChipItemBase extends ui.gameUI.GameItems.GameChipItemUI {

        public chipNum : number = 0;

        constructor(){
            super();
            this.anchorX = this.anchorY = 0.5;
        }
        
        /**
         * 设置筹码显示
         * @param chipNum 
         */
        public setChipNum( chipNum : number ){
            this.chipNum = chipNum || 0;
            var url = this.getChipImage( this.chipNum );
            this.skin = url;
              var valueurl = this.getChipValueImage(chipNum);
            this.chipvalue.skin = valueurl;
        }

          protected getChipValueImage( chipNum:number){
            var url = game.asset.AssetConfig.ChipValueMap[chipNum];
            return url;
        }
        protected abstract getChipImage( chipNum : number );
	}
}