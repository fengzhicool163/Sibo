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
        /** 玩家准备动作*/
        var PlayerReadyAction = /** @class */ (function (_super) {
            __extends(PlayerReadyAction, _super);
            function PlayerReadyAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerReadyAction.prototype.runActionFunc = function (data) {
                //获取玩家对象
                var playerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                if (!playerObj)
                    return null;
                //更新玩家对象数据
                playerObj.balanceScore = parseFloat(data.balanceScore);
                playerObj.localStage = GamePlayerStage.Ready;
                //进入队列
                this.roomPanel.playerReady(playerObj);
            };
            return PlayerReadyAction;
        }(action.GameActionBase));
        action.PlayerReadyAction = PlayerReadyAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=06_PlayerReadyAction.js.map