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
        /** 通用报错协议 */
        var CommonErrorAction = /** @class */ (function (_super) {
            __extends(CommonErrorAction, _super);
            function CommonErrorAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CommonErrorAction.prototype.runActionFunc = function (data) {
                //
                if (data.userId != UserInfoManger.UserId)
                    return;
                //
                var self = this.gameCtrl;
                //换桌失败
                if (data.clientCode == 1002) {
                    lobby.panel.MatchPanel.Hide();
                    common.panel.PopInfoPanel.Show(data.reason, function () {
                        self.goBackGameLobby();
                    });
                    return;
                }
                //退出失败
                if (data.clientCode == 1008) {
                    common.panel.PopInfoPanel.Show(data.reason);
                    return;
                }
            };
            return CommonErrorAction;
        }(action.GameActionBase));
        action.CommonErrorAction = CommonErrorAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=6000_CommonErrorAction.js.map