
module game.action {

	
    import GamePlayerStage = gameenum.GamePlayerStage;
	
	
    /** 游戏结算结束动作 */
    export class GameOverSettlementAction extends action.GameActionBase {
        public runActionFunc() {
            //设置所有玩家为结束阶段
            for (const userId in this.gameCtrl.userIDPlayerObjMap) {
                var playerObj = this.gameCtrl.userIDPlayerObjMap[userId];
                if(playerObj.isOverGame) continue;
                playerObj.localStage = GamePlayerStage.Over;
            }
        }
    }
}
