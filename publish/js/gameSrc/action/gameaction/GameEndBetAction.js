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
        var GameEndBetAction = /** @class */ (function (_super) {
            __extends(GameEndBetAction, _super);
            function GameEndBetAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameEndBetAction.prototype.runActionFunc = function (roomData) {
                //var data = roomData.data;
                this.gameCtrl.roomObj.state = roomData.data.state;
                //恢复或开始新一局游戏
                this.roomPanel.stopBet(roomData);
                //this.roomPanel.gameCountDown(data.remainingTime,data.state);
                //this.roomPanel.showBetCtrl(false);
                this.gameCtrl.actionQueue.LockActionQueueTime(1500);
            };
            return GameEndBetAction;
        }(action.GameActionBase));
        action.GameEndBetAction = GameEndBetAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=GameEndBetAction.js.map