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
        /** 玩家进入动作*/
        var PlayerJoinAction = /** @class */ (function (_super) {
            __extends(PlayerJoinAction, _super);
            function PlayerJoinAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerJoinAction.prototype.runActionFunc = function (data) {
                //
                var playerObj = this.gameCtrl.addPlayerObj(data);
                playerObj.setData(data);
                //
                this.roomPanel.playerSit(playerObj);
            };
            return PlayerJoinAction;
        }(action.GameActionBase));
        action.PlayerJoinAction = PlayerJoinAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=02_PlayerJoinAction.js.map