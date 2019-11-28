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
        /** 主玩家看牌数据返回*/
        var PlayerLookCardDataAction = /** @class */ (function (_super) {
            __extends(PlayerLookCardDataAction, _super);
            function PlayerLookCardDataAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerLookCardDataAction.prototype.runActionFunc = function (data) {
                var playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                if (!playerObj || playerObj.isOverGame)
                    return null;
                //更新玩家手牌数据
                playerObj.cards = this.gameCtrl.getCardLsit(data.v);
                playerObj.cardType = data.cardType;
                //玩家看牌标识
                playerObj.isLookCard = true;
                playerObj.updatePlayerAllowActionsMap();
                //
                this.roomPanel.playerCardDatas(playerObj);
            };
            return PlayerLookCardDataAction;
        }(action.GameActionBase));
        action.PlayerLookCardDataAction = PlayerLookCardDataAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=13_PlayerLookCardDataAction.js.map