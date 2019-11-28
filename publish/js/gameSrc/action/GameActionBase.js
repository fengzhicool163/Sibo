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
        /** 房间初始化动作 */
        var GameActionBase = /** @class */ (function (_super) {
            __extends(GameActionBase, _super);
            function GameActionBase() {
                var _this = _super.call(this) || this;
                _this.gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                _this.netCtrl = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
                return _this;
            }
            Object.defineProperty(GameActionBase.prototype, "roomPanel", {
                get: function () {
                    return UIManager.getInstance().GetUI(game.panel.GameRoomPanel);
                },
                enumerable: true,
                configurable: true
            });
            /** 清空Action */
            GameActionBase.prototype.clear = function () {
                _super.prototype.clear.call(this);
                this.gameCtrl = null;
                this.netCtrl = null;
            };
            /** 阶段时间打印 */
            GameActionBase.prototype.printTime = function (preStr, msgTime, stageTime, data) {
                if (GameMain.DEBUG) {
                    var severTime = this.netCtrl.getCurSeverTime();
                    var overTime = ((severTime - msgTime) / 1000);
                    var severTimeStr = util.StringUtils.getDate(severTime);
                    var msgTimeStr = util.StringUtils.getDate(msgTime);
                    console.error(preStr + "当前剩余时间[" + (stageTime - overTime) + "s]");
                    console.log(preStr + "收到消息时间[" + msgTimeStr + "]" +
                        "当前服务器时间[" + severTimeStr + "]" +
                        "已经经过的服务器时间[" + overTime.toFixed(2) + "s]" +
                        "当前阶段时间[" + stageTime + "s]", data);
                }
            };
            return GameActionBase;
        }(common.action.ActionBase));
        action.GameActionBase = GameActionBase;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=GameActionBase.js.map