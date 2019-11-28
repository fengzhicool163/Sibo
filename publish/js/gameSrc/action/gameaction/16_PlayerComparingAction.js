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
        /** 某个玩家开始比牌了 */
        var PlayerComparingAction = /** @class */ (function (_super) {
            __extends(PlayerComparingAction, _super);
            function PlayerComparingAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerComparingAction.prototype.runActionFunc = function (data) {
                //
                this.printTime("[玩家比牌中]", data.time, 5, data);
                //玩家结束比牌动作
                var overCompareAction = new action.PlayerOverCompareAction();
                overCompareAction.setActionData(data);
                //该阶段分配4.5秒
                var time = this.gameCtrl.getRealRemainingTime(data.time, 4.5);
                if (time >= 2.5) { //剩余时间小于2.5秒抛弃展示框表现
                    this.gameCtrl.actionQueue.LockActionQueueTime(2500);
                    //
                    if (data.t_u != "*") {
                        var fplayerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                        var tplayerObj = this.gameCtrl.getPlayerObjByUUID(data.t_u);
                        var isLeftWin = (data.l_u != data.f_u);
                        //展示玩家比牌
                        this.roomPanel.playerComparing(fplayerObj, tplayerObj, isLeftWin);
                    }
                    else {
                        this.roomPanel.playerGZYZ();
                    }
                    //
                    this.gameCtrl.actionQueue.addFirstAction(overCompareAction);
                }
                else {
                    if (GameMain.DEBUG)
                        console.error("比牌动画时间不够,抛弃比牌动画");
                    overCompareAction.doAction();
                }
            };
            return PlayerComparingAction;
        }(action.GameActionBase));
        action.PlayerComparingAction = PlayerComparingAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=16_PlayerComparingAction.js.map