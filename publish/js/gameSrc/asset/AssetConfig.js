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
    var asset;
    (function (asset) {
        var _a;
        /** 资源实际加载配置 */
        var AssetConfig = /** @class */ (function (_super) {
            __extends(AssetConfig, _super);
            function AssetConfig() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 头像资源地址 */
            AssetConfig.GetHeadAsset = function (avatar) {
                var newavatar = avatar.length == 1 ? "0" + avatar : avatar;
                var url = asset.AssetConfigBase.GamePanelAssetsPath + "head" + newavatar + ".png";
                return url;
            };
            /** 游戏房间面板依赖资源 */
            AssetConfig.GameRoomPanel = [
                //图集
                asset.AssetConfigBase.GameAtlasPath + "panel.atlas",
                asset.AssetConfigBase.GameAtlasPath + "saizi.atlas",
                //不打包的图片
                asset.AssetConfigBase.GameAssetsDir + "/bg/img_pj_bg.png",
                //AssetConfigBase.GameAssetsDir + "/gameRoomBG/img_zjh_tuoguan02.jpg",
                //动画文件 gameFrame/anim
                //AssetConfigBase.GameAssetsDir + "/anim/starbet_com.png",
                //AssetConfigBase.GameAssetsDir + "/anim/starbet_com.sk",
                //AssetConfigBase.GameAssetsDir + "/anim/stopbet_DT.png",
                //AssetConfigBase.GameAssetsDir + "/anim/stopbet_DT.sk",
                asset.AssetConfigBase.GameAssetsDir + "/anim/sz-open.png",
                asset.AssetConfigBase.GameAssetsDir + "/anim/sz-open.sk",
                asset.AssetConfigBase.GameAssetsDir + "/anim/sz-result_ske.png",
                asset.AssetConfigBase.GameAssetsDir + "/anim/sz-result_ske.sk",
            ];
            /** 游戏金币字体 */
            AssetConfig.GameMoneyFont = {
                "0": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j0.png",
                "1": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j1.png",
                "2": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j2.png",
                "3": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j3.png",
                "4": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j4.png",
                "5": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j5.png",
                "6": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j6.png",
                "7": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j7.png",
                "8": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j8.png",
                "9": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j9.png",
                ".": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j10.png",
                "+": asset.AssetConfigBase.GamePanelAssetsPath + "img_com_j+.png",
            };
            /** 游戏跟注字体 */
            AssetConfig.GenzhuFont = {
                "0": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_0.png",
                "1": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_1.png",
                "2": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_2.png",
                "3": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_3.png",
                "4": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_4.png",
                "5": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_5.png",
                "6": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_6.png",
                "7": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_7.png",
                "8": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_8.png",
                "9": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_9.png",
                ".": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_10.png",
                "C": asset.AssetConfigBase.GamePanelAssetsPath + "genzhu_gen.png",
            };
            /** 玩家状态资源 */
            AssetConfig.StateImageMap = (_a = {},
                _a[gameenum.GamePlayerState.Ready] = asset.AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_zhunbei.png",
                _a[gameenum.GamePlayerState.Fold] = asset.AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_qipai.png",
                _a[gameenum.GamePlayerState.Bystander] = asset.AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_pangguan.png",
                _a[gameenum.GamePlayerState.LookedCard] = asset.AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_kanpai.png",
                _a[gameenum.GamePlayerState.Compared] = asset.AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_bipai.png",
                _a[gameenum.GamePlayerState.GiveUp] = asset.AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_fangqi.png",
                _a[gameenum.GamePlayerState.Wait] = asset.AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_dengdai.png",
                _a[gameenum.GamePlayerState.Lose] = asset.AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_bishu.png",
                _a);
            /** 筹码资源列表 */
            AssetConfig.ChipImageMap = {
                0: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_01.png",
                0.01: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_04.png",
                0.02: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_03.png",
                0.03: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_05.png",
                0.04: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_02.png",
                0.05: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_06.png",
                1: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_04.png",
                2: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_01.png",
                5: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_05.png",
                10: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_02.png",
                30: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_03.png",
                50: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_04.png",
                100: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_05.png",
                200: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_04.png",
                400: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_06.png",
                1000: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_05.png",
            };
            AssetConfig.ChipValueMap = {
                0: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_chongfu.png",
                0.01: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_0.01.png",
                0.02: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_0.02.png",
                0.03: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_0.03.png",
                0.04: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_0.04.png",
                0.05: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_0.05.png",
                1: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_1.png",
                2: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_2.png",
                5: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_5.png",
                10: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_10.png",
                30: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_30.png",
                50: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_50.png",
                100: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_100.png",
                200: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_200.png",
                400: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_400.png",
                1000: asset.AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_1000.png",
            };
            AssetConfig.cardColorMap = {
                0: "t",
                1: "h",
                2: "m",
                3: "f",
            };
            AssetConfig.PlayerListMap = [
                asset.AssetConfigBase.GameAssetsDir + "/panel/img_com_tanchuangdi2.png",
                asset.AssetConfigBase.GameAssetsDir + "/panel/img_com_tanchuangtou2.png",
                asset.AssetConfigBase.GameAssetsDir + "/panel/img_liebiao_ziji.png",
                asset.AssetConfigBase.GameAssetsDir + "/panel/img_liebiao_liebiao.png"
            ];
            return AssetConfig;
        }(asset.AssetConfigBase));
        asset.AssetConfig = AssetConfig;
    })(asset = game.asset || (game.asset = {}));
})(game || (game = {}));
//# sourceMappingURL=AssetConfig.js.map