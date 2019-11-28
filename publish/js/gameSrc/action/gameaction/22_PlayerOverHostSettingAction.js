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
        /** 游戏结算结束动作 */
        var PlayerOverHostSettingAction = /** @class */ (function (_super) {
            __extends(PlayerOverHostSettingAction, _super);
            function PlayerOverHostSettingAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerOverHostSettingAction.prototype.runActionFunc = function (data) {
                var playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                if (!playerObj)
                    return null;
                playerObj.isOverHost = data.isOverHost;
                this.roomPanel.overHostUpdate(playerObj);
            };
            return PlayerOverHostSettingAction;
        }(action.GameActionBase));
        action.PlayerOverHostSettingAction = PlayerOverHostSettingAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=22_PlayerOverHostSettingAction.js.map