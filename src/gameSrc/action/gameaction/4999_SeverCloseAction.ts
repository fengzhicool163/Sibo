
module game.action {

    import GameRequest = net.protocol.GameRequest;
    import GameResponse = net.protocol.GameResponse;

    /** 服务器关闭动作 */
    export class SeverCloseAction extends action.GameActionBase {

        public runActionFunc(data: net.protocol.SeverCloseBean) {
            //
            this.gameCtrl.actionQueue.ClearActionQueue();
            //var errorMsg = GameResponse.codeToMessage(data.closeCode);
            //errorMsg = errorMsg ? errorMsg : data.closeReason;
            console.log("ServerCloseAction   runActioon=============>", data.code)
            gameenum.ServerErrorCode.errorStatus = data;
            switch (data.closeCode) {
                case 4009:
                case 4015:
                    common.panel.PopInfoPanel.Show(data.closeReason, () => {

                        this.gameCtrl.closeGameSocket();
                        var roomCtl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
                        roomCtl.gotoLobby();
                    })
                    break;
                case 4001:
                    common.panel.PopInfoPanel.Show(data.closeReason, () => {
                        this.gameCtrl.closeGameSocket();
                        var roomCtl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
                        roomCtl.gotoLobby();
                    });
                    break;
                default:
                    common.panel.PopInfoPanel.Show(data.closeReason);
                    this.gameCtrl.goBackGameLobby();
                    break;
            }
            // common.panel.PopInfoPanel.Show(data.closeReason)
            //
            if (GameMain.DEBUG) {
                console.warn(data.closeReason);
            }
            //
            //this.gameCtrl.goBackGameLobby();
        }
    }
}
