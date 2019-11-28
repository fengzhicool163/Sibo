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
        var GameCountDownBoxBase = /** @class */ (function (_super) {
            __extends(GameCountDownBoxBase, _super);
            function GameCountDownBoxBase() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.countDownTime = 0;
                _this.countDownStartTime = 0;
                _this.isUpdate = false;
                _this.isCountDownAnim = false;
                _this.actionMap = [
                    true,
                    true,
                    true,
                ];
                return _this;
            }
            GameCountDownBoxBase.prototype.initComponents = function () {
                //初始化显示
                this.resetBox();
            };
            GameCountDownBoxBase.prototype.destroy = function () {
                this.resetBox();
                _super.prototype.destroy.call(this);
            };
            /************************************** 倒计时逻辑 ****************************************************/
            GameCountDownBoxBase.prototype.countDownUpdateFunc = function () {
                var overTime = Date.now() - this.countDownStartTime;
                var leftTime = this.countDownTime - overTime;
                if (leftTime <= 0) {
                    this.resetBox();
                    return;
                }
                leftTime = Math.ceil(leftTime / 1000);
                //显示
                if (leftTime > 3) {
                    this.bindObj.countDownNum.value = leftTime.toString();
                }
                else {
                    //动画
                    this.bindObj.countDownNum.value = leftTime.toString();
                    if (!this.isCountDownAnim) {
                        this.isCountDownAnim = true;
                        //this.bindObj.countDownNum.visible = false;
                        //this.bindObj.countDownAnim.visible = true;
                        //this.bindObj.countDownAnim.play(0,false,true,3 - leftTime);
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
            GameCountDownBoxBase.prototype.countDownStartFunc = function () {
                this.countDownStartTime = Date.now();
                this.bindObj.countDownNum.visible = true;
                this.bindObj.visible = true;
                this.countDownUpdateFunc();
                if (!this.isUpdate) {
                    this.bindObj.timerLoop(100, this, this.countDownUpdateFunc);
                }
            };
            /*********************************** 外部调用接口 ************************************************/
            GameCountDownBoxBase.prototype.resetBox = function () {
                //
                this.StopDi();
                //
                this.bindObj.countDownNum.value = "0";
                this.bindObj.slabel.text = "";
                //
                this.isCountDownAnim = false;
                //this.bindObj.countDownAnim.stop();
                //this.bindObj.countDownAnim.visible = false;
                //
                for (var index = 0; index < this.actionMap.length; index++) {
                    this.actionMap[index] = true;
                }
                //
                this.bindObj.clearTimer(this, this.countDownUpdateFunc);
                this.bindObj.visible = false;
            };
            GameCountDownBoxBase.prototype.clearBox = function () {
                this.resetBox();
            };
            /**
             * 倒计时
             * @param countDownTime 单位秒
             */
            GameCountDownBoxBase.prototype.setData = function (countDownTime, state) {
                this.resetBox();
                this.setState(state);
                this.countDownTime = countDownTime * 1000;
                this.countDownStartFunc();
            };
            GameCountDownBoxBase.prototype.setState = function (state) {
                if (state == 1) {
                    this.bindObj.slabel.text = "准备中";
                }
                else if (state == 2) {
                    this.bindObj.slabel.text = "下注中";
                }
                else if (state == 3) {
                    this.bindObj.slabel.text = "开奖中";
                }
                else {
                    this.bindObj.slabel.text = "结算中";
                }
            };
            return GameCountDownBoxBase;
        }(common.component.UIBox));
        component.GameCountDownBoxBase = GameCountDownBoxBase;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameCountDownBoxBase.js.map