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
        /** 某个玩家看牌了*/
        var PlayerLookCardAction = /** @class */ (function (_super) {
            __extends(PlayerLookCardAction, _super);
            function PlayerLookCardAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerLookCardAction.prototype.runActionFunc = function (data) {
                var playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                if (!playerObj || playerObj.isOverGame)
                    return null;
                //设置玩家已经看牌状态
                playerObj.isLookCard = true;
                playerObj.updatePlayerAllowActionsMap();
                //
                this.roomPanel.playerLookedCard(playerObj);
            };
            return PlayerLookCardAction;
        }(action.GameActionBase));
        action.PlayerLookCardAction = PlayerLookCardAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=12_PlayerLookCardAction.js.map