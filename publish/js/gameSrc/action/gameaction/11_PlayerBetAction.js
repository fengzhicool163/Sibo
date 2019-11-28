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
        /** 某个玩家下注动作*/
        var PlayerBetAction = /** @class */ (function (_super) {
            __extends(PlayerBetAction, _super);
            function PlayerBetAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerBetAction.prototype.runActionFunc = function (data) {
                this.printTime("[某个玩家下注]", data.time, data.remainingTime, data);
                //更新房间数据
                var roomObj = this.gameCtrl.roomObj;
                roomObj.totalBetScore += data.score;
                this.roomPanel.setRoundInfo(roomObj.curRound + 1, roomObj.totalBetScore);
                //刷新玩家数据
                var playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                if (!playerObj || playerObj.isOverGame)
                    return null;
                //更新玩家数据
                playerObj.balanceScore = parseFloat(data.balanceScore);
                playerObj.addBetNum = data.score;
                playerObj.totalBetScore = data.totalBetScore;
                playerObj.localStage = GamePlayerStage.Wating;
                //
                this.roomPanel.playerBet(playerObj);
                //防止消息堆积
                this.gameCtrl.actionQueue.LockActionQueueTime(500);
            };
            return PlayerBetAction;
        }(action.GameActionBase));
        action.PlayerBetAction = PlayerBetAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=11_PlayerBetAction.js.map