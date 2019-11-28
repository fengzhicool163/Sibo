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
        var GameTipAction = /** @class */ (function (_super) {
            __extends(GameTipAction, _super);
            function GameTipAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameTipAction.prototype.runActionFunc = function (roomData) {
                this.roomPanel.gameTipMsg(roomData.content);
            };
            return GameTipAction;
        }(action.GameActionBase));
        action.GameTipAction = GameTipAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=GameTipAction.js.map