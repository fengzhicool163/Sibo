module game.asset {

  /** 资源实际加载配置 */
  export class AssetConfig extends AssetConfigBase {

    /** 游戏房间面板依赖资源 */
    public static GameRoomPanel: string[] = [
      //图集
      AssetConfigBase.GameAtlasPath + "panel.atlas",
      AssetConfigBase.GameAtlasPath + "saizi.atlas",
      //不打包的图片
      AssetConfigBase.GameAssetsDir + "/bg/img_pj_bg.png",
      //AssetConfigBase.GameAssetsDir + "/gameRoomBG/img_zjh_tuoguan02.jpg",
      //动画文件 gameFrame/anim
      //AssetConfigBase.GameAssetsDir + "/anim/starbet_com.png",
      //AssetConfigBase.GameAssetsDir + "/anim/starbet_com.sk",
      //AssetConfigBase.GameAssetsDir + "/anim/stopbet_DT.png",
      //AssetConfigBase.GameAssetsDir + "/anim/stopbet_DT.sk",
     
      AssetConfigBase.GameAssetsDir + "/anim/sz-open.png",
      AssetConfigBase.GameAssetsDir + "/anim/sz-open.sk",
      AssetConfigBase.GameAssetsDir + "/anim/sz-result_ske.png",
      AssetConfigBase.GameAssetsDir + "/anim/sz-result_ske.sk",
     
    ];

    /** 游戏金币字体 */
    public static readonly GameMoneyFont = {
      "0": AssetConfigBase.GamePanelAssetsPath + "img_com_j0.png",
      "1": AssetConfigBase.GamePanelAssetsPath + "img_com_j1.png",
      "2": AssetConfigBase.GamePanelAssetsPath + "img_com_j2.png",
      "3": AssetConfigBase.GamePanelAssetsPath + "img_com_j3.png",
      "4": AssetConfigBase.GamePanelAssetsPath + "img_com_j4.png",
      "5": AssetConfigBase.GamePanelAssetsPath + "img_com_j5.png",
      "6": AssetConfigBase.GamePanelAssetsPath + "img_com_j6.png",
      "7": AssetConfigBase.GamePanelAssetsPath + "img_com_j7.png",
      "8": AssetConfigBase.GamePanelAssetsPath + "img_com_j8.png",
      "9": AssetConfigBase.GamePanelAssetsPath + "img_com_j9.png",
      ".": AssetConfigBase.GamePanelAssetsPath + "img_com_j10.png",
      "+": AssetConfigBase.GamePanelAssetsPath + "img_com_j+.png",
    };

    /** 游戏跟注字体 */
    public static readonly GenzhuFont = {
      "0": AssetConfigBase.GamePanelAssetsPath + "genzhu_0.png",
      "1": AssetConfigBase.GamePanelAssetsPath + "genzhu_1.png",
      "2": AssetConfigBase.GamePanelAssetsPath + "genzhu_2.png",
      "3": AssetConfigBase.GamePanelAssetsPath + "genzhu_3.png",
      "4": AssetConfigBase.GamePanelAssetsPath + "genzhu_4.png",
      "5": AssetConfigBase.GamePanelAssetsPath + "genzhu_5.png",
      "6": AssetConfigBase.GamePanelAssetsPath + "genzhu_6.png",
      "7": AssetConfigBase.GamePanelAssetsPath + "genzhu_7.png",
      "8": AssetConfigBase.GamePanelAssetsPath + "genzhu_8.png",
      "9": AssetConfigBase.GamePanelAssetsPath + "genzhu_9.png",
      ".": AssetConfigBase.GamePanelAssetsPath + "genzhu_10.png",
      "C": AssetConfigBase.GamePanelAssetsPath + "genzhu_gen.png",
    };


    /** 结算是恭喜赢家获得金币的字体 */
    public static readonly WinTipsFont = {
       "0": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_0.png",
      "1": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_1.png",
      "2": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_2.png",
      "3": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_3.png",
      "4": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_4.png",
      "5": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_5.png",
      "6": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_6.png",
      "7": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_7.png",
      "8": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_8.png",
      "9": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_9.png",
      ".": AssetConfigBase.GamePanelAssetsPath + "img_shuzi_10.png"
     
    }
    /** 玩家状态资源 */
    public static readonly StateImageMap = {
      [gameenum.GamePlayerState.Ready]: AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_zhunbei.png",
      [gameenum.GamePlayerState.Fold]: AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_qipai.png",
      [gameenum.GamePlayerState.Bystander]: AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_pangguan.png",
      [gameenum.GamePlayerState.LookedCard]: AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_kanpai.png",
      [gameenum.GamePlayerState.Compared]: AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_bipai.png",
      [gameenum.GamePlayerState.GiveUp]: AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_fangqi.png",
      [gameenum.GamePlayerState.Wait]: AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_dengdai.png",
      [gameenum.GamePlayerState.Lose]: AssetConfigBase.GamePanelAssetsPath + "img_caozuo_pipao_bishu.png",
    };

 



  

    /** 筹码资源列表 */
    public static readonly ChipImageMap: any = {
      0: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_01.png",
      0.01: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_04.png",
      0.02: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_03.png",
      0.03: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_05.png",
      0.04: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_02.png",
      0.05: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_06.png",
      1: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_04.png",
      2: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_01.png",
      5: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_05.png",
      10: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_02.png",
      30: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_03.png",
      50: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_04.png",
      100: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_05.png",
      200: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_04.png",
      400: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_06.png",
      1000: AssetConfigBase.GamePanelAssetsPath + "img_com_d_chouma_05.png",
    }


    public static readonly ChipValueMap: any = {
      0: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_chongfu.png",
      0.01: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_0.01.png",
      0.02: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_0.02.png",
      0.03: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_0.03.png",
      0.04: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_0.04.png",
      0.05: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_0.05.png",
      1: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_1.png",
      2: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_2.png",
      5: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_5.png",
      10: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_10.png",
      30: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_30.png",
      50: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_50.png",
      100: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_100.png",
      200: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_200.png",
      400: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_400.png",
      1000: AssetConfigBase.GamePanelAssetsPath + "img_com_choumazi_d_1000.png",
    }
    /** 头像资源地址 */
    public static GetHeadAsset(avatar: string) {
      var newavatar = avatar.length == 1 ? "0" + avatar : avatar;
      var url = AssetConfigBase.GamePanelAssetsPath + "head" + newavatar + ".png";
      return url;
    }

    private static cardColorMap = {
      0: "t",
      1: "h",
      2: "m",
      3: "f",
    }
   

    public static readonly PlayerListMap:string[] = [
      AssetConfigBase.GameAssetsDir + "/panel/img_com_tanchuangdi2.png",
      AssetConfigBase.GameAssetsDir + "/panel/img_com_tanchuangtou2.png",
      AssetConfigBase.GameAssetsDir + "/panel/img_liebiao_ziji.png",
      AssetConfigBase.GameAssetsDir + "/panel/img_liebiao_liebiao.png"
    ]

    

  }

}