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
    (function (action_1) {
        var GamePlayerStage = gameenum.GamePlayerStage;
        /** 游戏开始发牌与下底注动作*/
        var GameStartSendCardAction = /** @class */ (function (_super) {
            __extends(GameStartSendCardAction, _super);
            function GameStartSendCardAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameStartSendCardAction.prototype.runActionFunc = function (data) {
                //
                this.printTime("[游戏开始下底注]", data.time, 15, data);
                //
                //
                this.gameCtrl.roomObj.lastBetScore = data.score;
                this.gameCtrl.roomObj.curRoundUuid = data.uuid;
                //玩家下底注数据更新
                for (var userId in this.gameCtrl.userIDPlayerObjMap) {
                    var playerObj = this.gameCtrl.userIDPlayerObjMap[userId];
                    //求出玩家最新余额
                    playerObj.balanceScore = playerObj.balanceScore;
                    //设置玩家增加的下注数
                    playerObj.addBetNum = data.score;
                    //设置玩家总下注数
                    playerObj.totalBetScore = data.score;
                    //
                    playerObj.isOverGame = false;
                    //
                    playerObj.isLookCard = false;
                    //玩家本地游戏状态切换成等待操作
                    playerObj.localStage = GamePlayerStage.SendCard;
                }
                //获取发牌动画时长
                var sendAnimTime = this.roomPanel.gameStartBetBase(data);
                //保证发牌动画播放
                this.gameCtrl.actionQueue.LockActionQueueTime(sendAnimTime);
                //插队一个游戏开始动作到队列
                var action = new action_1.GameStartAction();
                action.setActionData();
                this.gameCtrl.actionQueue.addFirstAction(action);
            };
            return GameStartSendCardAction;
        }(action.GameActionBase));
        action_1.GameStartSendCardAction = GameStartSendCardAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=08_GameStartSendCardAction.js.map