
module game.action {

    import GamePlayerStage = gameenum.GamePlayerStage;
	
    
    
    /** 游戏开始动作*/
    export class GameStartAction extends action.GameActionBase {

        public runActionFunc() {
			//设置所有玩家为等待阶段
            for (const userId in this.gameCtrl.userIDPlayerObjMap) {
                var playerObj = this.gameCtrl.userIDPlayerObjMap[userId];
                playerObj.localStage = GamePlayerStage.Wating;
            }
        }
    }
}
