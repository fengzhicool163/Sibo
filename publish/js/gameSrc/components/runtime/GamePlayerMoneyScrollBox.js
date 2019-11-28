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
    var component;
    (function (component) {
        //game.component.GamePlayerMoneyScrollBox
        var GamePlayerMoneyScrollBox = /** @class */ (function (_super) {
            __extends(GamePlayerMoneyScrollBox, _super);
            function GamePlayerMoneyScrollBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return GamePlayerMoneyScrollBox;
        }(common.component.PlayerMoneyScrollBoxBase));
        component.GamePlayerMoneyScrollBox = GamePlayerMoneyScrollBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GamePlayerMoneyScrollBox.js.map