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
        /** 玩家强制切换牌桌动作*/
        var ForceChangtable = /** @class */ (function (_super) {
            __extends(ForceChangtable, _super);
            function ForceChangtable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ForceChangtable.prototype.runActionFunc = function () {
                lobby.panel.MatchPanel.Show();
                //
                this.netCtrl.isChangeTable = true;
                //清空房间数据
                this.gameCtrl.clearData();
                //更新玩家显示界面
                this.roomPanel.clearRoom();
                //当换桌的时候，需要清空消息队列，防止换桌时还能收到消息；
                this.gameCtrl.actionQueue.ClearActionQueue();
                this.gameCtrl.actionQueue.LockActionQueueTime(1000);
            };
            return ForceChangtable;
        }(action.GameActionBase));
        action.ForceChangtable = ForceChangtable;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=10000_ForceChangtable.js.map