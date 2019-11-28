module game.component{
    export class BetBox extends common.component.UIComponent{
        private betArea:string;
        protected initComponents(){
            this.bindObj.btn_bet.on(Laya.Event.CLICK , this , this.onBetArea);
            this.hideBg();
        }

        /**  显示光亮背景 */
        public showBg(){
            this.bindObj.bj.visible = true;
        }

        /** 隐藏光亮背景 */
        public hideBg(){
            //if(GameMain.DEBUG)console.log("BetBox hideBg=============>")
            this.bindObj.bj.visible = false;
        }

        /** 点击投注按钮 */
        public onBetArea(){
            if(GameMain.DEBUG)console.log("BetBox onBetArea=============>");
            var gameCtrl:ctrl.GameRoomCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
            if(gameCtrl.roomObj.getGameState() != gameenum.GameStateType.PLAYING){
                return;
            }
            // 当前区域的总投注额
            var money:any = gameCtrl.roomObj.getBetMoneyByName(this.betArea);
            // 当前区域的限额
            var limit:any = gameCtrl.roomObj.getBetLimitByName(this.betArea);
            // 这次投注的金额
            var value = gameCtrl.roomObj.getLastBetScore();
            // 这次投注的金额 如果大于用户的余额，提示用户充值
            if(value > gameCtrl.getMainPlayerObj().balanceScore){
                 common.panel.PopInfoPanel.Show("您的金币不足，是否前去充值？",()=>{
                    SoundManager.PlayOpenPanel();
                    //跳转充值 
                    util.PostTool.jumpToRecharge();
                });
                return;
            }
           
            // 我自己下注的总金额，包括所有投注区域的金额总和
            var total:number = gameCtrl.roomObj.totalBetScore;
            if((money + value)> limit){
                EventManager.dispath(game.event.GameEvent.TIPS , ["您的押注金额已经超过限额"]);
                return;
            }
            if((value + total) > gameCtrl.roomObj.maxBet){
                 EventManager.dispath(game.event.GameEvent.TIPS , ["您的押注金额已经超过房间的限额"]);
                return;
            }
            net.protocol.GameRequest.reqBet(this.betArea , gameCtrl.roomObj.getLastBetScore());
        }

        public destroy(){
            super.destroy();
            this.bindObj.btn_bet.off(Laya.Event.CLICK , this , this.onBetArea);
        }

        public setBetArea(area:string ){
            this.betArea = area;
        }

        public getBetArea():string {
            return this.betArea;
        }
        public updateBetMoney(money:number){
            this.bindObj.bet_bj.visible = true;
            this.bindObj.bet_money.text = money;
        }

        public hideBetMoney(){
            this.bindObj.bet_bj.visible = false;
            this.bindObj.bet_money.text = "";
        }

        public clearBox(){
            this.bindObj.bet_bj.visible = false;
            this.bindObj.bet_money.text = "";
            this.bindObj.bj.visible = false;
        }
    }
}