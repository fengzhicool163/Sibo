/**
* name 
*/
module game.component {

    import GamePlayerStage = gameenum.GamePlayerStage;
    import GamePlayerState = gameenum.GamePlayerState;
    //import GamePlayerTalk = gameenum.GamePlayerTalk;

    export class GamePlayerSitBox extends common.component.UIComponent {

        //protected bindObj : ui.gameUI.GamePlayerSit.GamePlayerSitLBoxUI;

        /** 游戏管理器 */
        protected ctrl: ctrl.GameRoomCtrl;

        /** 玩家盒子 */
        protected playerBox: game.component.GamePlayerBox;
        /** 玩家手牌盒子 */
        protected playerHandCardBox: game.component.GamePlayerHCBox;
     

        /** 当前座位玩家对象 */
        protected playerObj: game.objs.PlayerObject;;

        /** 当前座位是否可点击操作 */
        protected canTouch = false;

        /** 初始化座位，绑定子盒子 */
        protected initComponents() {
            //
            this.ctrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
      
            //
       
         
        
        }

        /** 关闭座位表现效果 倒计时、比牌等特效 */
        public resetSit() {
           
            this.canTouch = false;
           

        }

        /** 获取座位手牌 */
        public getSitCardByIndex(index: number) {
            return this.playerHandCardBox.cardList[index];
        }

        /***************************************** 座位动作 ***********************************/

        /** 玩家离开 */
        public playerLeaveSit() {
            //
            this.resetSit();
            //
            this.canTouch = false;
            //
            this.playerObj = null;
         
            //玩家数据
         
         
        }

        /** 玩家入座 */
        public playerJoinSit(playerObj: game.objs.PlayerObject, isAnim: boolean) {
            //清空座位特效
            this.resetSit();
        
            //记录玩家入座
            isAnim = isAnim && !playerObj;
            this.playerObj = playerObj;
          
            //恢复玩家下注数据

         
        }

        /** 玩家准备 */
        public playerReady(playerObj: game.objs.PlayerObject) {
            //
            this.resetSit();
            //this.playerBetBox.setBetBoxVisible(false);
            //设置玩家状态
            this.playerBox.setPlayerState(GamePlayerState.Ready);
            //玩家说准备
            //this.playerBox.playerTalk(GamePlayerTalk.Ready);
            //音效
            SoundManager.PlayReady();
        }

        /** 玩家下底注 */
        public playerBetBase(playerObj: game.objs.PlayerObject) {
            //
            this.resetSit();
            //重置玩家
            this.playerBox.resetPlayer();
            //设置玩家剩余金币
            var money = playerObj.balanceScore - playerObj.totalBetScore;
            this.playerBox.setPlayerMoney(money);
            //设置玩家下注数据
            this.playerBetBox.setData(playerObj.totalBetScore);
            //发默认牌
            this.playerHandCardBox.resetBox();
        }

        /** 轮到某个玩家操作 */
        public playerAction(playerObj: game.objs.PlayerObject) {
            //console.warn("GamePlayerSitBox=================>", playerObj.remainingTime);
            this.playerBox.playerCoundDown(playerObj.remainingTime);
        }

        /** 玩家下注 */
        public playerBet(playerObj: game.objs.PlayerObject) {
            //
         
        }

        /** 某个玩家弃牌 */
        public playerFold(playerObj: game.objs.PlayerObject) {
            //
         
        }

        /** 某个玩家看牌了 */
        public playerLookCard(playerObj: game.objs.PlayerObject) {
       
        }

        /** 显示某个玩家手牌 */
        public showPlayerCard(playerObj: game.objs.PlayerObject, isAnim: boolean) {
           
        }

        /**
         * 打开玩家比牌效果
         */
        public showSelectCompare(canTouch: boolean) {
         
        }

      
     


        /** 玩家结算 */
        public playerSettlement(playerObj: game.objs.PlayerObject) {
           
        }

        /********************************************** 点击事件 *********************************************/
        /** 比牌点击事件 */
        protected comparePlayerFunc() {
          
        }
    }
}