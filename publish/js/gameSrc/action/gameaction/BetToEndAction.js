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
        var BetEndAction = /** @class */ (function (_super) {
            __extends(BetEndAction, _super);
            function BetEndAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BetEndAction.prototype.runActionFunc = function (data) {
            };
            return BetEndAction;
        }(action.GameActionBase));
        action.BetEndAction = BetEndAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=BetToEndAction.js.map