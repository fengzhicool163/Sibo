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
        /** 游戏结算开始动作 */
        var GameStartSettlementAction = /** @class */ (function (_super) {
            __extends(GameStartSettlementAction, _super);
            function GameStartSettlementAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameStartSettlementAction.prototype.runActionFunc = function (data) {
                //
                this.printTime("[玩家开始结算]", data.time, 5, data);
                // this.gameCtrl.roomObj.state = data.state;
                var roomObj = this.gameCtrl.roomObj;
                var info = data.info;
                //this.gameCtrl.getMainPlayerObj().setLastBonusScore(0);
                var change = 0;
                this.gameCtrl.getMainPlayerObj().setLastBonusScore(0);
                for (var i = 0; i < info.length; i++) {
                    var item = info[i];
                    if (item.uid == UserInfoManger.UserId) {
                        change = change + item.change;
                        this.gameCtrl.getMainPlayerObj().setBalance(item.balance + change);
                        this.gameCtrl.getMainPlayerObj().setLastBonusScore(change);
                        UserInfoManger.setUserBalance({ balance: item.balance + change });
                    }
                }
                var num1 = data.siboTypeScheme["dianshuOne"];
                var num2 = data.siboTypeScheme["dianshuTwo"];
                var num3 = data.siboTypeScheme["dianshuTree"];
                var total = num1 + num2 + num3;
                var str = "" + num1 + "_" + num2 + "_" + num3 + "_" + total + "_";
                if ((num1 == num2) && (num1 == num3)) {
                    str = str + "豹子";
                }
                else if (total > 10) {
                    str = str + "大";
                }
                else {
                    str = str + "小";
                }
                if (this.gameCtrl.roomObj.winInfo.length >= 100) {
                    this.gameCtrl.roomObj.winInfo = [];
                }
                this.gameCtrl.roomObj.winInfo.push(str);
                this.roomPanel.playGameSettlement(data);
                /**  重复投注数据 */
                this.gameCtrl.roomObj.fowardRebetArea = [];
                for (var i = 0; i < this.gameCtrl.roomObj.reBetArea.length; i++) {
                    this.gameCtrl.roomObj.fowardRebetArea.push(this.gameCtrl.roomObj.reBetArea[i]);
                }
                this.gameCtrl.roomObj.reBetArea = [];
                //     this.gameCtrl.actionQueue.LockActionQueueTime(1000);
                //     this.gameCtrl.actionQueue.addFirstAction( settlementAction );
                // }
            };
            return GameStartSettlementAction;
        }(action.GameActionBase));
        action.GameStartSettlementAction = GameStartSettlementAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=19_GameStartSettlementAction.js.map