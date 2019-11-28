
module game.action {

    /** 玩家进入动作*/
    export class PlayerJoinAction extends action.GameActionBase {

        public runActionFunc(data: net.protocol.PlayerDataBean) {
            //
            var playerObj = this.gameCtrl.addPlayerObj(data);
            playerObj.setData( data );
            //
            this.roomPanel.playerSit( playerObj );
        }

    }

}
