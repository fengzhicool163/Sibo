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
        /** 玩家离开动作*/
        var PlayerLeaveAction = /** @class */ (function (_super) {
            __extends(PlayerLeaveAction, _super);
            function PlayerLeaveAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerLeaveAction.prototype.runActionFunc = function (data) {
                var myUserId = UserInfoManger.UserId;
                //判断是否是主玩家
                if (data.userId == myUserId) {
                    this.gameCtrl.goBackGameLobby();
                }
            };
            return PlayerLeaveAction;
        }(action.GameActionBase));
        action.PlayerLeaveAction = PlayerLeaveAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=03_PlayerLeaveAction.js.map