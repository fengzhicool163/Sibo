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
        /** 轮到某个玩家操作了动作*/
        var PlayerActionTimeAction = /** @class */ (function (_super) {
            __extends(PlayerActionTimeAction, _super);
            function PlayerActionTimeAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerActionTimeAction.prototype.runActionFunc = function (data) {
                //
                this.printTime("[轮到某个玩家操作]", data.time, data.remainingTime, data);
                //保存最新数据
                var roomObj = this.gameCtrl.roomObj;
                roomObj.lastBetScore = data.lastBetScore;
                roomObj.curRound = data.round;
                roomObj.totalBetScore = data.tableTotalScore;
                //设置最新牌桌轮数与总下注数据
                this.roomPanel.setRoundInfo(roomObj.curRound + 1, roomObj.totalBetScore);
                //
                //获取操作玩家数据
                var playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                if (!playerObj || playerObj.isOverGame)
                    return null;
                //设置操作玩家阶段
                playerObj.localStage = GamePlayerStage.Playing;
                playerObj.setRemainingTime(data.time, data.remainingTime);
                //
                this.roomPanel.playerActionTime(playerObj);
                //设置其他玩家阶段
                for (var key in this.gameCtrl.userIDPlayerObjMap) {
                    var playerObj_1 = this.gameCtrl.userIDPlayerObjMap[key];
                    if (playerObj_1.userId == data.userId)
                        continue;
                    if (!playerObj_1.isOverGame) {
                        playerObj_1.localStage = GamePlayerStage.Wating;
                    }
                }
            };
            return PlayerActionTimeAction;
        }(action.GameActionBase));
        action.PlayerActionTimeAction = PlayerActionTimeAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=10_PlayerActionTimeAction.js.map