module common.asset {

    /** 资源实际加载配置 */
    export class AssetConfig {

        /** 公用资源目录 */
        public static readonly CommonAssetsDir = "commonRes";

        /** 公用资源图集目录路径 */
        public static readonly CommonAtlasPath = "res/atlas/" + AssetConfig.CommonAssetsDir + "/";

        public static readonly CommonAtlasAssetPath = AssetConfig.CommonAtlasPath + "common.atlas";

        public static readonly CommonAnim = AssetConfig.CommonAtlasPath + "anim.atlas";

        public static readonly CommonAnimSK = "commonRes/anim/xiaoLoding.sk";
        public static readonly CommonAnimPng = "commonRes/anim/xiaoLoding.png";
        /** 消息弹窗列表 */
        public static readonly LoadingPanel = [
            //图集
            AssetConfig.CommonAtlasAssetPath,
        ]

        public static readonly LoadingMask = [
            AssetConfig.CommonAtlasAssetPath,
            AssetConfig.CommonAnim,
            AssetConfig.CommonAnimSK,
            AssetConfig.CommonAnimPng,
        ]

        /** 消息弹窗列表 */
        public static readonly PopInfoPanel = [
            //图集
            AssetConfig.CommonAtlasAssetPath,
        ]

    }

}