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
        /** 游戏结算结束动作 */
        var GameOverSettlementAction = /** @class */ (function (_super) {
            __extends(GameOverSettlementAction, _super);
            function GameOverSettlementAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameOverSettlementAction.prototype.runActionFunc = function () {
                //设置所有玩家为结束阶段
                for (var userId in this.gameCtrl.userIDPlayerObjMap) {
                    var playerObj = this.gameCtrl.userIDPlayerObjMap[userId];
                    if (playerObj.isOverGame)
                        continue;
                    playerObj.localStage = GamePlayerStage.Over;
                }
            };
            return GameOverSettlementAction;
        }(action.GameActionBase));
        action.GameOverSettlementAction = GameOverSettlementAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=21_GameOverSettlementAction.js.map