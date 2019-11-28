
module game.action {

	
    /** 游戏结算结束动作 */
    export class PlayerOverHostSettingAction extends action.GameActionBase {

        public runActionFunc(data: net.protocol.OverHostDataBean) {
            var playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
			if (!playerObj) return null;
            playerObj.isOverHost = data.isOverHost;
            this.roomPanel.overHostUpdate( playerObj );
        } 
        
    }
}
