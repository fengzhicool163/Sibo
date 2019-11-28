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
        var GamePlayerCountDownBase = /** @class */ (function (_super) {
            __extends(GamePlayerCountDownBase, _super);
            function GamePlayerCountDownBase() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //
                _this.proBarStartR = 133;
                _this.proBarEndR = 360;
                _this.proDis = null;
                _this.proMaskChangeR = 240;
                _this.proMaskStartR = 120;
                _this.proMaskState0 = 240;
                _this.proMaskState1 = 360;
                //
                _this.allTime = 20;
                _this.startTime = null;
                //
                _this.isCountDownUpdate = false;
                _this.curProState = -1;
                _this.CountOverFunc = null;
                //
                _this.isCountDownAnim = false;
                _this.actionMap = [
                    true,
                    true,
                    true,
                ];
                return _this;
            }
            GamePlayerCountDownBase.prototype.initComponents = function () {
                //进度条数据
                this.proDis = this.proBarEndR - this.proBarStartR;
                //
                this.resetBox();
            };
            GamePlayerCountDownBase.prototype.destroy = function () {
                this.resetBox();
                _super.prototype.destroy.call(this);
            };
            /** 倒计时进度条刷新方法 */
            GamePlayerCountDownBase.prototype.updateCountDownRotation = function () {
                //刷新进度条
                var overTime = Date.now() - this.startTime;
                var proV = Math.min(1, overTime / this.allTime);
                var proR = proV * this.proDis + this.proBarStartR;
                this.bindObj.coutDownProBar.rotation = proR;
                this.updateCountDownState();
                //刷新倒计时
                var leftTime = Math.ceil((this.allTime - overTime) / 1000);
                //倒计时结束
                if (leftTime <= 0) {
                    this.resetBox();
                    if (this.CountOverFunc) {
                        this.CountOverFunc();
                    }
                    return;
                }
                //显示
                if (leftTime > 3) {
                    this.bindObj.coutDownFont.value = leftTime.toString();
                }
                else {
                    //动画
                    if (!this.isCountDownAnim) {
                        this.isCountDownAnim = true;
                        this.bindObj.coutDownFont.visible = false;
                        this.bindObj.countDownAnim.visible = true;
                        this.bindObj.countDownAnim.play(0, false, true, 3 - leftTime);
                    }
                    //音效
                    var index = leftTime % 3;
                    var canAction = this.actionMap[index];
                    if (canAction) {
                        this.actionMap[index] = false;
                        this.PlayDi();
                    }
                }
            };
            /** 更新遮罩 */
            GamePlayerCountDownBase.prototype.updateCountDownState = function () {
                var curProState = this.bindObj.coutDownProBar.rotation >= this.proMaskChangeR ? 1 : 0;
                if (curProState == this.curProState)
                    return;
                this.curProState = curProState;
                var maskEndR = this["proMaskState" + curProState];
                this.bindObj.coutDownMaskSprite.graphics.clear();
                this.bindObj.coutDownMaskSprite.graphics.drawPie(0, 0, 110, this.proMaskStartR, maskEndR, "#ff0000");
            };
            /**************************************************** 外部调用倒计时模块 ***************************************************/
            /** 关闭玩家倒计时 */
            GamePlayerCountDownBase.prototype.resetBox = function () {
                //
                this.isCountDownAnim = false;
                for (var index = 0; index < this.actionMap.length; index++) {
                    this.actionMap[index] = true;
                }
                //
                this.isCountDownAnim = false;
                this.bindObj.countDownAnim.stop();
                this.bindObj.countDownAnim.visible = false;
                //
                this.isCountDownUpdate = false;
                this.bindObj.timer.clear(this, this.updateCountDownRotation);
                this.bindObj.coutDownProNode.visible = false;
                this.bindObj.coutDownFontNode.visible = false;
                this.bindObj.countDownProBG.visible = false;
                //
                this.StopDi();
            };
            /** 关闭玩家倒计时 */
            GamePlayerCountDownBase.prototype.clearBox = function () {
                this.resetBox();
            };
            /**
             * 开始玩家倒计时
             * @param leftTime 倒计时剩余时间
             * @param allTime  倒计时总时间
             */
            GamePlayerCountDownBase.prototype.setData = function (leftTime, allTime, callBack) {
                if (allTime === void 0) { allTime = 20; }
                if (callBack === void 0) { callBack = null; }
                //
                this.allTime = allTime * 1000;
                var overTime = this.allTime - leftTime * 1000;
                this.startTime = Date.now() - overTime;
                this.CountOverFunc = callBack;
                //
                this.bindObj.coutDownFont.visible = true;
                this.bindObj.coutDownProNode.visible = true;
                this.bindObj.coutDownProBar.rotation = this.proBarStartR;
                this.bindObj.coutDownFontNode.visible = true;
                this.bindObj.countDownProBG.visible = true;
                //
                if (!this.isCountDownUpdate) {
                    this.isCountDownUpdate = true;
                    this.bindObj.timer.frameLoop(1, this, this.updateCountDownRotation);
                }
            };
            return GamePlayerCountDownBase;
        }(common.component.UIBox));
        component.GamePlayerCountDownBase = GamePlayerCountDownBase;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GamePlayerCountDownBase.js.map