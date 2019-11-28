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
        /** 游戏开始投注动作*/
        var GameStartBetAction = /** @class */ (function (_super) {
            __extends(GameStartBetAction, _super);
            function GameStartBetAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameStartBetAction.prototype.runActionFunc = function (data) {
                //
                this.printTime("[游戏投注===]", data.time, 15, data);
                //
                //
                //this.gameCtrl.roomObj.lastBetScore = data.score;
                //this.gameCtrl.roomObj.curRoundUuid = data.uuid;
                //获取发牌动画时长
                var sendAnimTime = this.roomPanel.gameStartBetBase(data);
                //保证发牌动画播放
                //this.gameCtrl.actionQueue.LockActionQueueTime( sendAnimTime );
                //插队一个游戏开始动作到队列
                //var action = new GameStartAction();
                //action.setActionData();
                //this.gameCtrl.actionQueue.addFirstAction(action);
            };
            return GameStartBetAction;
        }(action.GameActionBase));
        action.GameStartBetAction = GameStartBetAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=08_GameStartBetAction.js.map