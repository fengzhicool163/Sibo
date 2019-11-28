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
var items;
(function (items) {
    var GameChipBtn = /** @class */ (function (_super) {
        __extends(GameChipBtn, _super);
        function GameChipBtn() {
            var _this = _super.call(this) || this;
            _this.chipNum = 0;
            _this.chipbj.on(Laya.Event.CLICK, _this, _this.onBetClick);
            return _this;
        }
        GameChipBtn.prototype.getChipImage = function (chipNum) {
            var url = game.asset.AssetConfig.ChipImageMap[chipNum];
            return url;
        };
        GameChipBtn.prototype.getChipValueImage = function (chipNum) {
            var url = game.asset.AssetConfig.ChipValueMap[chipNum];
            return url;
        };
        GameChipBtn.prototype.onBetClick = function () {
        };
        /**
       * 设置筹码显示
       * @param chipNum
       */
        GameChipBtn.prototype.setChipNum = function (chipNum) {
            this.chipNum = chipNum || 0;
            var url = this.getChipImage(this.chipNum);
            this.chipbj.skin = url;
            var valueurl = this.getChipValueImage(this.chipNum);
            this.chipValue.skin = valueurl;
        };
        return GameChipBtn;
    }(ui.gameUI.GameItems.GameChipBtnUI));
    items.GameChipBtn = GameChipBtn;
})(items || (items = {}));
//# sourceMappingURL=GameChipBtn.js.map