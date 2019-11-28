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
        /** 游戏结束亮牌动作 */
        var GameOverShowCardAction = /** @class */ (function (_super) {
            __extends(GameOverShowCardAction, _super);
            function GameOverShowCardAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameOverShowCardAction.prototype.runActionFunc = function (data) {
                //
                this.printTime("[玩家结算亮牌]", data.time, 5, data);
                //打开结算胜利玩家亮牌界面
                var wplayerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                if (!wplayerObj)
                    return;
                wplayerObj.cards = this.gameCtrl.getCardLsit(data.v);
                wplayerObj.cardType = data.cardType;
                //设置所有玩家状态
                for (var key in this.gameCtrl.userIDPlayerObjMap) {
                    var playerObj = this.gameCtrl.userIDPlayerObjMap[key];
                    if (playerObj.isOverGame)
                        continue;
                    playerObj.localStage = GamePlayerStage.None;
                }
                //
                var time = this.gameCtrl.getRealRemainingTime(data.time, 5);
                if (time > 2) { //不够剩余展时间直接略过
                    //
                    var isShow = this.roomPanel.playerOverShowCard(wplayerObj);
                    if (isShow)
                        this.gameCtrl.actionQueue.LockActionQueueTime(2500);
                }
                else {
                    this.roomPanel.playerShowHandCards(wplayerObj, true);
                    if (GameMain.DEBUG)
                        console.error("时间不足抛弃玩家结算亮牌动画");
                }
            };
            return GameOverShowCardAction;
        }(action.GameActionBase));
        action.GameOverShowCardAction = GameOverShowCardAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=18_GameOverShowCardAction.js.map