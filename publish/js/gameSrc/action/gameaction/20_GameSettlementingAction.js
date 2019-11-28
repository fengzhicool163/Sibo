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
        /** 游戏结束亮牌动作 */
        var GameSettlementingAction = /** @class */ (function (_super) {
            __extends(GameSettlementingAction, _super);
            function GameSettlementingAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameSettlementingAction.prototype.runActionFunc = function (data) {
                //
                this.printTime("[游戏结算中]", data.time, 5, data);
                //
                var settlementPlayerObjs = [];
                //
                for (var userId in data.i) {
                    var playerObj = this.gameCtrl.getPlayerObjByUUID(userId);
                    if (!playerObj || playerObj.isOverGame)
                        continue;
                    var settlementStrs = data.i[userId].split("_");
                    var settlementNum = parseFloat(settlementStrs[0]);
                    var balanceScore = settlementStrs[1];
                    playerObj.balanceScore = parseFloat(balanceScore);
                    //只有赢的时候计算总的变账筹码
                    if (settlementNum > 0) {
                        playerObj.addBetNum = playerObj.totalBetScore + settlementNum;
                        settlementPlayerObjs.unshift(playerObj);
                    }
                    else {
                        playerObj.addBetNum = settlementNum;
                        settlementPlayerObjs.push(playerObj);
                    }
                }
                //
                if (settlementPlayerObjs.length < 1) {
                    if (GameMain.DEBUG)
                        console.error("服务器结算数据错误！！", data);
                    return;
                }
                //
                this.roomPanel.gameSettlement(settlementPlayerObjs);
                //
                this.gameCtrl.actionQueue.LockActionQueueTime(1000);
                //
                var overSettlement = new action.GameOverSettlementAction();
                overSettlement.setActionData();
                this.gameCtrl.actionQueue.addFirstAction(overSettlement);
            };
            return GameSettlementingAction;
        }(action.GameActionBase));
        action.GameSettlementingAction = GameSettlementingAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=20_GameSettlementingAction.js.map