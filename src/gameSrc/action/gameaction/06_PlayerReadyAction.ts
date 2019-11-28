
module game.action {

    import GamePlayerStage = gameenum.GamePlayerStage;
    

    /** 玩家准备动作*/
    export class PlayerReadyAction extends action.GameActionBase {

        public runActionFunc(data: net.protocol.PlayerReadyBean) {
            //获取玩家对象
            var playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
			if (!playerObj) return null;
			//更新玩家对象数据
			playerObj.balanceScore = parseFloat(data.balanceScore);
			playerObj.localStage = GamePlayerStage.Ready;
            //进入队列
            this.roomPanel.playerReady( playerObj );
        }

    }

}
