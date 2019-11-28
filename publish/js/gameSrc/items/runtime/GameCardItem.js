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
    var GameCardItem = /** @class */ (function (_super) {
        __extends(GameCardItem, _super);
        function GameCardItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameCardItem.prototype.getCardImage = function (cardNum) {
            return "";
            //return game.asset.AssetConfig.GetCardImage( cardNum );
        };
        /** 播放发牌音效 */
        GameCardItem.prototype.playSendAudio = function () {
            //音效
            //SoundManager.PlaySendCard();
        };
        /** */
        GameCardItem.prototype.setSendStartData = function () {
            //this.sendCard.size(95, 127.5);
            _super.prototype.setSendStartData.call(this);
        };
        return GameCardItem;
    }(items.GameCardItemBase));
    items.GameCardItem = GameCardItem;
})(items || (items = {}));
//# sourceMappingURL=GameCardItem.js.map