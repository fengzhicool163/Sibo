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
//items.GameCardItem
var items;
(function (items) {
    var GameCardItemBase = /** @class */ (function (_super) {
        __extends(GameCardItemBase, _super);
        function GameCardItemBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameCardItemBase.prototype.playShowCardAnim = function () {
            this.showCardAnim.play(0, false);
        };
        /** 结束牌所有动画 */
        GameCardItemBase.prototype.stopAnim = function () {
            this.timer.clear(this, this.playShowCardAnim);
            this.timer.clear(this, this.playSendAudio);
            Laya.Tween.clearTween(this);
        };
        /** 销毁牌 */
        GameCardItemBase.prototype.destroy = function () {
            this.stopAnim();
            _super.prototype.destroy.call(this, true);
        };
        /** 重置牌 */
        GameCardItemBase.prototype.resetCard = function () {
            this.resetAnim.play(0, false);
        };
        /** 亮牌 */
        GameCardItemBase.prototype.showCardNum = function (cardNum, isAnim, delay) {
            if (isAnim === void 0) { isAnim = true; }
            if (delay === void 0) { delay = 0; }
            this.resetCard();
            var imageUrl = this.getCardImage(cardNum);
            if (imageUrl) {
                this.cardImage.skin = imageUrl;
                if (isAnim) {
                    if (delay > 0) {
                        Laya.timer.once(delay, this, this.playShowCardAnim);
                    }
                    else {
                        this.playShowCardAnim();
                    }
                }
                else {
                    this.cardImage.visible = true;
                    this.cardBg.visible = false;
                }
            }
            else {
                this.cardImage.visible = false;
                this.cardBg.visible = true;
            }
        };
        /** 隐藏牌 */
        GameCardItemBase.prototype.hideCard = function () {
            this.stopAnim();
            this.cardImage.visible = false;
            this.cardBg.visible = false;
            this.visible = false;
        };
        /** */
        GameCardItemBase.prototype.setSendStartData = function () {
            this.sendCard.visible = true;
        };
        /** 保存牌原始尺寸数据 */
        GameCardItemBase.prototype.initOrData = function () {
            if (this.sendCard)
                return;
            this.sendCard = this.cardBg;
            this.tweenCall = Laya.Handler.create(this, this.finishCardAnim, null, false);
            this.orPos = new Laya.Point(this.sendCard.x, this.sendCard.y);
            this.orScale = new Laya.Point(this.sendCard.scaleX, this.sendCard.scaleY);
            this.orRotation = this.sendCard.rotation;
        };
        /** 播放发牌动画
         * var point = new Laya.Point(Laya.stage.width / 2, Laya.stage.height / 2 - 45); //屏幕中心
         */
        GameCardItemBase.prototype.playSendCardAnim = function (delay, startGlobalPos) {
            this.initOrData();
            //发牌初始点
            var startPos = this.globalToLocal(startGlobalPos, true);
            this.sendCard.pos(startPos.x, startPos.y);
            this.setSendStartData();
            //
            var rotation = this.orRotation + 360 * 5;
            //
            Laya.Tween.to(this.sendCard, {
                x: this.orPos.x,
                y: this.orPos.y,
                rotation: rotation,
            }, GameCardItem.SendCardTime, Laya.Ease.linearNone, this.tweenCall, delay, true);
            //
            this.timer.once(delay - 10, this, this.playSendAudio);
            //
            this.visible = true;
        };
        /** 结束发牌动画 */
        GameCardItemBase.prototype.finishCardAnim = function () {
            this.initOrData();
            this.stopAnim();
            this.sendCard.scale(this.orScale.x, this.orScale.y);
            this.sendCard.rotation = this.orRotation;
            this.sendCard.pos(this.orPos.x, this.orPos.y);
            this.sendCard.visible = true;
        };
        /**************************************************** 发牌动画模块 ***************************************************/
        /** 发牌动画飞行时间 */
        GameCardItemBase.SendCardTime = 200;
        return GameCardItemBase;
    }(ui.gameUI.GameItems.GameCardItemUI));
    items.GameCardItemBase = GameCardItemBase;
})(items || (items = {}));
//# sourceMappingURL=GameCardItemBase.js.map