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
        var GamePlayerTalk = gameenum.GamePlayerTalk;
        /** 某个玩家开始比牌补足筹码 */
        var PlayerStartCompareAction = /** @class */ (function (_super) {
            __extends(PlayerStartCompareAction, _super);
            function PlayerStartCompareAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerStartCompareAction.prototype.runActionFunc = function (data) {
                //
                this.printTime("[玩家开始比牌]", data.time, 5, data);
                //获取发起比牌对象
                var fplayerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                if (!fplayerObj)
                    return null;
                //设置补足筹码数
                fplayerObj.addBetNum = (data.t_u != "*") ? data.score : fplayerObj.balanceScore;
                //刚开始比牌,发起比牌玩家补足筹码，更新数据与玩家阶段状态
                fplayerObj.balanceScore = parseFloat(data.balanceScore); //刷新发起比牌玩家当前剩余金币
                fplayerObj.totalBetScore = data.totalBetScore; //刷新发起比牌玩家当前总下注数
                fplayerObj.localStage = GamePlayerStage.Compared;
                // 设置牌局总注数
                var roomObj = this.gameCtrl.roomObj;
                roomObj.totalBetScore += fplayerObj.addBetNum;
                this.roomPanel.setRoundInfo(roomObj.curRound + 1, roomObj.totalBetScore);
                //发起比牌人比牌下注
                if (data.t_u != "*") {
                    this.roomPanel.playerStartCompare(fplayerObj, GamePlayerTalk.Compared);
                }
                else {
                    this.roomPanel.playerStartCompare(fplayerObj, GamePlayerTalk.GZYZ);
                }
                //等待500毫秒
                this.gameCtrl.actionQueue.LockActionQueueTime(500);
                //开始比牌动作
                var startCompareAction = new action.PlayerComparingAction();
                startCompareAction.setActionData(data);
                this.gameCtrl.actionQueue.addFirstAction(startCompareAction);
            };
            return PlayerStartCompareAction;
        }(action.GameActionBase));
        action.PlayerStartCompareAction = PlayerStartCompareAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=15_PlayerStartCompareAction.js.map