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
    var GameChipItemBase = /** @class */ (function (_super) {
        __extends(GameChipItemBase, _super);
        function GameChipItemBase() {
            var _this = _super.call(this) || this;
            _this.chipNum = 0;
            _this.anchorX = _this.anchorY = 0.5;
            return _this;
        }
        /**
         * 设置筹码显示
         * @param chipNum
         */
        GameChipItemBase.prototype.setChipNum = function (chipNum) {
            this.chipNum = chipNum || 0;
            var url = this.getChipImage(this.chipNum);
            this.skin = url;
            var valueurl = this.getChipValueImage(chipNum);
            this.chipvalue.skin = valueurl;
        };
        GameChipItemBase.prototype.getChipValueImage = function (chipNum) {
            var url = game.asset.AssetConfig.ChipValueMap[chipNum];
            return url;
        };
        return GameChipItemBase;
    }(ui.gameUI.GameItems.GameChipItemUI));
    items.GameChipItemBase = GameChipItemBase;
})(items || (items = {}));
//# sourceMappingURL=GameChipItemBase.js.map