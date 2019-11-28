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
    var PlayerListItem = /** @class */ (function (_super) {
        __extends(PlayerListItem, _super);
        function PlayerListItem() {
            return _super.call(this) || this;
            //EventManager.addTouchScaleListener(this.numberLabel,this,this.copyOrderNo);
        }
        PlayerListItem.prototype.destroy = function () {
            _super.prototype.destroy.call(this, true);
        };
        PlayerListItem.prototype.removeSelf = function () {
            this.itemData = null;
            return _super.prototype.removeSelf.call(this);
        };
        PlayerListItem.prototype.setData = function (itemData) {
            this.itemData = itemData;
            //var amount = util.StringUtils.FormatMoney(itemData.amount,2);
            //设置头像
            var url = lobby.asset.AssetConfig.GetHeadAsset(itemData.avatar);
            this.headImg.loadImage(url, 0, 0, 80, 80);
            this.playername.text = itemData.userName;
            this.balance.text = itemData.balanceScore;
            this.money.text = itemData.lastBonusScore;
            this.rankLabel.visible = false;
            this.rankicon_0.visible = false;
            this.rankicon_1.visible = false;
            this.rankicon_2.visible = false;
            this.rankicon_3.visible = false;
            if (itemData.rank == 1) {
                this.rankicon_0.visible = true;
            }
            else if (itemData.rank == 2) {
                this.rankicon_1.visible = true;
            }
            else if (itemData.rank == 3) {
                this.rankicon_2.visible = true;
            }
            else {
                this.rankLabel.visible = true;
                this.rankLabel.text = itemData.rank;
            }
        };
        PlayerListItem.prototype.setMySelf = function (data) {
            //设置头像
            var url = lobby.asset.AssetConfig.GetHeadAsset(data.avatar);
            this.headImg.loadImage(url, 0, 0, 80, 80);
            this.playername.text = data.username;
            this.balance.text = "" + data.balanceScore;
            this.money.text = "" + data.lastBonusScore;
            this.rankLabel.visible = false;
            this.rankicon_0.visible = false;
            this.rankicon_1.visible = false;
            this.rankicon_2.visible = false;
            this.rankicon_3.visible = false;
            if (data.rank == 1) {
                this.rankicon_0.visible = true;
            }
            else if (data.rank == 2) {
                this.rankicon_1.visible = true;
            }
            else if (data.rank == 3) {
                this.rankicon_2.visible = true;
            }
            else if (data.rank < 10) {
                this.rankLabel.visible = true;
                this.rankLabel.text = "" + data.rank;
            }
            else {
                this.rankicon_3.visible = true;
            }
        };
        return PlayerListItem;
    }(ui.gameUI.GameItems.PlayListItemUI));
    items.PlayerListItem = PlayerListItem;
})(items || (items = {}));
//# sourceMappingURL=PlayerListItem.js.map