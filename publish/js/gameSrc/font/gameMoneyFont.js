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
    var font;
    (function (font) {
        /*
        * 位图字体 game.font.gameMoneyFont
        *注意：素材要保持高度一致
        *要设置了text后才能正常获取宽和高
        */
        var gameMoneyFont = /** @class */ (function (_super) {
            __extends(gameMoneyFont, _super);
            function gameMoneyFont() {
                var _this = _super.call(this, game.asset.AssetConfig.GameMoneyFont) || this;
                _this._spacing = -2;
                return _this;
            }
            return gameMoneyFont;
        }(common.font.BitmapFont));
        font.gameMoneyFont = gameMoneyFont;
    })(font = game.font || (game.font = {}));
})(game || (game = {}));
//# sourceMappingURL=gameMoneyFont.js.map