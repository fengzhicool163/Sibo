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
    var commponet;
    (function (commponet) {
        var WinTipsBox = /** @class */ (function (_super) {
            __extends(WinTipsBox, _super);
            function WinTipsBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WinTipsBox.prototype.initComponents = function () {
            };
            WinTipsBox.prototype.showMsg = function (money, name) {
                if (name === void 0) { name = null; }
                //this.bindObj.msg.text = msg;
                this.bindObj.visible = true;
                if (name) {
                    this.bindObj.showPlayer.play(0, false);
                }
                else {
                    this.bindObj.showMe.play(0, false);
                }
                Laya.timer.once(2000, this, this.hideMsg);
            };
            WinTipsBox.prototype.hideMsg = function () {
                this.bindObj.visible = false;
            };
            return WinTipsBox;
        }(common.component.UIComponent));
        commponet.WinTipsBox = WinTipsBox;
    })(commponet = game.commponet || (game.commponet = {}));
})(game || (game = {}));
//# sourceMappingURL=WinTipsBox.js.map