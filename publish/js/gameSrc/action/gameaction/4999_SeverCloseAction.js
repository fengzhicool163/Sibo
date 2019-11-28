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
        /** 服务器关闭动作 */
        var SeverCloseAction = /** @class */ (function (_super) {
            __extends(SeverCloseAction, _super);
            function SeverCloseAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SeverCloseAction.prototype.runActionFunc = function (data) {
                var _this = this;
                //
                this.gameCtrl.actionQueue.ClearActionQueue();
                //var errorMsg = GameResponse.codeToMessage(data.closeCode);
                //errorMsg = errorMsg ? errorMsg : data.closeReason;
                console.log("ServerCloseAction   runActioon=============>", data.code);
                gameenum.ServerErrorCode.errorStatus = data;
                switch (data.closeCode) {
                    case 4009:
                    case 4015:
                        common.panel.PopInfoPanel.Show(data.closeReason, function () {
                            _this.gameCtrl.closeGameSocket();
                            var roomCtl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
                            roomCtl.gotoLobby();
                        });
                        break;
                    case 4001:
                        common.panel.PopInfoPanel.Show(data.closeReason, function () {
                            _this.gameCtrl.closeGameSocket();
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
            };
            return SeverCloseAction;
        }(action.GameActionBase));
        action.SeverCloseAction = SeverCloseAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=4999_SeverCloseAction.js.map