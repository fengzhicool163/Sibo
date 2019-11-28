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
        var GameMenuBoxBase = /** @class */ (function (_super) {
            __extends(GameMenuBoxBase, _super);
            function GameMenuBoxBase() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isMenuOpen = false;
                return _this;
            }
            GameMenuBoxBase.prototype.initComponents = function () {
                //注册点击事件
                EventManager.addTouchScaleListener(this.bindObj.bgMask, this, this.menuBtnFunc, null, 1);
                EventManager.addTouchScaleListener(this.bindObj.menuBtn, this, this.menuBtnFunc);
                EventManager.addTouchScaleListener(this.bindObj.exitBtn, this, this.exitBtnFunc);
                EventManager.addTouchScaleListener(this.bindObj.historyBtn, this, this.historyBtnFunc);
                EventManager.addTouchScaleListener(this.bindObj.ruleBtn, this, this.ruleBtnFunc);
                EventManager.addTouchScaleListener(this.bindObj.settingBtn, this, this.settingBtnFunc);
                //
                this.closeMenu();
                //
                this.resize();
            };
            /** 注册监听 */
            GameMenuBoxBase.prototype.initlistener = function () {
                //
                Laya.stage.on(Laya.Event.RESIZE, this, this.resize);
            };
            /** 注销监听 */
            GameMenuBoxBase.prototype.unInitlistener = function () {
                Laya.stage.off(Laya.Event.RESIZE, this, this.resize);
            };
            GameMenuBoxBase.prototype.resize = function () {
                var wh = 16 / 9 + 0.01;
                if (Laya.stage.width / Laya.stage.height > wh) { //宽屏
                    this.bindObj.resizeNode.left = 10;
                }
                else {
                    this.bindObj.resizeNode.left = 10;
                }
            };
            GameMenuBoxBase.prototype.menuOpenFunc = function () {
                game.SoundManager.PlayClick();
                this.bindObj.menuOpenAnim.play(0, false);
            };
            GameMenuBoxBase.prototype.menuCloseFunc = function () {
                game.SoundManager.PlayClose();
                this.bindObj.menuCloseAnim.play(0, false);
            };
            /************************************************** 点击事件 ********************************************/
            GameMenuBoxBase.prototype.menuBtnFunc = function () {
                this.isMenuOpen = !this.isMenuOpen;
                if (this.isMenuOpen) {
                    this.menuOpenFunc();
                }
                else {
                    this.menuCloseFunc();
                }
            };
            GameMenuBoxBase.prototype.exitBtnFunc = function () {
                game.SoundManager.PlayClick();
                this.closeMenu();
                this.exitFunc();
            };
            GameMenuBoxBase.prototype.historyBtnFunc = function () {
                game.SoundManager.PlayClick();
                this.historyFunc();
                this.closeMenu();
            };
            GameMenuBoxBase.prototype.ruleBtnFunc = function () {
                game.SoundManager.PlayClick();
                this.ruleFunc();
                this.closeMenu();
            };
            GameMenuBoxBase.prototype.settingBtnFunc = function () {
                game.SoundManager.PlayClick();
                this.settingFunc();
                this.closeMenu();
            };
            /************************************** 外部调用接口 ********************************/
            GameMenuBoxBase.prototype.closeMenu = function () {
                if (this.bindObj.bgMask.visible) {
                    this.isMenuOpen = false;
                    this.bindObj.menuCloseAnim.play(0, false);
                }
            };
            return GameMenuBoxBase;
        }(common.component.UIComponent));
        component.GameMenuBoxBase = GameMenuBoxBase;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameMenuBoxBase.js.map