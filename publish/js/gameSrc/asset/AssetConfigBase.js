var game;
(function (game) {
    var asset;
    (function (asset) {
        /** 资源实际加载配置 */
        var AssetConfigBase = /** @class */ (function () {
            function AssetConfigBase() {
            }
            /** 头像资源地址 */
            AssetConfigBase.GetHeadAsset = function (avatar) {
                var newavatar = avatar.length == 1 ? "0" + avatar : avatar;
                var url = this.GamePanelAssetsPath + "header" + newavatar + ".png";
                return url;
            };
            /** 游戏资源目录 */
            AssetConfigBase.GameAssetsDir = "gameRes";
            /** 游戏界面资源目录 */
            AssetConfigBase.GamePanelDir = "panel";
            /** 游戏界面资源目录路径 */
            AssetConfigBase.GamePanelAssetsPath = AssetConfigBase.GameAssetsDir + "/" + AssetConfigBase.GamePanelDir + "/";
            /** 游戏资源图集目录路径 */
            AssetConfigBase.GameAtlasPath = "res/atlas/" + AssetConfigBase.GameAssetsDir + "/";
            return AssetConfigBase;
        }());
        asset.AssetConfigBase = AssetConfigBase;
    })(asset = game.asset || (game.asset = {}));
})(game || (game = {}));
//# sourceMappingURL=AssetConfigBase.js.map