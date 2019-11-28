module game.asset {

  /** 资源实际加载配置 */
  export class AssetConfigBase {

    /** 游戏资源目录 */
    public static readonly GameAssetsDir = "gameRes";

    /** 游戏界面资源目录 */
    public static readonly GamePanelDir = "panel";

    /** 游戏界面资源目录路径 */
    public static readonly GamePanelAssetsPath = AssetConfigBase.GameAssetsDir + "/" + AssetConfigBase.GamePanelDir + "/";

    /** 游戏资源图集目录路径 */
    public static readonly GameAtlasPath = "res/atlas/" + AssetConfigBase.GameAssetsDir + "/";

    /** 头像资源地址 */
    public static GetHeadAsset(avatar: string) {
      var newavatar = avatar.length == 1 ? "0" + avatar : avatar;
      var url = this.GamePanelAssetsPath + "header" + newavatar + ".png";
      return url;
    }

    /************************************************ 资源路径配置表 *******************************************/

  }

}