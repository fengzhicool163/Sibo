/**
* name 
*/
module game.component {

    export class GameMainPlayerSitBox extends GamePlayerSitBox {

        protected bindObj: ui.gameUI.GamePlayerSit.main.GameMainPlayerSitBoxUI;

        /** 游戏操作盒子 */
        protected gameStateCtrlBox: GameStateCtrlBox;
        /** 下注盒子 */
        //protected betCtrlBarBox: GameBetCtrlBarBox;

        public initComponents() {
            super.initComponents();
            //下注控制条
            //this.betCtrlBarBox = this.bindScript(GameBetCtrlBarBox, this.bindObj.betCtrlBarBoxObj);
            //游戏状态控制条
            this.gameStateCtrlBox = this.bindScript(GameStateCtrlBox, this.bindObj.gameStateCtrlBoxObj);
        }

        protected updatePlayerCtrlBox() {
            //
            //this.betCtrlBarBox.UpdateBetCtrlBarData(this.playerObj);
            //
            this.gameStateCtrlBox.updateGameStateCtrlBox(this.playerObj);
        }

        /** 玩家入座 */
        public playerJoinSit(playerObj: game.objs.PlayerObject, isAnim: boolean) {
            super.playerJoinSit(playerObj, isAnim);
            //玩家入座监听控制按钮变化
            this.ctrl.addListener(this.ctrl.Event.PlayerCtrlBtnUpdate, this, this.updatePlayerCtrlBox);
            this.ctrl.addListener(this.ctrl.Event.TimeEndUpDate, this, this.TimeEndUpDate);
           
            //
            this.updatePlayerCtrlBox();
        }

        public playerLeaveSit() {
            super.playerLeaveSit();
            //玩家离座注销监听
            this.ctrl.removeListener(this.ctrl.Event.PlayerCtrlBtnUpdate, this, this.updatePlayerCtrlBox);
            this.ctrl.removeListener(this.ctrl.Event.TimeEndUpDate, this, this.TimeEndUpDate);
           
           
            //
            //this.betCtrlBarBox.resetBox();
            //
            this.gameStateCtrlBox.resetBox();
        }

        public TimeEndUpDate() {
            //this.betCtrlBarBox.TimeEndUpdate();
            this.gameStateCtrlBox.TimeEndUpdate();
        }

    

        /**  孤注一掷*/
        public fightBet() {
            this.gameStateCtrlBox.oneBtnFunc();
        }
      

    }
}