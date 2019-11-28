
//items.GameCardItem
module items {
	export class GameChipItem extends GameChipItemBase {
        

        protected timeLine : Laya.TimeLine;
        protected targetX : number;
        protected targetY : number;
        protected targetArea: string;
        protected startX:number;
        protected startY:number;
        /**
         * 飞筹码
         * @param startX 起始点X
         * @param startY 起始点Y
         * @param targetX 目标X
         * @param targetY 目标Y
         */
        public flyChip( startX : number ,startY : number ,targetX : number , targetY : number , flyTime : number = 1000,v:boolean=false){
            //
            if(this.timeLine){
                this.finishChip();
            }
            //
            this.targetX = targetX;
            this.targetY = targetY;
          
            //筹码初始化位置
            this.visible = true;
            this.pos( startX , startY );
            //移动过去
            this.timeLine = new Laya.TimeLine();
            
            this.scale(0.5,0.5);
            this.timeLine.to( this , {x:targetX, y:targetY} , flyTime, Laya.Ease.circOut)
            .to(this , {scaleX:0.4, scaleY:0.4} , 100, Laya.Ease.linearNone)
            .to(this , {scaleX:0.3, scaleY:0.3} , 100, Laya.Ease.linearNone);
          
            this.timeLine.play(0,false);
            this.timeLine.on(Laya.Event.COMPLETE , this , this.onComplete,[v]);
        }


        public onComplete(v:boolean){
            this.visible = v;
        }
        /**
         * 完成飞行动画
         */
        public finishChip(){
            if(this.timeLine){
                this.timeLine.pause();
                this.timeLine.destroy();
                this.timeLine = null;
            }
            this.pos(this.targetX,this.targetY);
            this.scale(1,1);
            this.visible = true;
        }

        /**
         * 请空筹码
         */
        public clearChip(){
            if(this.timeLine){
                this.timeLine.pause();
                this.timeLine.destroy();
                this.timeLine = null;
            }
            this.pos(this.targetX,this.targetY);
            this.scale(1,1);
            this.visible = false;
            this.targetArea = "";
            this.startX = 0;
            this.startY = 0;
        }

        protected getChipImage( chipNum : number ) {
            var url = game.asset.AssetConfig.ChipImageMap[chipNum];
            return url;
        }


        public setTargetArea(local:string){
            this.targetArea = local;
        }
        public getTargetArea():string{
            return this.targetArea;
        }
        

        public setStartPos(startX:number , startY:number){
            this.startX = startX;
            this.startY = startY;
        }
        public getStartPosX():number{
            return this.startX;
        }

        public getStartPosY():number{
            return this.startY;
        }
	}
}