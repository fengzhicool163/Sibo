module items{
    export class GameChipBtn extends ui.gameUI.GameItems.GameChipBtnUI{

        public chipNum : number = 0;

         constructor(){
            super();
            this.chipbj.on(Laya.Event.CLICK , this , this.onBetClick);
        }
           protected getChipImage( chipNum : number ) {
            var url = game.asset.AssetConfig.ChipImageMap[chipNum];
            return url;
        }


        protected getChipValueImage( chipNum:number){
            var url = game.asset.AssetConfig.ChipValueMap[chipNum];
            return url;
        }
        public onBetClick(){

        }


          /**
         * 设置筹码显示
         * @param chipNum 
         */
        public setChipNum( chipNum : number ){
            this.chipNum = chipNum || 0;
            var url = this.getChipImage( this.chipNum );
            this.chipbj.skin = url;
            var valueurl = this.getChipValueImage(this.chipNum);
            this.chipValue.skin = valueurl;
        }


       
    }
}