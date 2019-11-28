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
        var GamePlayerHCBoxBase = /** @class */ (function (_super) {
            __extends(GamePlayerHCBoxBase, _super);
            function GamePlayerHCBoxBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GamePlayerHCBoxBase.prototype.initComponents = function () {
                //
                this.cardList = [];
                for (var index = 0; index < 3; index++) {
                    var cardItem = this.bindObj["card" + index];
                    this.cardList.push(cardItem);
                }
                //
                this.bindObj.visible = false;
            };
            /**
             * 设置默认手牌
             */
            GamePlayerHCBoxBase.prototype.resetBox = function () {
                for (var index = 0; index < this.cardList.length; index++) {
                    var cardItem = this.cardList[index];
                    cardItem.resetCard();
                }
                this.bindObj.visible = true;
            };
            /**
             * 清空手牌
             */
            GamePlayerHCBoxBase.prototype.clearBox = function () {
                for (var index = 0; index < this.cardList.length; index++) {
                    var cardItem = this.cardList[index];
                    cardItem.hideCard();
                }
                this.bindObj.visible = false;
            };
            /**
             * 设置手牌
             * @param cardData 手牌数据
             * @param isAnim 是否播放开牌动画
             */
            GamePlayerHCBoxBase.prototype.setData = function (cardData, isAnim) {
                this.bindObj.visible = true;
                for (var index = 0; index < this.cardList.length; index++) {
                    var cardItem = this.cardList[index];
                    var cardNum = cardData[index];
                    cardItem.showCardNum(cardNum, isAnim);
                }
            };
            return GamePlayerHCBoxBase;
        }(common.component.UIBox));
        component.GamePlayerHCBoxBase = GamePlayerHCBoxBase;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GamePlayerHCBoxBase.js.map