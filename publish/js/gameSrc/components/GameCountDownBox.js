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
/**
* name
*/
var game;
(function (game) {
    var component;
    (function (component) {
        var GameCountDownBox = /** @class */ (function (_super) {
            __extends(GameCountDownBox, _super);
            function GameCountDownBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameCountDownBox.prototype.PlayDi = function () {
                game.SoundManager.PlayDi();
            };
            GameCountDownBox.prototype.StopDi = function () {
                game.SoundManager.StopDi();
            };
            return GameCountDownBox;
        }(component.GameCountDownBoxBase));
        component.GameCountDownBox = GameCountDownBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameCountDownBox.js.map