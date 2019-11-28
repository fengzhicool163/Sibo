var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var game;
(function (game) {
    var action;
    (function (action) {
        /** 玩家被踢出房间动作*/
        var PlayerKickOutAction = /** @class */ (function (_super) {
            __extends(PlayerKickOutAction, _super);
            function PlayerKickOutAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerKickOutAction.prototype.runActionFunc = function (data) {
                var myUserId = UserInfoManger.UserId;
                gameenum.ServerErrorCode.errorStatus = data;
                if (GameMain.DEBUG) {
                    console.warn("玩家被提出runAction=============>", this.gameCtrl.getCurTime());
                }
                //判断是否是主玩家
                if (data.userId == myUserId) {
                    if (GameMain.DEBUG) {
                        console.warn("玩家被提出runAction=============111>", this.gameCtrl.getCurTime());
                    }
                    var closeCode = data.closeCode;
                    if (closeCode == 4009) {
                        common.panel.PopInfoPanel.Show(data.reason, function () {
                            //this.gameCtrl.closeGameSocket();
                            var roomCtl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
                            roomCtl.gotoLobby();
                        });
                        this.gameCtrl.goBackGameLobby();
                    }
                    else if (closeCode == 4013) {
                        // common.panel.PopInfoPanel.Show(data.reason, () => {
                        // 	this.gameCtrl.closeGameSocket();
                        // 	var roomCtl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
                        // 	roomCtl.gotoLobby();
                        // });
                        common.panel.PopInfoPanel.Show(data.reason);
                        this.gameCtrl.goBackGameLobby();
                    }
                    else {
                        common.panel.PopInfoPanel.Show(data.reason);
                        this.gameCtrl.goBackGameLobby();
                    }
                }
                else {
                    var localSit = this.gameCtrl.delPlayerObj(data.userId);
                    if (localSit) {
                        this.roomPanel.playerLeave(localSit);
                    }
                }
            };
            return PlayerKickOutAction;
        }(action.GameActionBase));
        action.PlayerKickOutAction = PlayerKickOutAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=05_PlayerKickOutAction.js.map