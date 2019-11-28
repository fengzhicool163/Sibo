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
        /** 手牌盒子基础类,只负责设置手牌与手牌显示动画 */
        var GamePlayerHCBox = /** @class */ (function (_super) {
            __extends(GamePlayerHCBox, _super);
            function GamePlayerHCBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return GamePlayerHCBox;
        }(component.GamePlayerHCBoxBase));
        component.GamePlayerHCBox = GamePlayerHCBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GamePlayerHCBox.js.map