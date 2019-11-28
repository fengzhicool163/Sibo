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
        var TipMsgBox = /** @class */ (function (_super) {
            __extends(TipMsgBox, _super);
            function TipMsgBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TipMsgBox.prototype.initComponents = function () {
            };
            TipMsgBox.prototype.showMsg = function (msg) {
                this.bindObj.msg.text = msg;
                this.bindObj.visible = true;
                Laya.timer.once(2000, this, this.hideMsg);
            };
            TipMsgBox.prototype.hideMsg = function () {
                this.bindObj.visible = false;
            };
            return TipMsgBox;
        }(common.component.UIComponent));
        commponet.TipMsgBox = TipMsgBox;
    })(commponet = game.commponet || (game.commponet = {}));
})(game || (game = {}));
//# sourceMappingURL=TipMsgBox.js.map