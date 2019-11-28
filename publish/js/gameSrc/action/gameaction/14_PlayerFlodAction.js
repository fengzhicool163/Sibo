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
        var GamePlayerStage = gameenum.GamePlayerStage;
        /** 某个玩家弃牌了*/
        var PlayerFlodAction = /** @class */ (function (_super) {
            __extends(PlayerFlodAction, _super);
            function PlayerFlodAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerFlodAction.prototype.runActionFunc = function (data) {
                var playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                if (!playerObj)
                    return null;
                //玩家结束游玩标志
                playerObj.isOverGame = true;
                //设置玩家阶段
                playerObj.localStage = GamePlayerStage.Fold;
                playerObj.isAllFollow = false;
                //
                this.roomPanel.playerFold(playerObj);
            };
            return PlayerFlodAction;
        }(action.GameActionBase));
        action.PlayerFlodAction = PlayerFlodAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=14_PlayerFlodAction.js.map