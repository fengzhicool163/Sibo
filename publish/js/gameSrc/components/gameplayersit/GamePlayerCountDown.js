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
        var GamePlayerCountDown = /** @class */ (function (_super) {
            __extends(GamePlayerCountDown, _super);
            function GamePlayerCountDown() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 播放滴滴音方法 */
            GamePlayerCountDown.prototype.PlayDi = function () {
                //SoundManager.PlayDi();
            };
            /** 停止播放滴滴音方法 */
            GamePlayerCountDown.prototype.StopDi = function () {
                //SoundManager.StopDi();
            };
            return GamePlayerCountDown;
        }(component.GamePlayerCountDownBase));
        component.GamePlayerCountDown = GamePlayerCountDown;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GamePlayerCountDown.js.map