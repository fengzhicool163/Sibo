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
        var GameBetReady = /** @class */ (function (_super) {
            __extends(GameBetReady, _super);
            function GameBetReady() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameBetReady.prototype.runActionFunc = function (roomData) {
                var data = roomData.data;
                this.gameCtrl.roomObj.state = roomData.data.state;
                //恢复或开始新一局游戏
                if (this.gameCtrl.roomObj.fowardRebetArea.length > 0) {
                    EventManager.dispath(game.event.GameEvent.UPDATE_REBET, [false]);
                }
                this.roomPanel.pushBetEvent(roomData);
                this.gameCtrl.actionQueue.LockActionQueueTime(1500);
            };
            return GameBetReady;
        }(action.GameActionBase));
        action.GameBetReady = GameBetReady;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=GameBetReady.js.map