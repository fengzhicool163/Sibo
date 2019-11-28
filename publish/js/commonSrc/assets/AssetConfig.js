var common;
(function (common) {
    var asset;
    (function (asset) {
        /** 资源实际加载配置 */
        var AssetConfig = /** @class */ (function () {
            function AssetConfig() {
            }
            /** 公用资源目录 */
            AssetConfig.CommonAssetsDir = "commonRes";
            /** 公用资源图集目录路径 */
            AssetConfig.CommonAtlasPath = "res/atlas/" + AssetConfig.CommonAssetsDir + "/";
            AssetConfig.CommonAtlasAssetPath = AssetConfig.CommonAtlasPath + "common.atlas";
            AssetConfig.CommonAnim = AssetConfig.CommonAtlasPath + "anim.atlas";
            AssetConfig.CommonAnimSK = "commonRes/anim/xiaoLoding.sk";
            AssetConfig.CommonAnimPng = "commonRes/anim/xiaoLoding.png";
            /** 消息弹窗列表 */
            AssetConfig.LoadingPanel = [
                //图集
                AssetConfig.CommonAtlasAssetPath,
            ];
            AssetConfig.LoadingMask = [
                AssetConfig.CommonAtlasAssetPath,
                AssetConfig.CommonAnim,
                AssetConfig.CommonAnimSK,
                AssetConfig.CommonAnimPng,
            ];
            /** 消息弹窗列表 */
            AssetConfig.PopInfoPanel = [
                //图集
                AssetConfig.CommonAtlasAssetPath,
            ];
            return AssetConfig;
        }());
        asset.AssetConfig = AssetConfig;
    })(asset = common.asset || (common.asset = {}));
})(common || (common = {}));
//# sourceMappingURL=AssetConfig.js.map