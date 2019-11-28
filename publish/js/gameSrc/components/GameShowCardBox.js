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
    var component;
    (function (component) {
        var GameShowCardBox = /** @class */ (function (_super) {
            __extends(GameShowCardBox, _super);
            function GameShowCardBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameShowCardBox.prototype.initComponents = function () {
                this.cardList = [];
                for (var index = 1; index <= 3; index++) {
                    var cardItem = this.bindObj["card" + index];
                    this.cardList.push(cardItem);
                }
            };
            GameShowCardBox.prototype.destroy = function () {
                this.bindObj.timer.clear(this, this.hide);
                _super.prototype.destroy.call(this);
            };
            /** 设置手牌类型显示 */
            GameShowCardBox.prototype.setCardType = function (cardType) {
                var url = game.asset.AssetConfig.ShowCardTpyeMap[cardType];
                if (url) {
                    this.bindObj.cardType.skin = url;
                    this.bindObj.cardType.alpha = 1;
                    this.bindObj.cardTypeNode.visible = false;
                    return true;
                }
                else {
                    return false;
                    // this.bindObj.cardType.alpha = 0;
                    // var typeUrl = asset.AssetConfig.CardTpyeMap[cardType];
                    // if(typeUrl){
                    //     this.bindObj.cardTypeIcon.skin = typeUrl;
                    //     this.bindObj.cardTypeNode.visible = true;
                    // }else{
                    //     this.bindObj.cardTypeNode.visible = false;
                    // }
                }
            };
            /** 显示手牌数据 */
            GameShowCardBox.prototype.showCardData = function (cardDatas) {
                for (var index = 0; index < cardDatas.length; index++) {
                    var cardNum = cardDatas[index];
                    var cardItem = this.cardList[index];
                    cardItem.showCardNum(cardNum, true);
                }
            };
            /**
             * 设置亮牌数据
             * @param cardDatas
             * @param cardType
             */
            GameShowCardBox.prototype.show = function (cardDatas, cardType) {
                try {
                    //
                    if (this.setCardType(cardType)) {
                        //
                        this.showCardData(cardDatas);
                        //
                        this.bindObj.showCardAnim.play(0, false);
                        //
                        this.bindObj.visible = true;
                        return true;
                    }
                    return false;
                }
                catch (e) {
                    console.error(e, cardDatas);
                }
            };
            GameShowCardBox.prototype.hide = function () {
                this.bindObj.timer.clear(this, this.hide);
                this.bindObj.showCardAnim.stop();
                this.bindObj.visible = false;
            };
            return GameShowCardBox;
        }(common.component.UIComponent));
        component.GameShowCardBox = GameShowCardBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameShowCardBox.js.map