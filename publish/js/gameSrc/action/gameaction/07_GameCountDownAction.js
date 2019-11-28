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
        /** 游戏开始倒计时动作*/
        var GameCountDownAction = /** @class */ (function (_super) {
            __extends(GameCountDownAction, _super);
            function GameCountDownAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameCountDownAction.prototype.runActionFunc = function (data) {
                //
                this.printTime("[游戏倒计时]", data.time, data.remainingTime, data);
                //
                var remainingTime = this.gameCtrl.getRealRemainingTime(data.time, data.remainingTime);
                if (remainingTime >= 1.5) {
                    //开始倒计时
                    this.roomPanel.gameCountDown(remainingTime);
                }
                else {
                    if (GameMain.DEBUG)
                        console.error("时间不足抛弃倒计时动画");
                }
            };
            return GameCountDownAction;
        }(action.GameActionBase));
        action.GameCountDownAction = GameCountDownAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=07_GameCountDownAction.js.map