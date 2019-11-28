
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui.commonUI.Boxs {
    export class MarqueeBoxUI extends View {
		public showAnim:Laya.FrameAnimation;
		public noticeGroup:Laya.Image;
		public noticeSp:Laya.Sprite;
		public msgTxt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":658,"height":43},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"noticeGroup","skin":"commonRes/common/img_dating_gonggao01.png"},"compId":2,"child":[{"type":"Sprite","props":{"y":0,"x":49,"width":588,"var":"noticeSp","height":40},"child":[{"type":"Label","props":{"y":0,"x":1,"width":155,"var":"msgTxt","valign":"middle","text":"111","staticCache":true,"height":40,"fontSize":24,"color":"#e2fefe","align":"left"}}]},{"type":"Image","props":{"y":-4,"x":2,"skin":"commonRes/common/img_dating_gonggao02.png"}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15}]}}],"name":"showAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.commonUI.Boxs.MarqueeBoxUI.uiView);

        }

    }
}

module ui.commonUI.Components {
    export class HSliderPlusUI extends View {
		public bgFrame:Laya.Image;
		public sliderBar:Laya.Image;
		public ctrlPoint:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":336,"height":33},"child":[{"type":"Image","props":{"y":17,"x":168,"var":"bgFrame","centerY":0,"centerX":0}},{"type":"Image","props":{"y":17,"x":0,"width":0,"var":"sliderBar","sizeGrid":"0,6,0,6","left":0,"centerY":0}},{"type":"Image","props":{"y":17,"x":0,"var":"ctrlPoint","centerY":0,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.commonUI.Components.HSliderPlusUI.uiView);

        }

    }
}

module ui.commonUI.Panels {
    export class LoadingMaskUI extends Laya.UIPanel {
		public loadNode:Laya.Box;
		public labelNode:Laya.Box;
		public progress:Laya.Label;

        public static  uiView:any ={"type":"UIPanel","props":{"width":1334,"mouseThrough":false,"mouseEnabled":true,"height":750},"child":[{"type":"Image","props":{"top":0,"skin":"commonRes/common/black_mask.png","right":0,"mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0,"alpha":0}},{"type":"Box","props":{"var":"loadNode","centerY":50,"centerX":25},"child":[{"type":"SkeletonPlayer","props":{"visible":true,"url":"commonRes/anim/xiaoLoding.sk"}}]},{"type":"Box","props":{"width":166,"var":"labelNode","height":66,"centerY":119,"centerX":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":0,"x":87,"width":83,"var":"progress","text":"0.00%","height":26,"fontSize":24,"color":"#ff9900","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"width":83,"text":"加载中:","height":26,"fontSize":24,"color":"#ff9900"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.commonUI.Panels.LoadingMaskUI.uiView);

        }

    }
}

module ui.commonUI.Panels {
    export class LoadingPanelUI extends Laya.UIPanel {
		public loadingAnim:Laya.FrameAnimation;
		public bgMask:Laya.Image;

        public static  uiView:any ={"type":"UIPanel","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"var":"bgMask","top":0,"skin":"commonRes/common/black_mask.png","right":0,"mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Image","props":{"y":375,"x":667,"skin":"commonRes/common/local_Loading.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":24}]}}],"name":"loadingAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.commonUI.Panels.LoadingPanelUI.uiView);

        }

    }
}

module ui.commonUI.Panels {
    export class PopInfoPanelUI extends Laya.UIPanel {
		public background:Laya.Image;
		public closeBtn:Laya.Image;
		public confirmBtn:Laya.Image;
		public confirmBtn1:Laya.Image;
		public cancelBtn:Laya.Image;
		public contentLabel:Laya.Label;

        public static  uiView:any ={"type":"UIPanel","props":{"width":1625,"top":0,"right":0,"left":0,"height":750,"centerY":0,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"background","top":0,"skin":"commonRes/common/mask.png","sizeGrid":"2,2,2,2","right":0,"name":"background","mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Image","props":{"width":752,"skin":"commonRes/common/img_zhajinhua_xiaokuang.png","height":469,"centerY":-15,"centerX":0},"child":[{"type":"Image","props":{"y":50,"x":703,"var":"closeBtn","skin":"commonRes/common/img_zhajinhua_guanbi.png","name":"closeBtn","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":5,"x":301,"skin":"commonRes/common/img_sangong_zi_tips.png"}},{"type":"Image","props":{"y":95,"x":14,"width":725,"skin":"commonRes/common/img_zjh_wenzidi.png","sizeGrid":"20,20,20,20","height":270}},{"type":"Image","props":{"y":415,"x":165,"var":"confirmBtn","skin":"commonRes/common/btn_zjh_queren.png","pivotY":34,"pivotX":95.5,"name":"confirmBtn"}},{"type":"Image","props":{"y":415,"var":"confirmBtn1","skin":"commonRes/common/btn_zjh_queren.png","pivotY":34,"pivotX":95.5,"name":"confirmBtn1","centerX":0}},{"type":"Image","props":{"y":415,"x":585,"var":"cancelBtn","skin":"commonRes/common/btn_zjh_quxiao.png","pivotY":34,"pivotX":95.5,"name":"cancelBtn"}},{"type":"Label","props":{"y":138,"x":63,"wordWrap":true,"width":625,"var":"contentLabel","valign":"middle","name":"contentLabel","height":200,"fontSize":28,"color":"#9cc5d8","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.commonUI.Panels.PopInfoPanelUI.uiView);

        }

    }
}

module ui.commonUI {
    export class UIManagerUI extends Laya.UIPanel {
		public uiNode:Laya.Box;
		public popNode:Laya.Box;
		public maskNode:Laya.Box;

        public static  uiView:any ={"type":"UIPanel","props":{"width":1334,"top":0,"right":0,"left":0,"height":750,"bottom":0},"child":[{"type":"Image","props":{"y":0,"visible":true,"skin":"lobbyRes/lobbyBG/img_sb_bg.png","name":"bg","mouseThrough":false,"mouseEnabled":true,"centerY":0,"centerX":0}},{"type":"Box","props":{"var":"uiNode","top":0,"right":0,"mouseThrough":true,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Box","props":{"var":"popNode","top":0,"right":0,"mouseThrough":true,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Box","props":{"var":"maskNode","top":0,"right":0,"mouseThrough":true,"mouseEnabled":true,"left":0,"bottom":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.commonUI.UIManagerUI.uiView);

        }

    }
}

module ui.gameTrend.Boxs {
    export class GameTrendBoxUI extends View {
		public gameTread:ui.gameTrend.Boxs.LobbyTableTrendBoxUI;
		public roundLabel:Laya.Label;
		public big:Laya.Label;
		public small:Laya.Label;
		public baozi:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":595,"height":118},"child":[{"type":"Image","props":{"y":2,"x":1,"skin":"gameRes/panel/img_sb_zs-k1.png"}},{"type":"Image","props":{"y":2,"x":75,"width":520,"skin":"gameRes/panel/img_sb_zs-k2.png","sizeGrid":"0,20,0,20","height":118}},{"type":"LobbyTableTrendBox","props":{"y":3,"x":82,"var":"gameTread","scaleY":0.55,"scaleX":0.74,"runtime":"ui.gameTrend.Boxs.LobbyTableTrendBoxUI"}},{"type":"Label","props":{"y":9,"x":11,"width":63,"var":"roundLabel","text":"第40局","height":24,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":33,"x":24,"width":63,"var":"big","text":"大 22","height":24,"fontSize":20,"font":"Microsoft YaHei","color":"#ff0000"}},{"type":"Label","props":{"y":57,"x":24,"width":63,"var":"small","text":"小 26","height":24,"fontSize":20,"font":"Microsoft YaHei","color":"#08a8dd"}},{"type":"Label","props":{"y":81,"x":24,"width":63,"var":"baozi","text":"豹   2","height":24,"fontSize":20,"font":"Microsoft YaHei","color":"#e7c402"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.gameTrend.Boxs.LobbyTableTrendBoxUI",ui.gameTrend.Boxs.LobbyTableTrendBoxUI);

            super.createChildren();
            this.createView(ui.gameTrend.Boxs.GameTrendBoxUI.uiView);

        }

    }
}

module ui.gameTrend.Boxs {
    export class LobbyTableTrendBoxUI extends View {
		public listView:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":680,"height":225},"child":[{"type":"List","props":{"y":-2,"x":2,"width":678,"var":"listView","spaceX":0,"height":225,"hScrollBarSkin":"lobbyRes/lobbyRoomList/hscroll.png"},"child":[{"type":"Box","props":{"renderType":"render"},"child":[{"type":"LobbyTableTrendItem","props":{"runtime":"ui.gameTrend.Items.LobbyTableTrendItemUI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.gameTrend.Items.LobbyTableTrendItemUI",ui.gameTrend.Items.LobbyTableTrendItemUI);

            super.createChildren();
            this.createView(ui.gameTrend.Boxs.LobbyTableTrendBoxUI.uiView);

        }

    }
}

module ui.gameTrend.Items {
    export class LobbyTableTrendItemUI extends View {
		public lightBj:Laya.Image;
		public img0:Laya.Image;
		public img1:Laya.Image;
		public img2:Laya.Image;
		public imgN:Laya.Image;
		public big:Laya.Box;
		public szbig:Laya.Label;
		public szb:Laya.Label;
		public small:Laya.Box;
		public szsmall:Laya.Label;
		public szs:Laya.Label;
		public baozi:Laya.Box;
		public szbaozi:Laya.Label;
		public szbao:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":58,"height":205},"child":[{"type":"Image","props":{"y":13,"x":3,"width":55,"visible":false,"var":"lightBj","skin":"lobbyRes/lobbyRoomList/img_sb_new-k.png","sizeGrid":"13,13,13,13","height":191}},{"type":"Image","props":{"y":36,"x":31,"var":"img0","skin":"lobbyRes/lobbyRoomList/img_sz_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":82,"x":31,"var":"img1","skin":"lobbyRes/lobbyRoomList/img_sz_2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":130,"x":31,"var":"img2","skin":"lobbyRes/lobbyRoomList/img_sz_3.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":4,"x":2,"visible":false,"var":"imgN","skin":"lobbyRes/lobbyRoomList/img_sb_new.png"}},{"type":"Box","props":{"y":3,"x":0,"var":"big"},"child":[{"type":"Label","props":{"y":150,"x":6,"width":51,"var":"szbig","text":"13","height":22,"fontSize":22,"font":"Microsoft YaHei","color":"#ff0400","bold":true,"align":"center"}},{"type":"Label","props":{"y":171,"x":6,"width":51,"var":"szb","text":"大","height":22,"fontSize":22,"font":"Microsoft YaHei","color":"#ff0400","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":3,"x":0,"var":"small"},"child":[{"type":"Label","props":{"y":150,"x":6,"width":51,"var":"szsmall","text":"13","height":22,"fontSize":22,"font":"Microsoft YaHei","color":"#0033ff","bold":true,"align":"center"}},{"type":"Label","props":{"y":171,"x":6,"width":51,"var":"szs","text":"大","height":22,"fontSize":22,"font":"Microsoft YaHei","color":"#0033ff","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":3,"x":0,"var":"baozi"},"child":[{"type":"Label","props":{"y":148,"x":6,"width":51,"var":"szbaozi","text":"3","height":22,"fontSize":22,"font":"Microsoft YaHei","color":"#ffcc00","bold":true,"align":"center"}},{"type":"Label","props":{"y":171,"x":6,"width":51,"var":"szbao","text":"大","height":22,"fontSize":22,"font":"Microsoft YaHei","color":"#ffcc00","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameTrend.Items.LobbyTableTrendItemUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class BetEightUI extends View {
		public bj:Laya.Image;
		public btn_bet:Laya.Button;
		public bet_bj:Laya.Image;
		public bet_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":90,"height":110},"child":[{"type":"Image","props":{"y":0,"x":94,"visible":false,"var":"bj","skin":"gameRes/panel/img_sb_zzg_ds4&17.png","scaleX":-1}},{"type":"Button","props":{"width":90,"var":"btn_bet","height":110}},{"type":"Image","props":{"y":82,"visible":false,"var":"bet_bj","skin":"gameRes/panel/img_sb_yzek.png","centerX":0},"child":[{"type":"Label","props":{"y":4,"x":4,"width":49,"var":"bet_money","text":"0","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.BetEightUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class BetFiveUI extends View {
		public bj:Laya.Image;
		public btn_bet:Laya.Button;
		public bet_bj:Laya.Image;
		public bet_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":140,"height":200},"child":[{"type":"Image","props":{"y":-19,"x":-9,"visible":false,"var":"bj","skin":"gameRes/panel/img_sb_zzg_big&small.png"}},{"type":"Button","props":{"y":0,"x":0,"width":140,"var":"btn_bet","height":200}},{"type":"Image","props":{"y":170,"x":41,"width":68,"visible":false,"var":"bet_bj","skin":"gameRes/panel/img_sb_yzek.png","sizeGrid":"0,10,0,10"},"child":[{"type":"Label","props":{"y":4,"width":59,"var":"bet_money","text":"0","height":22,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.BetFiveUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class BetFourUI extends View {
		public bj:Laya.Image;
		public btn_bet:Laya.Button;
		public bet_bj:Laya.Image;
		public bet_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":88,"height":110},"child":[{"type":"Image","props":{"visible":false,"var":"bj","skin":"gameRes/panel/img_sb_zzg_ds2-16.png"}},{"type":"Button","props":{"width":88,"var":"btn_bet","height":110}},{"type":"Image","props":{"y":81,"x":17,"width":59,"visible":false,"var":"bet_bj","skin":"gameRes/panel/img_sb_yzek.png"},"child":[{"type":"Label","props":{"y":4,"x":1,"width":59,"var":"bet_money","text":"0","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.BetFourUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class BetNineUI extends View {
		public bj:Laya.Image;
		public btn_bet:Laya.Button;
		public bet_bj:Laya.Image;
		public bet_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":210,"height":82},"child":[{"type":"Image","props":{"y":0,"x":214,"visible":false,"var":"bj","skin":"gameRes/panel/img_sb_zzg_1&6d.png","scaleX":-1}},{"type":"Button","props":{"width":210,"var":"btn_bet","height":80}},{"type":"Image","props":{"y":63,"x":117,"width":68,"visible":false,"var":"bet_bj","skin":"gameRes/panel/img_sb_yzek.png","sizeGrid":"0,10,0,10"},"child":[{"type":"Label","props":{"y":4,"x":5,"width":59,"var":"bet_money","text":"0","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.BetNineUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class BetOneUI extends View {
		public bj:Laya.Image;
		public btn_bet:Laya.Button;
		public bet_bj:Laya.Image;
		public bet_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":210,"height":82},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"bj","skin":"gameRes/panel/img_sb_zzg_1&6d.png"}},{"type":"Button","props":{"width":210,"var":"btn_bet","height":80}},{"type":"Image","props":{"y":64,"x":125,"width":59,"visible":false,"var":"bet_bj","skin":"gameRes/panel/img_sb_yzek.png"},"child":[{"type":"Label","props":{"y":4,"x":0,"width":59,"var":"bet_money","text":"0","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.BetOneUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class BetSevenUI extends View {
		public bj:Laya.Image;
		public btn_bet:Laya.Button;
		public bet_bj:Laya.Image;
		public bet_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":140,"height":200},"child":[{"type":"Image","props":{"y":-15,"x":157,"visible":false,"var":"bj","skin":"gameRes/panel/img_sb_zzg_big&small.png","scaleX":-1}},{"type":"Button","props":{"width":140,"var":"btn_bet","height":200}},{"type":"Image","props":{"y":172,"x":45,"width":68,"visible":false,"var":"bet_bj","skin":"gameRes/panel/img_sb_yzek.png","sizeGrid":"0,10,0,10"},"child":[{"type":"Label","props":{"y":4,"width":59,"var":"bet_money","text":"0","height":22,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.BetSevenUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class BetSixUI extends View {
		public bj:Laya.Image;
		public btn_bet:Laya.Button;
		public bet_bj:Laya.Image;
		public bet_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":175,"height":110},"child":[{"type":"Image","props":{"y":0,"x":-4,"visible":false,"var":"bj","skin":"gameRes/panel/img_sb_zzg_qw.png"}},{"type":"Button","props":{"width":175,"var":"btn_bet","height":110}},{"type":"Image","props":{"y":86,"x":62,"visible":false,"var":"bet_bj","skin":"gameRes/panel/img_sb_yzek.png"},"child":[{"type":"Label","props":{"y":4,"x":3,"width":49,"var":"bet_money","text":"0","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.BetSixUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class BetThreeUI extends View {
		public bj:Laya.Image;
		public btn_bet:Laya.Button;
		public bet_bj:Laya.Image;
		public bet_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":90,"height":110},"child":[{"type":"Image","props":{"visible":false,"var":"bj","skin":"gameRes/panel/img_sb_zzg_ds4&17.png"}},{"type":"Button","props":{"width":90,"var":"btn_bet","height":110}},{"type":"Image","props":{"y":82,"x":19,"width":59,"visible":false,"var":"bet_bj","skin":"gameRes/panel/img_sb_yzek.png","sizeGrid":"0,10,0,10"},"child":[{"type":"Label","props":{"y":4,"x":0,"width":59,"var":"bet_money","text":"0","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.BetThreeUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class BetTwoUI extends View {
		public bj:Laya.Image;
		public btn_bet:Laya.Image;
		public bet_bj:Laya.Image;
		public bet_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":210,"height":82},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"bj","skin":"gameRes/panel/img_sb_zzg_2-5d.png"}},{"type":"Image","props":{"width":210,"var":"btn_bet","height":80}},{"type":"Image","props":{"y":64,"x":122,"width":59,"visible":false,"var":"bet_bj","skin":"gameRes/panel/img_sb_yzek.png","sizeGrid":"0,10,0,10"},"child":[{"type":"Label","props":{"y":4,"x":0,"width":59,"var":"bet_money","text":"0","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.BetTwoUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class DoubleItemUI extends View {
		public bj:Laya.Image;
		public btn_bet:Laya.Button;
		public bet_bj:Laya.Image;
		public bet_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":60,"height":160},"child":[{"type":"Image","props":{"y":0,"x":0,"visible":false,"var":"bj","skin":"gameRes/panel/img_sb_zzg_ws.png"}},{"type":"Button","props":{"width":60,"var":"btn_bet","height":160}},{"type":"Image","props":{"y":132,"x":2,"visible":false,"var":"bet_bj","skin":"gameRes/panel/img_sb_yzek.png"},"child":[{"type":"Label","props":{"y":4,"x":3,"width":49,"var":"bet_money","text":"0","height":22,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.DoubleItemUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class GameCountDownBoxUI extends View {
		public countDownNum:Laya.FontClip;
		public countDownAnim:laya.ani.bone.Skeleton;
		public slabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":190,"visible":false,"height":120,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":41.5,"skin":"gameRes/panel/img_lognhu_shizhong.png"}},{"type":"Image","props":{"y":84,"x":20,"width":140,"skin":"gameRes/panel/coinbg.png","sizeGrid":"5,0,5,0","height":48}},{"type":"FontClip","props":{"y":47,"var":"countDownNum","value":"20","skin":"gameRes/panel/countDownFont.png","sheet":"0123456789","scaleY":0.5,"scaleX":0.5,"centerX":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"SkeletonPlayer","props":{"y":45,"x":100,"var":"countDownAnim","url":"gameRes/anim/countdown.sk"}},{"type":"Label","props":{"y":93,"x":52,"width":82,"var":"slabel","text":"结算中","height":28,"fontSize":28,"color":"#f7d94e","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.GameCountDownBoxUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class GameMenuBoxUI extends View {
		public menuOpenAnim:Laya.FrameAnimation;
		public menuCloseAnim:Laya.FrameAnimation;
		public bgMask:Laya.Image;
		public resizeNode:Laya.Box;
		public menuBtn:Laya.Image;
		public menuNode:Laya.Image;
		public exitBtn:Laya.Image;
		public historyBtn:Laya.Image;
		public ruleBtn:Laya.Image;
		public settingBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1624,"height":750},"child":[{"type":"Image","props":{"visible":true,"var":"bgMask","top":0,"right":0,"mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0},"compId":19},{"type":"Box","props":{"width":240,"var":"resizeNode","top":20,"mouseThrough":true,"mouseEnabled":true,"left":28,"height":600},"child":[{"type":"Box","props":{"y":48,"x":45,"width":90,"scaleX":1,"height":96,"anchorY":0.5,"anchorX":0.5},"compId":18,"child":[{"type":"Image","props":{"y":48,"x":45,"var":"menuBtn","skin":"gameRes/panel/img_sb_cbtn-0.png","mouseEnabled":true,"anchorY":0.5,"anchorX":0.5},"compId":17,"child":[{"type":"Image","props":{"y":52,"x":48,"skin":"gameRes/panel/img_sb_cbtn-1.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Image","props":{"y":136,"x":-380,"visible":true,"var":"menuNode","skin":"gameRes/panel/img_com_tanchaung_di.png"},"compId":3,"child":[{"type":"Image","props":{"y":59,"x":121,"var":"exitBtn","skin":"gameRes/panel/img_tanchuang_di.png","anchorY":0.5,"anchorX":0.5},"compId":4,"child":[{"type":"Image","props":{"y":44,"x":34,"skin":"gameRes/panel/btn_com_tanchuang_tuichu.png"}}]},{"type":"Image","props":{"y":154,"x":121,"var":"historyBtn","skin":"gameRes/panel/img_tanchuang_di.png","anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":36,"x":39,"skin":"gameRes/panel/btn_com_tanchuang_zhanji.png"}}]},{"type":"Image","props":{"y":249,"x":121,"var":"ruleBtn","skin":"gameRes/panel/img_tanchuang_di.png","anchorY":0.5,"anchorX":0.5},"compId":8,"child":[{"type":"Image","props":{"y":39,"x":35,"skin":"gameRes/panel/btn_com_tanchuang_guize.png"}}]},{"type":"Image","props":{"y":344,"x":121,"var":"settingBtn","skin":"gameRes/panel/img_tanchuang_di.png","anchorY":0.5,"anchorX":0.5},"compId":10,"child":[{"type":"Image","props":{"y":44,"x":36,"skin":"gameRes/panel/btn_com_tanchuang_shezhi.png"}}]}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"x":[{"value":-380,"tweenMethod":"circIn","tween":true,"target":3,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":15}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0}]}},{"target":17,"keyframes":{"mouseEnabled":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":17,"key":"mouseEnabled","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":17,"key":"mouseEnabled","index":15}]}},{"target":18,"keyframes":{"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":18,"key":"scaleX","index":0},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":15}]}},{"target":19,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":19,"key":"visible","index":0}],"mouseThrough":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":19,"key":"mouseThrough","index":0}],"mouseEnabled":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":19,"key":"mouseEnabled","index":0}]}},{"target":4,"keyframes":{"x":[{"value":121,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0}]}},{"target":6,"keyframes":{"x":[{"value":121,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0}]}},{"target":8,"keyframes":{"x":[{"value":121,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0}]}},{"target":10,"keyframes":{"x":[{"value":121,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0}]}}],"name":"menuOpenAnim","id":1,"frameRate":60,"action":0},{"nodes":[{"target":3,"keyframes":{"x":[{"value":0,"tweenMethod":"circOut","tween":true,"target":3,"key":"x","index":0},{"value":-380,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":15}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":15}]}},{"target":17,"keyframes":{"mouseEnabled":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":17,"key":"mouseEnabled","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":17,"key":"mouseEnabled","index":15}]}},{"target":18,"keyframes":{"scaleX":[{"value":-1,"tweenMethod":"linearNone","tween":false,"target":18,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":15}]}},{"target":19,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":19,"key":"visible","index":0}],"mouseThrough":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":19,"key":"mouseThrough","index":0}],"mouseEnabled":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":19,"key":"mouseEnabled","index":0}]}}],"name":"menuCloseAnim","id":2,"frameRate":120,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.GameMenuBoxUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class GameRoomInfoBoxUI extends View {
		public fengding:Laya.Label;
		public tableNum:Laya.Label;
		public roomType:Laya.Label;
		public paijuhao:Laya.Label;
		public limit:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":302,"staticCache":true,"skin":"gameRes/gameRoom/img_game_xinxi.png","height":88,"cacheAsBitmap":true,"cacheAs":"bitmap"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"gameRes/panel/img_sb_pjhk.png"}},{"type":"Label","props":{"y":11,"x":249,"visible":false,"var":"fengding","fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":11,"x":84,"var":"tableNum","text":"A桌","fontSize":22,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":11,"x":12,"var":"roomType","text":"新手房","fontSize":22,"font":"Microsoft YaHei","color":"#ffcb3e"}},{"type":"Label","props":{"y":56,"x":13,"var":"paijuhao","text":"牌局号","fontSize":22,"font":"Microsoft YaHei","color":"#4e91e2","bold":false,"align":"left"}},{"type":"Label","props":{"y":11,"x":131,"text":"押注限额","fontSize":22,"font":"Microsoft YaHei","color":"#f7d94e","bold":false}},{"type":"Label","props":{"y":13,"x":222,"width":70,"var":"limit","text":"20000","height":22,"fontSize":22,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.GameRoomInfoBoxUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class TipMsgPanelUI extends View {
		public msg:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":946,"height":53},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"gameRes/bg/img_dating_tips01.png"}},{"type":"Label","props":{"y":11,"x":0,"width":946,"var":"msg","text":"label","height":31,"fontSize":28,"color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.TipMsgPanelUI.uiView);

        }

    }
}

module ui.gameUI.GameCommonBox {
    export class WinMsgPanelUI extends View {
		public showMe:Laya.FrameAnimation;
		public showPlayer:Laya.FrameAnimation;
		public infoBox:Laya.Box;
		public pname:Laya.Label;
		public winmoney:game.font.gameWinTipFont;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":200},"child":[{"type":"SkeletonPlayer","props":{"y":83,"x":673,"url":"gameRes/anim/gongxi_com_ske.sk"}},{"type":"Box","props":{"y":1,"x":2,"width":1334,"var":"infoBox","height":198},"child":[{"type":"Image","props":{"y":56,"x":253,"skin":"gameRes/panel/img_baijiale_gongxi.png"}},{"type":"Image","props":{"y":67,"x":780,"skin":"gameRes/panel/img_baijiale_yingde.png"},"compId":5},{"type":"Image","props":{"y":23,"x":420,"skin":"gameRes/panel/head01.png","scaleY":0.8,"scaleX":0.8}},{"type":"Image","props":{"y":56,"x":569,"skin":"gameRes/panel/img_baijiale_ning.png"},"compId":4},{"type":"Label","props":{"y":72,"x":555,"width":214,"var":"pname","text":"label","height":49,"fontSize":30,"color":"#ffffff","align":"center"},"compId":7},{"type":"Box","props":{"y":64,"x":896,"var":"winmoney","runtime":"game.font.gameWinTipFont","height":55}}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"x":[{"value":569,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0}]}},{"target":5,"keyframes":{"x":[{"value":660,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0}]}},{"target":7,"keyframes":{"x":[{"value":555,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0}]}}],"name":"showMe","id":1,"frameRate":24,"action":0},{"nodes":[{"target":4,"keyframes":{"x":[{"value":569,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0}]}},{"target":5,"keyframes":{"x":[{"value":780,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0}]}},{"target":7,"keyframes":{"x":[{"value":555,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0}]}}],"name":"showPlayer","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);
			View.regComponent("game.font.gameWinTipFont",game.font.gameWinTipFont);

            super.createChildren();
            this.createView(ui.gameUI.GameCommonBox.WinMsgPanelUI.uiView);

        }

    }
}

module ui.gameUI.GameCtrlBox {
    export class BetCtrlBarBoxUI extends View {
		public animNode:Laya.Box;
		public btnNode:Laya.Box;
		public betBtn0:ui.gameUI.GameItems.GameChipBtnUI;
		public betBtn1:ui.gameUI.GameItems.GameChipBtnUI;
		public betBtn2:ui.gameUI.GameItems.GameChipBtnUI;
		public betBtn3:ui.gameUI.GameItems.GameChipBtnUI;
		public betBtn4:ui.gameUI.GameItems.GameChipBtnUI;
		public betBtn5:Laya.Image;
		public chipguang:Laya.Image;
		public playerObj:ui.gameUI.GamePlayerSit.main.GameMainPlayerBoxUI;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1165,"height":111},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1164,"var":"animNode","height":111},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1165,"skin":"gameRes/panel/img_com_choumadi.png","sizeGrid":"0,300,0,120","height":108}},{"type":"Box","props":{"y":-59,"x":0,"width":1167,"var":"btnNode","height":191},"child":[{"type":"GameChipBtn","props":{"y":49,"x":242,"var":"betBtn0","runtime":"ui.gameUI.GameItems.GameChipBtnUI"}},{"type":"GameChipBtn","props":{"y":48,"x":389,"var":"betBtn1","runtime":"ui.gameUI.GameItems.GameChipBtnUI"}},{"type":"GameChipBtn","props":{"y":48,"x":538,"var":"betBtn2","runtime":"ui.gameUI.GameItems.GameChipBtnUI"}},{"type":"GameChipBtn","props":{"y":48,"x":685,"var":"betBtn3","runtime":"ui.gameUI.GameItems.GameChipBtnUI"}},{"type":"GameChipBtn","props":{"y":48,"x":833,"var":"betBtn4","runtime":"ui.gameUI.GameItems.GameChipBtnUI"}},{"type":"Image","props":{"y":48,"x":981,"var":"betBtn5","skin":"gameRes/panel/img_com_d_chouma_01.png"},"child":[{"type":"Image","props":{"y":-17,"x":-14,"visible":false,"var":"chipguang","skin":"gameRes/panel/img_com_chouma_xzk.png"}},{"type":"Image","props":{"skin":"gameRes/panel/img_com_choumazi_d_chongfu.png"}}]}]},{"type":"GameMainPlayerBox","props":{"y":-92,"x":9,"var":"playerObj","runtime":"ui.gameUI.GamePlayerSit.main.GameMainPlayerBoxUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.gameUI.GameItems.GameChipBtnUI",ui.gameUI.GameItems.GameChipBtnUI);
			View.regComponent("ui.gameUI.GamePlayerSit.main.GameMainPlayerBoxUI",ui.gameUI.GamePlayerSit.main.GameMainPlayerBoxUI);

            super.createChildren();
            this.createView(ui.gameUI.GameCtrlBox.BetCtrlBarBoxUI.uiView);

        }

    }
}

module ui.gameUI.GameCtrlBox {
    export class GameStateCtrlBoxUI extends View {
		public animNode:Laya.Box;
		public bet1:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":600,"height":112},"child":[{"type":"Box","props":{"width":600,"var":"animNode","height":112}},{"type":"Image","props":{"var":"bet1"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameCtrlBox.GameStateCtrlBoxUI.uiView);

        }

    }
}

module ui.gameUI.GameItems {
    export class GameChipBtnUI extends View {
		public chipbj:Laya.Image;
		public chipValue:Laya.Image;
		public chipguang:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":114,"height":113},"child":[{"type":"Image","props":{"y":0,"x":0,"width":114,"var":"chipbj","height":113}},{"type":"Image","props":{"width":114,"var":"chipValue","height":113}},{"type":"Image","props":{"y":-17,"x":-14,"visible":false,"var":"chipguang","skin":"gameRes/panel/img_com_chouma_xzk.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameItems.GameChipBtnUI.uiView);

        }

    }
}

module ui.gameUI.GameItems {
    export class GameChipItemUI extends Laya.Image {
		public chipvalue:Laya.Image;

        public static  uiView:any ={"type":"Image","props":{"y":0,"x":0,"width":114,"skin":"gameRes/panel/img_com_d_chouma_01.png","height":113},"child":[{"type":"Image","props":{"y":0,"x":0,"width":114,"var":"chipvalue","height":113}}]};
        constructor(){ super();this.createUI(ui.gameUI.GameItems.GameChipItemUI.uiView);}
        createUI(uiData:any):void {
        
            laya.utils.ClassUtils.createByJson(uiData, this, this);

        }

    }
}

module ui.gameUI.GameItems {
    export class PlayListItemUI extends View {
		public rankicon_0:Laya.Image;
		public rankicon_1:Laya.Image;
		public rankicon_2:Laya.Image;
		public rankicon_3:Laya.Image;
		public headImg:Laya.Image;
		public playername:Laya.Label;
		public balance:Laya.Label;
		public money:Laya.Label;
		public rankLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":930,"height":90},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"gameRes/panel/img_liebiao_liebiao.png"}},{"type":"Image","props":{"y":13,"x":31,"skin":"gameRes/panel/img_liebiao_pianghangkuang.png"}},{"type":"Image","props":{"y":8,"x":37,"visible":false,"var":"rankicon_0","skin":"gameRes/panel/icon_com_jiangpai1.png"}},{"type":"Image","props":{"y":57,"x":230,"skin":"gameRes/panel/img_dzpk_cm.png"}},{"type":"Image","props":{"y":28,"x":464,"skin":"gameRes/panel/img_liebiao_yingle.png"}},{"type":"Image","props":{"y":8,"x":37,"visible":false,"var":"rankicon_1","skin":"gameRes/panel/icon_com_jiangpai2.png"}},{"type":"Image","props":{"y":8,"x":37,"visible":false,"var":"rankicon_2","skin":"gameRes/panel/icon_com_jiangpai3.png"}},{"type":"Image","props":{"y":31,"x":18,"visible":false,"var":"rankicon_3","skin":"gameRes/panel/img_liebiao_weishangbao.png"}},{"type":"Image","props":{"y":9,"x":127,"width":80,"var":"headImg","height":80}},{"type":"Label","props":{"y":18,"x":231,"var":"playername","text":"label","fontSize":30,"color":"#ffff99","align":"left"}},{"type":"Label","props":{"y":57,"x":265,"var":"balance","text":"label","fontSize":24,"color":"#ffff99","bold":true,"align":"left"}},{"type":"Label","props":{"y":33,"x":601,"width":267,"var":"money","text":"label","height":30,"fontSize":24,"color":"#ffff99","bold":true,"align":"center"}},{"type":"Label","props":{"y":35,"x":41,"width":51,"visible":false,"var":"rankLabel","text":"label","height":30,"fontSize":24,"color":"#ffff99","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameUI.GameItems.PlayListItemUI.uiView);

        }

    }
}

module ui.gameUI.GamePanel {
    export class GamePlayerListUI extends Laya.UIPanel {
		public background:Laya.Image;
		public bgFrame:Laya.Image;
		public closeBtn:Laya.Image;
		public itemPanel:Laya.Panel;
		public container:Laya.Box;
		public myself:items.PlayerListItem;

        public static  uiView:any ={"type":"UIPanel","props":{"y":375,"x":667,"width":1334,"top":0,"right":0,"left":0,"height":750,"centerY":0,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"background","top":0,"skin":"lobbyRes/common/black_mask.png","sizeGrid":"2,2,2,2","right":0,"name":"background","mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Image","props":{"width":1035,"var":"bgFrame","skin":"gameRes/panel/img_com_tanchuangdi2.png","sizeGrid":"20,25,20,25","height":620,"centerY":8,"centerX":4,"alpha":1},"child":[{"type":"Image","props":{"y":-32,"x":15,"width":1016,"skin":"gameRes/panel/img_com_tanchuangtou2.png","sizeGrid":"60,10,30,10","name":"msgBar","height":136}},{"type":"Image","props":{"y":1,"x":423,"skin":"gameRes/panel/img_liebiao_wanjia.png","name":"title"}},{"type":"Image","props":{"y":75,"x":972,"width":80,"var":"closeBtn","skin":"lobbyRes/lobbyRoomList/btn_com_guibi.png","name":"closeBtn","height":80,"gray":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"x":516,"width":971,"var":"itemPanel","vScrollBarSkin":"lobbyRes/common/mask.png","top":122,"name":"itemPanel","height":364,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"container","staticCache":true,"cacheAs":"normal"}}]},{"type":"Label","props":{"y":591,"valign":"top","text":"只显示上局收入排行前10的玩家","height":40,"fontSize":22,"font":"Microsoft YaHei","color":"#ffff99","centerX":4,"bold":true}},{"type":"PlayListItem","props":{"y":486,"x":56,"var":"myself","runtime":"items.PlayerListItem"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("items.PlayerListItem",items.PlayerListItem);

            super.createChildren();
            this.createView(ui.gameUI.GamePanel.GamePlayerListUI.uiView);

        }

    }
}

module ui.gameUI.GamePanel {
    export class GameRoomPanelUI extends Laya.UIPanel {
		public openAnim:Laya.FrameAnimation;
		public waitMsgAnim:Laya.FrameAnimation;
		public resetOpen:Laya.FrameAnimation;
		public bjimg:Laya.Image;
		public roomInfoObj:ui.gameUI.GameCommonBox.GameRoomInfoBoxUI;
		public waitMsgNode:Laya.Image;
		public oddsInfoBox:Laya.Box;
		public gameVersion:Laya.Label;
		public paijuhao:Laya.Label;
		public juShu:Laya.Label;
		public allBetNum:Laya.Label;
		public betArea:Laya.Box;
		public betarea_0:ui.gameUI.GameCommonBox.BetOneUI;
		public betarea_1:ui.gameUI.GameCommonBox.BetTwoUI;
		public betarea_2:ui.gameUI.GameCommonBox.BetTwoUI;
		public betarea_3:ui.gameUI.GameCommonBox.BetTwoUI;
		public betarea_4:ui.gameUI.GameCommonBox.BetTwoUI;
		public betarea_5:ui.gameUI.GameCommonBox.BetNineUI;
		public betarea_6:ui.gameUI.GameCommonBox.BetThreeUI;
		public betarea_7:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_8:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_9:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_10:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_11:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_12:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_13:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_14:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_15:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_16:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_17:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_18:ui.gameUI.GameCommonBox.BetFourUI;
		public betarea_19:ui.gameUI.GameCommonBox.BetEightUI;
		public betarea_20:ui.gameUI.GameCommonBox.BetFiveUI;
		public betarea_21:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_22:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_23:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_24:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_25:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_26:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_27:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_28:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_29:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_30:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_31:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_32:ui.gameUI.GameCommonBox.DoubleItemUI;
		public betarea_33:ui.gameUI.GameCommonBox.BetSixUI;
		public betarea_34:ui.gameUI.GameCommonBox.BetSevenUI;
		public countDownObj:ui.gameUI.GameCommonBox.GameCountDownBoxUI;
		public gameTrendBoxObj:ui.gameTrend.Boxs.GameTrendBoxUI;
		public betCtrlBoxObj:ui.gameUI.GameCtrlBox.BetCtrlBarBoxUI;
		public gameChipsBoxObj:Laya.Box;
		public btnPlayer:Laya.Image;
		public animBox:Laya.Box;
		public winAnim:laya.ani.bone.Skeleton;
		public startBetAnim:laya.ani.bone.Skeleton;
		public dealer:laya.ani.bone.Skeleton;
		public stopAnim:laya.ani.bone.Skeleton;
		public yaosaiAnim:laya.ani.bone.Skeleton;
		public waitNext:Laya.Image;
		public roomMenuObj:ui.gameUI.GameCommonBox.GameMenuBoxUI;
		public tipmsgObj:ui.gameUI.GameCommonBox.TipMsgPanelUI;
		public openBox:Laya.Box;
		public winTipsBoxObj:ui.gameUI.GameCommonBox.WinMsgPanelUI;

        public static  uiView:any ={"type":"UIPanel","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":-145,"visible":true,"var":"bjimg","skin":"gameRes/bg/img_sb_bg2.png","centerY":0,"centerX":0}},{"type":"GameRoomInfoBox","props":{"var":"roomInfoObj","top":23,"right":993,"runtime":"ui.gameUI.GameCommonBox.GameRoomInfoBoxUI"}},{"type":"Image","props":{"y":54,"visible":true,"var":"waitMsgNode","skin":"gameRes/gameRoom/loading.png","rotation":90,"right":704,"anchorY":0.5,"anchorX":0.5},"compId":180},{"type":"Box","props":{"width":1334,"var":"oddsInfoBox","height":750,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":315,"x":92,"width":57,"text":"1:1","name":"small","height":35,"fontSize":36,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":313,"x":1189,"width":57,"text":"1:1","name":"big","height":36,"fontSize":36,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":590,"x":441,"width":57,"text":"1:1","name":"sanjunOne","height":36,"fontSize":36,"color":"#214339","bold":true,"align":"left"}},{"type":"Label","props":{"y":590,"x":668,"width":73,"text":"1:1","name":"sanjunTwo","height":36,"fontSize":36,"color":"#214339","bold":true,"align":"left"}},{"type":"Label","props":{"y":590,"x":897,"width":73,"text":"1:1","name":"sanjunThree","height":36,"fontSize":36,"color":"#214339","bold":true,"align":"left"}},{"type":"Label","props":{"y":439,"x":30,"width":73,"text":"1:1","name":"dianshuFour","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":438,"x":123,"width":73,"text":"1:1","name":"dianshuFives","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":217,"width":73,"text":"1:1","name":"dianshuSix","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":307,"width":73,"text":"1:1","name":"dianshuSeven","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":396,"width":73,"text":"1:1","name":"dianshuEight","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":492,"width":73,"text":"1:1","name":"dianshuNine","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":583,"width":73,"text":"1:1","name":"dianshuTen","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":676,"width":73,"text":"1:1","name":"dianshuEleven","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":769,"width":73,"text":"1:1","name":"dianshuTwelve","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":860,"width":73,"text":"1:1","name":"dianshuThirteen","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":953,"width":73,"text":"1:1","name":"dianshuFourteen","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":1045,"width":73,"text":"1:1","name":"dianshuFifteen","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":1136,"width":73,"text":"1:1","name":"dianshuSixteen","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":439,"x":1230,"width":73,"text":"1:1","name":"dianshuSeventeen","height":36,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":179,"x":285,"width":74,"text":"1:1","name":"duiziOne","height":37,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":179,"x":465,"width":84,"text":"1:1","name":"weitouOne","height":37,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":226,"x":665,"width":84,"text":"1:1","name":"quanwei","height":37,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":179,"x":1047,"width":74,"text":"1:1","name":"duiziTwo","height":37,"fontSize":30,"color":"#214339","bold":true,"align":"center"}},{"type":"Label","props":{"y":179,"x":845,"width":84,"text":"1:1","name":"weitouTwo","height":37,"fontSize":30,"color":"#214339","bold":true,"align":"center"}}]},{"type":"Box","props":{"width":1334,"visible":true,"name":"centerDraw1","mouseEnabled":false,"height":750,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":47,"var":"gameVersion","top":47,"text":"版本号 2.06.14.01","right":216,"fontSize":20,"font":"Microsoft YaHei","color":"#336699","anchorX":1,"align":"right"}},{"type":"Label","props":{"var":"paijuhao","top":77,"text":"123456789012345","left":160,"fontSize":20,"font":"Microsoft YaHei","color":"#336699","align":"left"}},{"type":"Label","props":{"y":-200,"x":602.8291015625,"var":"juShu","text":"-","stroke":1,"fontSize":26,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":-200,"x":735.8291015625,"var":"allBetNum","text":"-","stroke":1,"fontSize":26,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Box","props":{"y":0,"x":0,"width":1334,"visible":true,"var":"betArea","height":750,"centerY":0,"centerX":0},"child":[{"type":"BetOne","props":{"y":501,"x":18,"var":"betarea_0","name":"sanjunOne","runtime":"ui.gameUI.GameCommonBox.BetOneUI"}},{"type":"BetTwo","props":{"y":501,"x":234,"var":"betarea_1","name":"sanjunTwo","runtime":"ui.gameUI.GameCommonBox.BetTwoUI"}},{"type":"BetTwo","props":{"y":501,"x":451,"var":"betarea_2","name":"sanjunThree","runtime":"ui.gameUI.GameCommonBox.BetTwoUI"}},{"type":"BetTwo","props":{"y":501,"x":668,"var":"betarea_3","name":"sanjunFour","runtime":"ui.gameUI.GameCommonBox.BetTwoUI"}},{"type":"BetTwo","props":{"y":501,"x":885,"var":"betarea_4","name":"sanjunFives","runtime":"ui.gameUI.GameCommonBox.BetTwoUI"}},{"type":"BetNine","props":{"y":501,"x":1102,"var":"betarea_5","name":"sanjunSix","runtime":"ui.gameUI.GameCommonBox.BetNineUI"}},{"type":"BetThree","props":{"y":383,"x":18,"var":"betarea_6","name":"dianshuFour","runtime":"ui.gameUI.GameCommonBox.BetThreeUI"}},{"type":"BetFour","props":{"y":383,"x":115,"var":"betarea_7","name":"dianshuFives","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":208,"var":"betarea_8","name":"dianshuSix","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":300,"var":"betarea_9","name":"dianshuSeven","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":392,"var":"betarea_10","name":"dianshuEight","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":484,"var":"betarea_11","name":"dianshuNine","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":576,"var":"betarea_12","name":"dianshuTen","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":668,"var":"betarea_13","name":"dianshuEleven","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":760,"var":"betarea_14","name":"dianshuTwelve","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":852,"var":"betarea_15","name":"dianshuThirteen","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":944,"var":"betarea_16","name":"dianshuFourteen","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":1036,"var":"betarea_17","name":"dianshuFifteen","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetFour","props":{"y":383,"x":1128,"var":"betarea_18","name":"dianshuSixteen","runtime":"ui.gameUI.GameCommonBox.BetFourUI"}},{"type":"BetEight","props":{"y":383,"x":1222,"var":"betarea_19","name":"dianshuSeventeen","runtime":"ui.gameUI.GameCommonBox.BetEightUI"}},{"type":"BetFive","props":{"y":178,"x":36,"var":"betarea_20","name":"small","runtime":"ui.gameUI.GameCommonBox.BetFiveUI"}},{"type":"DoubleItem","props":{"y":214,"x":189,"var":"betarea_21","name":"duiziOne","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":252,"var":"betarea_22","name":"duiziTwo","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":315,"var":"betarea_23","name":"duiziThree","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":382,"var":"betarea_24","name":"weitouOne","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":444,"var":"betarea_25","name":"weitouTwo","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":508,"var":"betarea_26","name":"weitouThree","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":765,"var":"betarea_27","name":"weitouFour","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":828,"var":"betarea_28","name":"weitouFives","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":891,"var":"betarea_29","name":"weitouSix","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":957,"var":"betarea_30","name":"duiziFour","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":1020,"var":"betarea_31","name":"duiziFives","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"DoubleItem","props":{"y":214,"x":1083,"var":"betarea_32","name":"duiziSix","runtime":"ui.gameUI.GameCommonBox.DoubleItemUI"}},{"type":"BetSix","props":{"y":263,"x":578,"var":"betarea_33","name":"quanwei","runtime":"ui.gameUI.GameCommonBox.BetSixUI"}},{"type":"BetSeven","props":{"y":175,"x":1149,"var":"betarea_34","name":"big","runtime":"ui.gameUI.GameCommonBox.BetSevenUI"}}]},{"type":"Box","props":{"width":1334,"visible":true,"mouseThrough":true,"mouseEnabled":true,"height":750,"centerY":0,"centerX":0},"child":[{"type":"GameCountDownBox","props":{"visible":false,"var":"countDownObj","centerY":-285,"centerX":-172,"runtime":"ui.gameUI.GameCommonBox.GameCountDownBoxUI"}},{"type":"GameTrendBox","props":{"var":"gameTrendBoxObj","top":1,"right":0,"runtime":"ui.gameTrend.Boxs.GameTrendBoxUI"}},{"type":"BetCtrlBarBox","props":{"y":638,"x":28,"var":"betCtrlBoxObj","runtime":"ui.gameUI.GameCtrlBox.BetCtrlBarBoxUI"}}]},{"type":"Box","props":{"y":0,"x":0,"width":1334,"visible":true,"name":"roomTable","mouseThrough":true,"mouseEnabled":true,"height":750,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"y":148,"x":0,"width":1334,"var":"gameChipsBoxObj","height":500},"child":[{"type":"Box","props":{"visible":true,"top":0,"staticCache":true,"right":0,"name":"posNode","left":0,"cacheAsBitmap":false,"cacheAs":"normal","bottom":0},"child":[{"type":"Box","props":{"y":500,"x":1250,"width":1,"name":"localSit0","height":1}},{"type":"Box","props":{"y":120,"x":1230,"width":1,"name":"big","height":1}},{"type":"Box","props":{"y":120,"x":100,"width":1,"name":"small","height":1}},{"type":"Box","props":{"y":150,"x":220,"width":1,"name":"duiziOne","height":1}},{"type":"Box","props":{"y":150,"x":290,"width":1,"name":"duiziTwo","height":1}},{"type":"Box","props":{"y":150,"x":350,"width":1,"name":"duiziThree","height":1}},{"type":"Box","props":{"y":150,"x":990,"width":1,"name":"duiziFour","height":1}},{"type":"Box","props":{"y":150,"x":1050,"width":1,"name":"duiziFives","height":1}},{"type":"Box","props":{"y":150,"x":1120,"width":1,"name":"duiziSix","height":1}},{"type":"Box","props":{"y":150,"x":410,"width":1,"name":"weitouOne","height":1}},{"type":"Box","props":{"y":150,"x":480,"width":1,"name":"weitouTwo","height":1}},{"type":"Box","props":{"y":150,"x":540,"width":1,"name":"weitouThree","height":1}},{"type":"Box","props":{"y":150,"x":800,"width":1,"name":"weitouFour","height":1}},{"type":"Box","props":{"y":150,"x":860,"width":1,"name":"weitouFives","height":1}},{"type":"Box","props":{"y":150,"x":920,"width":1,"name":"weitouSix","height":1}},{"type":"Box","props":{"y":400,"x":140,"width":1,"name":"sanjunOne","height":1}},{"type":"Box","props":{"y":400,"x":350,"width":1,"name":"sanjunTwo","height":1}},{"type":"Box","props":{"y":400,"x":560,"width":1,"name":"sanjunThree","height":1}},{"type":"Box","props":{"y":400,"x":780,"width":1,"name":"sanjunFour","height":1}},{"type":"Box","props":{"y":400,"x":990,"width":1,"name":"sanjunFives","height":1}},{"type":"Box","props":{"y":400,"x":1210,"width":1,"name":"sanjunSix","height":1}},{"type":"Box","props":{"y":300,"x":70,"width":1,"name":"dianshuFour","height":1}},{"type":"Box","props":{"y":300,"x":160,"width":1,"name":"dianshuFives","height":1}},{"type":"Box","props":{"y":300,"x":260,"width":1,"name":"dianshuSix","height":1}},{"type":"Box","props":{"y":300,"x":350,"width":1,"name":"dianshuSeven","height":1}},{"type":"Box","props":{"y":300,"x":440,"width":1,"name":"dianshuEight","height":1}},{"type":"Box","props":{"y":300,"x":530,"width":1,"name":"dianshuNine","height":1}},{"type":"Box","props":{"y":300,"x":620,"width":1,"name":"dianshuTen","height":1}},{"type":"Box","props":{"y":300,"x":710,"width":1,"name":"dianshuEleven","height":1}},{"type":"Box","props":{"y":300,"x":810,"width":1,"name":"dianshuTwelve","height":1}},{"type":"Box","props":{"y":300,"x":900,"width":1,"name":"dianshuThirteen","height":1}},{"type":"Box","props":{"y":300,"x":990,"width":1,"name":"dianshuFourteen","height":1}},{"type":"Box","props":{"y":300,"x":1080,"width":1,"name":"dianshuFifteen","height":1}},{"type":"Box","props":{"y":300,"x":1180,"width":1,"name":"dianshuSixteen","height":1}},{"type":"Box","props":{"y":300,"x":1270,"width":1,"name":"dianshuSeventeen","height":1}},{"type":"Box","props":{"y":500,"x":200,"width":1,"name":"localSit1","height":1}},{"type":"Box","props":{"y":170,"x":670,"width":1,"name":"quanwei","height":1}},{"type":"Box","props":{"y":-50,"x":670,"width":1,"name":"dealerSit","height":1}}]}]},{"type":"Image","props":{"y":613,"x":1187,"var":"btnPlayer","skin":"gameRes/panel/icon_com_taren.png","right":17}}]},{"type":"Box","props":{"width":1,"visible":true,"var":"animBox","mouseEnabled":false,"height":1,"centerY":0,"centerX":0},"child":[{"type":"SkeletonPlayer","props":{"y":16,"x":0,"var":"winAnim","url":"gameRes/anim/win2.sk"}},{"type":"SkeletonPlayer","props":{"y":20,"x":0,"visible":false,"var":"startBetAnim","url":"gameRes/anim/starbet_com.sk"}},{"type":"SkeletonPlayer","props":{"y":-284,"x":3,"var":"dealer","url":"gameRes/anim/sz-human.sk"}},{"type":"SkeletonPlayer","props":{"y":20,"x":0,"visible":false,"var":"stopAnim","url":"gameRes/anim/stopbet_DT.sk"}},{"type":"SkeletonPlayer","props":{"y":-198,"x":4,"visible":false,"var":"yaosaiAnim","url":"gameRes/anim/sz-play_ske.sk"}},{"type":"Image","props":{"visible":false,"var":"waitNext","skin":"gameRes/panel/img_bcbm_qnxddxyj01.png","centerY":0,"centerX":0}}]},{"type":"GameMenuBox","props":{"var":"roomMenuObj","top":0,"right":0,"mouseThrough":true,"mouseEnabled":true,"left":0,"bottom":0,"runtime":"ui.gameUI.GameCommonBox.GameMenuBoxUI"}},{"type":"TipMsgPanel","props":{"visible":false,"var":"tipmsgObj","centerY":0,"centerX":0,"runtime":"ui.gameUI.GameCommonBox.TipMsgPanelUI"}},{"type":"Box","props":{"width":1,"visible":true,"var":"openBox","height":1,"centerY":0,"centerX":0},"compId":293},{"type":"WinMsgPanel","props":{"visible":false,"var":"winTipsBoxObj","centerY":0,"centerX":0,"runtime":"ui.gameUI.GameCommonBox.WinMsgPanelUI"}}],"animations":[{"nodes":[{"target":293,"keyframes":{"width":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":293,"key":"width","index":0}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":293,"key":"scaleY","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":293,"key":"scaleY","index":14}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":293,"key":"scaleX","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":293,"key":"scaleX","index":14}],"height":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":293,"key":"height","index":0}],"centerY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":293,"key":"centerY","index":0},{"value":-50,"tweenMethod":"linearNone","tween":true,"target":293,"key":"centerY","index":4},{"value":-250,"tweenMethod":"linearNone","tween":true,"target":293,"key":"centerY","index":14}]}}],"name":"openAnim","id":1,"frameRate":24,"action":0},{"nodes":[{"target":180,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":180,"key":"visible","index":0}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":180,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":180,"key":"rotation","index":12}]}}],"name":"waitMsgAnim","id":2,"frameRate":24,"action":0},{"nodes":[{"target":293,"keyframes":{"centerY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":293,"key":"centerY","index":0}]}}],"name":"resetOpen","id":3,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.gameUI.GameCommonBox.GameRoomInfoBoxUI",ui.gameUI.GameCommonBox.GameRoomInfoBoxUI);
			View.regComponent("ui.gameUI.GameCommonBox.WinMsgPanelUI",ui.gameUI.GameCommonBox.WinMsgPanelUI);
			View.regComponent("ui.gameUI.GameCommonBox.BetTwoUI",ui.gameUI.GameCommonBox.BetTwoUI);
			View.regComponent("ui.gameUI.GameCommonBox.BetNineUI",ui.gameUI.GameCommonBox.BetNineUI);
			View.regComponent("ui.gameUI.GameCommonBox.BetThreeUI",ui.gameUI.GameCommonBox.BetThreeUI);
			View.regComponent("ui.gameUI.GameCommonBox.BetFourUI",ui.gameUI.GameCommonBox.BetFourUI);
			View.regComponent("ui.gameUI.GameCommonBox.BetEightUI",ui.gameUI.GameCommonBox.BetEightUI);
			View.regComponent("ui.gameUI.GameCommonBox.BetFiveUI",ui.gameUI.GameCommonBox.BetFiveUI);
			View.regComponent("ui.gameUI.GameCommonBox.DoubleItemUI",ui.gameUI.GameCommonBox.DoubleItemUI);
			View.regComponent("ui.gameUI.GameCommonBox.BetOneUI",ui.gameUI.GameCommonBox.BetOneUI);
			View.regComponent("ui.gameUI.GameCommonBox.BetSevenUI",ui.gameUI.GameCommonBox.BetSevenUI);
			View.regComponent("ui.gameUI.GameCommonBox.GameCountDownBoxUI",ui.gameUI.GameCommonBox.GameCountDownBoxUI);
			View.regComponent("ui.gameTrend.Boxs.GameTrendBoxUI",ui.gameTrend.Boxs.GameTrendBoxUI);
			View.regComponent("ui.gameUI.GameCtrlBox.BetCtrlBarBoxUI",ui.gameUI.GameCtrlBox.BetCtrlBarBoxUI);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);
			View.regComponent("ui.gameUI.GameCommonBox.GameMenuBoxUI",ui.gameUI.GameCommonBox.GameMenuBoxUI);
			View.regComponent("ui.gameUI.GameCommonBox.TipMsgPanelUI",ui.gameUI.GameCommonBox.TipMsgPanelUI);
			View.regComponent("ui.gameUI.GameCommonBox.BetSixUI",ui.gameUI.GameCommonBox.BetSixUI);

            super.createChildren();
            this.createView(ui.gameUI.GamePanel.GameRoomPanelUI.uiView);

        }

    }
}

module ui.gameUI.GamePlayerSit {
    export class GamePlayerBetInfoBoxUI extends View {
		public flyLabel:Laya.FrameAnimation;
		public betNumBg:Laya.Image;
		public betNum:Laya.Label;
		public effectLabel:game.font.gameMoneyFont;

        public static  uiView:any ={"type":"View","props":{"width":140,"height":120},"child":[{"type":"Image","props":{"var":"betNumBg","skin":"gameRes/gameRoom/out_score_frame.png","left":0,"bottom":10},"child":[{"type":"Label","props":{"width":93,"var":"betNum","top":6,"text":"1.00","strokeColor":"#000000","stroke":1,"left":38,"height":28,"fontSize":28,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"width":100,"var":"effectLabel","runtime":"game.font.gameMoneyFont","height":20,"centerX":2,"bottom":18,"anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":4,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":24}],"bottom":[{"value":19,"tweenMethod":"linearNone","tween":true,"target":4,"key":"bottom","index":0},{"value":14,"tweenMethod":"linearNone","tween":true,"target":4,"key":"bottom","index":2},{"value":74,"tweenMethod":"linearNone","tween":true,"target":4,"key":"bottom","index":10},{"value":69,"tweenMethod":"linearNone","tween":true,"target":4,"key":"bottom","index":12}]}}],"name":"flyLabel","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("game.font.gameMoneyFont",game.font.gameMoneyFont);

            super.createChildren();
            this.createView(ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI.uiView);

        }

    }
}

module ui.gameUI.GamePlayerSit {
    export class GamePlayerBoxUI extends View {
		public flyLabel:Laya.FrameAnimation;
		public headImage:Laya.Image;
		public gamePlayerCDBoxObj:ui.gameUI.GamePlayerSit.GamePlayerCDBoxUI;
		public moneySortNode:Laya.Box;
		public playerMoney:game.component.GamePlayerMoneyScrollBox;
		public playerName:Laya.Label;
		public winlight:Laya.Image;
		public effectLabel:game.font.gameMoneyFont;
		public winEffect:laya.ani.bone.Skeleton;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":240,"mouseEnabled":true,"height":210},"child":[{"type":"Image","props":{"y":32,"x":47,"width":120,"var":"headImage","skin":"gameRes/panel/head01.png","mouseEnabled":true,"height":120,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":165,"x":44,"skin":"gameRes/panel/coinbg.png","name":"moneyFrame","centerY":80,"centerX":0}},{"type":"GamePlayerCDBox","props":{"y":0,"x":15,"var":"gamePlayerCDBoxObj","centerY":0,"centerX":0,"runtime":"ui.gameUI.GamePlayerSit.GamePlayerCDBoxUI"}},{"type":"Box","props":{"width":145,"var":"moneySortNode","height":36,"centerY":81,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":36,"skin":"gameRes/panel/img_dzpk_cm.png","height":36}},{"type":"Label","props":{"var":"playerMoney","text":"9999.99","runtime":"game.component.GamePlayerMoneyScrollBox","left":39,"fontSize":28,"font":"Microsoft YaHei","color":"#ffff99","centerY":0,"align":"center"}}]},{"type":"Label","props":{"var":"playerName","text":"ya****677","stroke":1,"fontSize":28,"font":"Microsoft YaHei","color":"#ffffff","centerY":35,"centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":33,"x":48,"visible":false,"var":"winlight","skin":"gameRes/panel/img_com_chouma_xzk.png"}},{"type":"Box","props":{"width":120,"visible":false,"var":"effectLabel","runtime":"game.font.gameMoneyFont","height":35,"centerX":2,"bottom":50,"anchorY":0.5,"anchorX":0.5},"compId":50},{"type":"SkeletonPlayer","props":{"y":106,"x":123,"visible":false,"var":"winEffect","url":"gameRes/anim/win_ske.sk"}}],"animations":[{"nodes":[{"target":50,"keyframes":{"x":[{"value":122,"tweenMethod":"linearNone","tween":true,"target":50,"key":"x","index":0}],"bottom":[{"value":50,"tweenMethod":"linearNone","tween":false,"target":50,"key":"bottom","index":0},{"value":100,"tweenMethod":"linearNone","tween":true,"target":50,"key":"bottom","index":5},{"value":170,"tweenMethod":"linearNone","tween":true,"target":50,"key":"bottom","index":20}]}}],"name":"flyLabel","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.gameUI.GamePlayerSit.GamePlayerCDBoxUI",ui.gameUI.GamePlayerSit.GamePlayerCDBoxUI);
			View.regComponent("game.component.GamePlayerMoneyScrollBox",game.component.GamePlayerMoneyScrollBox);
			View.regComponent("game.font.gameMoneyFont",game.font.gameMoneyFont);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.gameUI.GamePlayerSit.GamePlayerBoxUI.uiView);

        }

    }
}

module ui.gameUI.GamePlayerSit {
    export class GamePlayerCDBoxUI extends View {
		public countDownProBG:Laya.Image;
		public coutDownFontNode:Laya.Image;
		public coutDownFont:Laya.FontClip;
		public coutDownProNode:Laya.Box;
		public coutDownProBar:Laya.Image;
		public coutDownMaskSprite:Laya.Sprite;
		public countDownAnim:laya.ani.bone.Skeleton;

        public static  uiView:any ={"type":"View","props":{"width":210,"height":210},"child":[{"type":"Image","props":{"var":"countDownProBG","skin":"gameRes/gameRoom/img_game_progress_02.png","scaleY":0.9,"scaleX":0.9,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":44,"x":44,"var":"coutDownFontNode","skin":"gameRes/gameRoom/img_djs_01.png","scaleY":1,"scaleX":1,"centerY":0,"centerX":0},"child":[{"type":"FontClip","props":{"var":"coutDownFont","value":"1","spaceX":-10,"skin":"gameRes/gameRoom/countDownFont.png","sheet":"0123456789","centerY":0,"centerX":-3}}]},{"type":"Box","props":{"width":204,"var":"coutDownProNode","scaleY":0.9,"scaleX":0.9,"height":204,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":103,"x":103,"var":"coutDownProBar","skin":"gameRes/gameRoom/img_game_progress_01.png","rotation":133,"anchorY":0.5,"anchorX":0.5}},{"type":"Sprite","props":{"y":103,"x":103,"var":"coutDownMaskSprite","renderType":"mask"}}]},{"type":"SkeletonPlayer","props":{"y":105,"x":112,"var":"countDownAnim","url":"gameRes/anim/countdown.sk"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.gameUI.GamePlayerSit.GamePlayerCDBoxUI.uiView);

        }

    }
}

module ui.gameUI.GamePlayerSit {
    export class GamePlayerHCBoxUI extends View {
		public showCardAnim:Laya.FrameAnimation;
		public giveUp:Laya.Box;
		public card0:items.GameCardItem;
		public card1:items.GameCardItem;
		public card2:items.GameCardItem;
		public cardTypeNode:Laya.Image;
		public cardTypeImage:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":230,"mouseThrough":true,"mouseEnabled":true,"height":153},"child":[{"type":"Box","props":{"y":0,"x":0,"width":230,"visible":false,"var":"giveUp","staticCache":true,"height":153,"gray":true,"cacheAsBitmap":false,"cacheAs":"normal"},"compId":23,"child":[{"type":"Image","props":{"y":76.5,"x":57,"skin":"gameRes/gameRoom/img_liangpai_kabei.png","rotation":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":76.5,"x":115,"skin":"gameRes/gameRoom/img_liangpai_kabei.png","scaleX":1,"rotation":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":76.5,"x":173,"skin":"gameRes/gameRoom/img_liangpai_kabei.png","rotation":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"GameCardItem","props":{"y":77,"x":57,"var":"card0","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5}},{"type":"GameCardItem","props":{"y":77,"x":115,"var":"card1","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5}},{"type":"GameCardItem","props":{"y":77,"x":173,"var":"card2","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":135,"x":115,"width":184,"var":"cardTypeNode","skin":"gameRes/gameRoom/img_paixing_di.png","scaleY":1.3,"scaleX":1.3,"height":32,"anchorY":0.5,"anchorX":0.5},"compId":27,"child":[{"type":"Image","props":{"y":17,"x":2,"var":"cardTypeImage","skin":"gameRes/gameRoom/img_paixing_teshu.png","centerY":0,"centerX":0}}]}],"animations":[{"nodes":[{"target":27,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":27,"key":"visible","index":0}],"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleY","index":5},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleY","index":8}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleX","index":5},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":27,"key":"scaleX","index":8}]}},{"target":23,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":23,"key":"visible","index":0}]}}],"name":"showCardAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("items.GameCardItem",items.GameCardItem);

            super.createChildren();
            this.createView(ui.gameUI.GamePlayerSit.GamePlayerHCBoxUI.uiView);

        }

    }
}

module ui.gameUI.GamePlayerSit {
    export class GamePlayerSitLBoxUI extends View {
		public resetAnim:Laya.FrameAnimation;
		public sitdownAnim:Laya.FrameAnimation;
		public handCardBoxObj:ui.gameUI.GamePlayerSit.GamePlayerHCBoxUI;
		public playerBoxObj:ui.gameUI.GamePlayerSit.GamePlayerBoxUI;
		public betInfoBoxObj:ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":216},"child":[{"type":"GamePlayerHCBox","props":{"y":73,"x":206,"var":"handCardBoxObj","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameUI.GamePlayerSit.GamePlayerHCBoxUI"},"compId":3},{"type":"GamePlayerBox","props":{"var":"playerBoxObj","runtime":"ui.gameUI.GamePlayerSit.GamePlayerBoxUI"},"compId":2},{"type":"GamePlayerBetInfoBox","props":{"y":96,"x":204,"var":"betInfoBoxObj","runtime":"ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI"},"compId":5}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":73,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0}],"x":[{"value":206,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0}]}},{"target":2,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0}]}},{"target":5,"keyframes":{"y":[{"value":96,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":0}],"x":[{"value":204,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0}]}}],"name":"resetAnim","id":1,"frameRate":24,"action":0},{"nodes":[{"target":3,"keyframes":{"y":[{"value":53,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":73,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":8}],"x":[{"value":186,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":206,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":8}],"alpha":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":8}]}},{"target":2,"keyframes":{"y":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8}],"x":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":8}],"alpha":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":8}]}},{"target":5,"keyframes":{"y":[{"value":76,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":0},{"value":96,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":8}],"x":[{"value":184,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0},{"value":204,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":8}],"alpha":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":8}]}}],"name":"sitdownAnim","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.gameUI.GamePlayerSit.GamePlayerHCBoxUI",ui.gameUI.GamePlayerSit.GamePlayerHCBoxUI);
			View.regComponent("ui.gameUI.GamePlayerSit.GamePlayerBoxUI",ui.gameUI.GamePlayerSit.GamePlayerBoxUI);
			View.regComponent("ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI",ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI);

            super.createChildren();
            this.createView(ui.gameUI.GamePlayerSit.GamePlayerSitLBoxUI.uiView);

        }

    }
}

module ui.gameUI.GamePlayerSit {
    export class GamePlayerSitRBoxUI extends View {
		public resetAnim:Laya.FrameAnimation;
		public sitdownAnim:Laya.FrameAnimation;
		public handCardBoxObj:ui.gameUI.GamePlayerSit.GamePlayerHCBoxUI;
		public playerBoxObj:ui.gameUI.GamePlayerSit.GamePlayerBoxUI;
		public betInfoBoxObj:ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":216},"child":[{"type":"GamePlayerHCBox","props":{"y":74,"x":27,"var":"handCardBoxObj","scaleY":0.6,"scaleX":0.6,"runtime":"ui.gameUI.GamePlayerSit.GamePlayerHCBoxUI"},"compId":3},{"type":"GamePlayerBox","props":{"y":0,"x":130,"var":"playerBoxObj","runtime":"ui.gameUI.GamePlayerSit.GamePlayerBoxUI"},"compId":2},{"type":"GamePlayerBetInfoBox","props":{"y":96,"x":26,"var":"betInfoBoxObj","runtime":"ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI"},"compId":5}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":74,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0}],"x":[{"value":27,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0}]}},{"target":2,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":130,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0}]}},{"target":5,"keyframes":{"y":[{"value":96,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":0}],"x":[{"value":26,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0}]}}],"name":"resetAnim","id":1,"frameRate":24,"action":0},{"nodes":[{"target":3,"keyframes":{"y":[{"value":54,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":74,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":8}],"x":[{"value":47,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":27,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":8}],"alpha":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":8}]}},{"target":2,"keyframes":{"y":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8}],"x":[{"value":150,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":130,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":8}],"alpha":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":8}]}},{"target":5,"keyframes":{"y":[{"value":76,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":0},{"value":96,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":8}],"x":[{"value":46,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0},{"value":26,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":8}],"alpha":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":8}]}}],"name":"sitdownAnim","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.gameUI.GamePlayerSit.GamePlayerHCBoxUI",ui.gameUI.GamePlayerSit.GamePlayerHCBoxUI);
			View.regComponent("ui.gameUI.GamePlayerSit.GamePlayerBoxUI",ui.gameUI.GamePlayerSit.GamePlayerBoxUI);
			View.regComponent("ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI",ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI);

            super.createChildren();
            this.createView(ui.gameUI.GamePlayerSit.GamePlayerSitRBoxUI.uiView);

        }

    }
}

module ui.gameUI.GamePlayerSit.main {
    export class GameMainPlayerBoxUI extends View {
		public flyLabel:Laya.FrameAnimation;
		public headImage:Laya.Image;
		public moneySortNode:Laya.Box;
		public playerMoney:game.component.GamePlayerMoneyScrollBox;
		public playerName:Laya.Label;
		public winlight:Laya.Image;
		public effectLabel:game.font.gameMoneyFont;
		public winEffect:laya.ani.bone.Skeleton;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":240,"mouseEnabled":true,"height":210},"child":[{"type":"Image","props":{"y":17,"x":32,"var":"headImage","skin":"gameRes/panel/head01.png","scaleY":0.8,"scaleX":0.8,"mouseEnabled":true,"centerY":0,"centerX":0}},{"type":"Box","props":{"width":145,"var":"moneySortNode","height":36,"centerY":65,"centerX":2,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"gameRes/panel/coinbg.png","name":"moneyFrame","centerY":9,"centerX":1}},{"type":"Image","props":{"y":12,"x":7,"width":36,"skin":"gameRes/panel/img_dzpk_cm.png","scaleY":0.8,"scaleX":0.8,"height":36}},{"type":"Label","props":{"y":17,"var":"playerMoney","text":"9999.99","runtime":"game.component.GamePlayerMoneyScrollBox","left":40,"fontSize":24,"font":"Microsoft YaHei","color":"#ffff99","align":"center"}}]},{"type":"Label","props":{"var":"playerName","text":"ya****677","stroke":1,"fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","centerY":39,"centerX":-1,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":33,"x":48,"visible":false,"var":"winlight","skin":"gameRes/panel/img_com_chouma_xzk.png"}},{"type":"Box","props":{"y":143,"width":120,"visible":false,"var":"effectLabel","runtime":"game.font.gameMoneyFont","height":35,"centerX":0,"bottom":50,"anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"SkeletonPlayer","props":{"y":106,"x":123,"visible":false,"var":"winEffect","url":"gameRes/anim/win_ske.sk"}}],"animations":[{"nodes":[{"target":44,"keyframes":{"x":[{"value":122,"tweenMethod":"linearNone","tween":true,"target":44,"key":"x","index":0}],"bottom":[{"value":50,"tweenMethod":"linearNone","tween":false,"target":44,"key":"bottom","index":0},{"value":100,"tweenMethod":"linearNone","tween":true,"target":44,"key":"bottom","index":5},{"value":175,"tweenMethod":"linearNone","tween":true,"target":44,"key":"bottom","index":20}]}}],"name":"flyLabel","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("game.component.GamePlayerMoneyScrollBox",game.component.GamePlayerMoneyScrollBox);
			View.regComponent("game.font.gameMoneyFont",game.font.gameMoneyFont);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.gameUI.GamePlayerSit.main.GameMainPlayerBoxUI.uiView);

        }

    }
}

module ui.gameUI.GamePlayerSit.main {
    export class GameMainPlayerHCBoxUI extends View {
		public giveUp:Laya.Box;
		public card0:items.GameCardItem;
		public card1:items.GameCardItem;
		public card2:items.GameCardItem;
		public cardTypeNode:Laya.Image;
		public cardTypeImage:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":230,"mouseThrough":true,"mouseEnabled":true,"height":153},"child":[{"type":"Box","props":{"y":-8,"x":-51,"width":340,"visible":false,"var":"giveUp","staticCache":true,"height":200,"gray":true,"cacheAsBitmap":false,"cacheAs":"normal"},"child":[{"type":"Image","props":{"y":83,"x":126,"skin":"gameRes/gameRoom/img_liangpai_kabei.png","rotation":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":83,"x":166,"skin":"gameRes/gameRoom/img_liangpai_kabei.png","scaleX":1,"rotation":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":83,"x":204,"skin":"gameRes/gameRoom/img_liangpai_kabei.png","rotation":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"GameCardItem","props":{"y":99,"x":32,"var":"card0","runtime":"items.GameCardItem","rotation":-27,"anchorY":0.5,"anchorX":0.5}},{"type":"GameCardItem","props":{"y":77,"x":115,"var":"card1","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5}},{"type":"GameCardItem","props":{"y":97,"x":208,"var":"card2","runtime":"items.GameCardItem","rotation":19,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":79,"x":115,"width":184,"var":"cardTypeNode","skin":"gameRes/gameRoom/img_paixing_di.png","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":17,"x":2,"var":"cardTypeImage","skin":"gameRes/gameRoom/img_paixing_teshu.png","centerY":0,"centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("items.GameCardItem",items.GameCardItem);

            super.createChildren();
            this.createView(ui.gameUI.GamePlayerSit.main.GameMainPlayerHCBoxUI.uiView);

        }

    }
}

module ui.gameUI.GamePlayerSit.main {
    export class GameMainPlayerSitBoxUI extends View {
		public resetAnim:Laya.FrameAnimation;
		public handCardBoxObj:ui.gameUI.GamePlayerSit.main.GameMainPlayerHCBoxUI;
		public betCtrlBarBoxObj:ui.gameUI.GameCtrlBox.BetCtrlBarBoxUI;
		public gameStateCtrlBoxObj:ui.gameUI.GameCtrlBox.GameStateCtrlBoxUI;
		public playerBoxObj:ui.gameUI.GamePlayerSit.main.GameMainPlayerBoxUI;
		public betInfoBoxObj:ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":250},"child":[{"type":"GameMainPlayerHCBox","props":{"y":23,"x":475,"var":"handCardBoxObj","alpha":1,"runtime":"ui.gameUI.GamePlayerSit.main.GameMainPlayerHCBoxUI"},"compId":11},{"type":"BetCtrlBarBox","props":{"y":108,"x":123,"var":"betCtrlBarBoxObj","alpha":1,"runtime":"ui.gameUI.GameCtrlBox.BetCtrlBarBoxUI"},"compId":8},{"type":"GameStateCtrlBox","props":{"y":112,"x":950,"var":"gameStateCtrlBoxObj","alpha":1,"runtime":"ui.gameUI.GameCtrlBox.GameStateCtrlBoxUI"},"compId":10},{"type":"GameMainPlayerBox","props":{"y":12,"x":1,"var":"playerBoxObj","alpha":1,"runtime":"ui.gameUI.GamePlayerSit.main.GameMainPlayerBoxUI"},"compId":13},{"type":"GamePlayerBetInfoBox","props":{"y":-86,"x":526,"var":"betInfoBoxObj","alpha":1,"runtime":"ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI"},"compId":5}],"animations":[{"nodes":[{"target":11,"keyframes":{"y":[{"value":23,"tweenMethod":"linearNone","tween":true,"target":11,"key":"y","index":0}],"x":[{"value":475,"tweenMethod":"linearNone","tween":true,"target":11,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":0}]}},{"target":8,"keyframes":{"y":[{"value":108,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":0}],"x":[{"value":123,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0}]}},{"target":10,"keyframes":{"y":[{"value":112,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0}],"x":[{"value":950,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0}]}},{"target":13,"keyframes":{"y":[{"value":12,"tweenMethod":"linearNone","tween":true,"target":13,"key":"y","index":0}],"x":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":0}]}},{"target":5,"keyframes":{"y":[{"value":-86,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":0}],"x":[{"value":526,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0}]}}],"name":"resetAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.gameUI.GamePlayerSit.main.GameMainPlayerHCBoxUI",ui.gameUI.GamePlayerSit.main.GameMainPlayerHCBoxUI);
			View.regComponent("ui.gameUI.GameCtrlBox.BetCtrlBarBoxUI",ui.gameUI.GameCtrlBox.BetCtrlBarBoxUI);
			View.regComponent("ui.gameUI.GameCtrlBox.GameStateCtrlBoxUI",ui.gameUI.GameCtrlBox.GameStateCtrlBoxUI);
			View.regComponent("ui.gameUI.GamePlayerSit.main.GameMainPlayerBoxUI",ui.gameUI.GamePlayerSit.main.GameMainPlayerBoxUI);
			View.regComponent("ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI",ui.gameUI.GamePlayerSit.GamePlayerBetInfoBoxUI);

            super.createChildren();
            this.createView(ui.gameUI.GamePlayerSit.main.GameMainPlayerSitBoxUI.uiView);

        }

    }
}

module ui.gameUI.GameSettlementBox {
    export class GameCompareBoxUI extends View {
		public showAnim:Laya.FrameAnimation;
		public closeAnim:Laya.FrameAnimation;
		public localPos0:Laya.Box;
		public localPos1:Laya.Box;
		public localPos2:Laya.Box;
		public localPos3:Laya.Box;
		public localPos4:Laya.Box;
		public animNode:laya.ani.bone.Skeleton;
		public leftCard2:items.GameCardItem;
		public leftCard1:items.GameCardItem;
		public leftCard0:items.GameCardItem;
		public rightCard0:items.GameCardItem;
		public rightCard1:items.GameCardItem;
		public rightCard2:items.GameCardItem;
		public leftHead:Laya.Image;
		public leftName:Laya.Label;
		public rightHead:Laya.Image;
		public rightName:Laya.Label;
		public leftWinEffect:laya.ani.bone.Skeleton;
		public rightWinEffect:laya.ani.bone.Skeleton;
		public gzyzEffect:laya.ani.bone.Skeleton;
		public leftWinLight:laya.ani.bone.Skeleton;
		public rightWinLight:laya.ani.bone.Skeleton;

        public static  uiView:any ={"type":"View","props":{"width":1624,"height":750},"child":[{"type":"Image","props":{"top":0,"skin":"gameRes/gameRoom/black_mask.png","right":0,"mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Image","props":{"width":1521,"height":758,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1521,"visible":false,"staticCache":true,"height":758,"cacheAsBitmap":false,"cacheAs":"normal"},"child":[{"type":"Box","props":{"y":621,"x":298,"var":"localPos0"}},{"type":"Box","props":{"y":403,"x":1331,"var":"localPos1"}},{"type":"Box","props":{"y":173,"x":1147,"var":"localPos2"}},{"type":"Box","props":{"y":174,"x":369,"var":"localPos3"}},{"type":"Box","props":{"y":403,"x":194,"var":"localPos4"}}]},{"type":"SkeletonPlayer","props":{"y":378,"x":763,"var":"animNode","url":"gameRes/anim/zjh_bp2.sk"}},{"type":"Image","props":{"y":309,"x":472,"visible":false,"skin":"gameRes/gameRoom/img_zhajinhua_tiao1.png","scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":34},{"type":"Image","props":{"y":309,"x":1049,"visible":false,"skin":"gameRes/gameRoom/img_zhajinhua_tiao2.png","scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":35},{"type":"Image","props":{"y":449,"x":595,"visible":true,"var":"leftCard2","skin":"gameRes/gameRoom/img_liangpai_kabei.png","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5},"compId":28},{"type":"Image","props":{"y":449,"x":471,"visible":true,"var":"leftCard1","skin":"gameRes/gameRoom/img_liangpai_kabei.png","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5},"compId":27},{"type":"Image","props":{"y":449,"x":347,"visible":true,"var":"leftCard0","skin":"gameRes/gameRoom/img_liangpai_kabei.png","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5},"compId":26},{"type":"Image","props":{"y":449,"x":926,"visible":true,"var":"rightCard0","skin":"gameRes/gameRoom/img_liangpai_kabei.png","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5},"compId":29},{"type":"Image","props":{"y":449,"x":1050,"visible":true,"var":"rightCard1","skin":"gameRes/gameRoom/img_liangpai_kabei.png","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5},"compId":30},{"type":"Image","props":{"y":449,"x":1174,"visible":true,"var":"rightCard2","skin":"gameRes/gameRoom/img_liangpai_kabei.png","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5},"compId":31},{"type":"Image","props":{"y":245,"x":472,"width":146,"visible":false,"var":"leftHead","skin":"gameRes/gameRoom/header01.png","height":146,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":170,"var":"leftName","text":"ya****677","stroke":1,"fontSize":28,"font":"Microsoft YaHei","color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":245,"x":1047,"width":146,"visible":false,"var":"rightHead","skin":"gameRes/gameRoom/header01.png","height":146,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":170,"var":"rightName","text":"ya****677","stroke":1,"fontSize":28,"font":"Microsoft YaHei","color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"SkeletonPlayer","props":{"y":248,"x":465,"visible":false,"var":"leftWinEffect","url":"gameRes/anim/win_header_icon.sk"}},{"type":"SkeletonPlayer","props":{"y":248,"x":1042,"visible":false,"var":"rightWinEffect","url":"gameRes/anim/win_header_icon.sk"}},{"type":"SkeletonPlayer","props":{"y":360,"x":763,"visible":false,"var":"gzyzEffect","url":"gameRes/anim/totally_compare.sk"}},{"type":"SkeletonPlayer","props":{"y":119,"x":496,"visible":false,"var":"leftWinLight","url":"gameRes/anim/light_zjh4.sk"}},{"type":"SkeletonPlayer","props":{"y":119,"x":1069,"visible":false,"var":"rightWinLight","url":"gameRes/anim/light_zjh4.sk"}}]}],"animations":[{"nodes":[{"target":34,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":34,"key":"visible","index":0}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":34,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":34,"key":"scaleX","index":6}]}},{"target":35,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":35,"key":"visible","index":0}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":35,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":35,"key":"scaleX","index":6}]}},{"target":26,"keyframes":{"x":[{"value":595,"tweenMethod":"linearNone","tween":true,"target":26,"key":"x","index":0},{"value":347,"tweenMethod":"linearNone","tween":true,"target":26,"key":"x","index":6}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":26,"key":"visible","index":0}]}},{"target":27,"keyframes":{"x":[{"value":595,"tweenMethod":"linearNone","tween":true,"target":27,"key":"x","index":0},{"value":471,"tweenMethod":"linearNone","tween":true,"target":27,"key":"x","index":6}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":27,"key":"visible","index":0}]}},{"target":30,"keyframes":{"x":[{"value":926,"tweenMethod":"linearNone","tween":true,"target":30,"key":"x","index":0},{"value":1050,"tweenMethod":"linearNone","tween":true,"target":30,"key":"x","index":6}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":30,"key":"visible","index":0}]}},{"target":31,"keyframes":{"x":[{"value":926,"tweenMethod":"linearNone","tween":true,"target":31,"key":"x","index":0},{"value":1174,"tweenMethod":"linearNone","tween":true,"target":31,"key":"x","index":6}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":31,"key":"visible","index":0}]}},{"target":28,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":28,"key":"visible","index":0}]}},{"target":29,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":29,"key":"visible","index":0}]}}],"name":"showAnim","id":5,"frameRate":24,"action":0},{"nodes":[{"target":34,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":34,"key":"visible","index":0}]}},{"target":35,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":35,"key":"visible","index":0}]}},{"target":28,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":28,"key":"visible","index":0}]}},{"target":27,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":27,"key":"visible","index":0}]}},{"target":26,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":26,"key":"visible","index":0}]}},{"target":29,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":29,"key":"visible","index":0}]}},{"target":30,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":30,"key":"visible","index":0}]}},{"target":31,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":31,"key":"visible","index":0}]}}],"name":"closeAnim","id":6,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);
			View.regComponent("items.GameCardItem",items.GameCardItem);

            super.createChildren();
            this.createView(ui.gameUI.GameSettlementBox.GameCompareBoxUI.uiView);

        }

    }
}

module ui.gameUI.GameSettlementBox {
    export class GameShowCardBoxUI extends View {
		public showCardAnim:Laya.FrameAnimation;
		public card1:items.GameCardItem;
		public card2:items.GameCardItem;
		public card3:items.GameCardItem;
		public cardType:Laya.Image;
		public cardTypeNode:Laya.Image;
		public cardTypeIcon:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":400,"height":300,"centerY":0,"centerX":0},"child":[{"type":"GameCardItem","props":{"y":146,"x":87,"var":"card1","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5}},{"type":"GameCardItem","props":{"y":146,"x":201,"var":"card2","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5}},{"type":"GameCardItem","props":{"y":146,"x":315,"var":"card3","runtime":"items.GameCardItem","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":204,"x":204,"visible":true,"var":"cardType","skin":"gameRes/gameRoom/img_xiaoguo_baozi.png","scaleY":1,"scaleX":1,"name":"cardType","anchorY":0.5,"anchorX":0.5},"compId":8},{"type":"Image","props":{"y":196,"x":204,"width":184,"var":"cardTypeNode","skin":"gameRes/gameRoom/img_paixing_di.png","scaleY":1,"scaleX":1,"height":32,"anchorY":0.5,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"y":17,"x":2,"var":"cardTypeIcon","skin":"gameRes/gameRoom/img_paixing_teshu.png","centerY":0,"centerX":0}}]}],"animations":[{"nodes":[{"target":8,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"key":"visible","index":0}],"scaleY":[{"value":0,"tweenMethod":"backOut","tween":true,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":30}],"scaleX":[{"value":0,"tweenMethod":"backOut","tween":true,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":30}]}},{"target":9,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":15}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":15}]}}],"name":"showCardAnim","id":1,"frameRate":30,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("items.GameCardItem",items.GameCardItem);

            super.createChildren();
            this.createView(ui.gameUI.GameSettlementBox.GameShowCardBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class ExitButtonUI extends View {
		public showAnim:Laya.FrameAnimation;
		public exitBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":94,"height":104},"child":[{"type":"Image","props":{"y":-140,"var":"exitBtn","skin":"lobbyRes/lobbyPanel/btn_sanggong_fanhui.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":-140,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15}],"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}]}}],"name":"showAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.ExitButtonUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class LobbyBtnBarBoxUI extends View {
		public showAnim:Laya.FrameAnimation;
		public historyBtn:Laya.Image;
		public ruleBtn:Laya.Image;
		public settingBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":200},"child":[{"type":"Image","props":{"y":139,"x":0,"visible":true,"skin":"lobbyRes/lobbyPanel/img_sanggong_anniudi.png","name":"buttons"},"compId":2,"child":[{"type":"Image","props":{"y":7,"x":305,"var":"historyBtn","skin":"lobbyRes/lobbyPanel/btn_sanggong_zhanji.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":157,"var":"ruleBtn","skin":"lobbyRes/lobbyPanel/btn_sanggong_guize.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":452,"var":"settingBtn","skin":"lobbyRes/lobbyPanel/btn_sanggong_shezhi.png","anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":202,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":139,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":2,"key":"visible","index":0}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15}]}}],"name":"showAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.LobbyBtnBarBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class LobbyRoomBoxUI extends View {
		public checkGroupObj:Laya.Box;
		public lobbyTabelPageBoxObj0:ui.lobbyUI.Boxs.LobbyTabelPageBoxUI;
		public lobbyTabelPageBoxObj1:ui.lobbyUI.Boxs.LobbyTabelPageBoxUI;
		public lobbyTabelPageBoxObj2:ui.lobbyUI.Boxs.LobbyTabelPageBoxUI;
		public lobbyTabelPageBoxObj3:ui.lobbyUI.Boxs.LobbyTabelPageBoxUI;

        public static  uiView:any ={"type":"View","props":{"width":908,"height":471},"child":[{"type":"Image","props":{"y":1,"x":-1,"skin":"lobbyRes/lobbyRoomList/btn_com_fangjian_biaoge_hx524-2.png"}},{"type":"Box","props":{"y":5,"x":1,"var":"checkGroupObj","mouseEnabled":true},"child":[{"type":"CheckBox","props":{"y":0,"x":1,"visible":true,"stateNum":2,"skin":"lobbyRes/lobbyRoomList/menu1.png","selected":true}},{"type":"CheckBox","props":{"y":0,"x":227,"visible":true,"stateNum":2,"skin":"lobbyRes/lobbyRoomList/menu2.png","selected":false}},{"type":"CheckBox","props":{"y":0,"x":452,"visible":true,"stateNum":2,"skin":"lobbyRes/lobbyRoomList/menu3.png","selected":false}},{"type":"CheckBox","props":{"y":0,"x":677,"visible":true,"stateNum":2,"skin":"lobbyRes/lobbyRoomList/menu4.png","selected":false}}]},{"type":"LobbyTabelPageBox","props":{"y":80,"x":7,"width":900,"var":"lobbyTabelPageBoxObj0","mouseEnabled":true,"height":380,"runtime":"ui.lobbyUI.Boxs.LobbyTabelPageBoxUI"}},{"type":"LobbyTabelPageBox","props":{"y":80,"x":7,"width":900,"visible":false,"var":"lobbyTabelPageBoxObj1","height":380,"runtime":"ui.lobbyUI.Boxs.LobbyTabelPageBoxUI"}},{"type":"LobbyTabelPageBox","props":{"y":80,"x":7,"width":900,"visible":false,"var":"lobbyTabelPageBoxObj2","height":380,"runtime":"ui.lobbyUI.Boxs.LobbyTabelPageBoxUI"}},{"type":"LobbyTabelPageBox","props":{"y":80,"x":7,"width":900,"visible":false,"var":"lobbyTabelPageBoxObj3","height":380,"runtime":"ui.lobbyUI.Boxs.LobbyTabelPageBoxUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.lobbyUI.Boxs.LobbyTabelPageBoxUI",ui.lobbyUI.Boxs.LobbyTabelPageBoxUI);

            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.LobbyRoomBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class LobbyTabelPageBoxUI extends Laya.Panel {
		public barNode:Laya.Box;

        public static  uiView:any ={"type":"Panel","props":{"y":0,"x":0,"width":900,"vScrollBarSkin":"lobbyRes/lobbyRoomList/mask.png","height":380},"child":[{"type":"Box","props":{"y":0,"x":0,"width":900,"var":"barNode","height":3}}]};
        constructor(){ super();this.createUI(ui.lobbyUI.Boxs.LobbyTabelPageBoxUI.uiView);}
        createUI(uiData:any):void {
        
            laya.utils.ClassUtils.createByJson(uiData, this, this);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class LobbyTableBarBoxUI extends View {
		public btnEnterRoom:Laya.Image;
		public lobbyTableTrendBoxObj:ui.gameTrend.Boxs.LobbyTableTrendBoxUI;
		public betLimitLabel:Laya.Label;
		public zhunRuLabel:Laya.Label;
		public tableName:Laya.Label;
		public stateCDLabel:Laya.Label;
		public tongji:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":886,"height":250},"child":[{"type":"Box","props":{"y":25,"x":-2,"width":893,"height":224},"child":[{"type":"Image","props":{"y":16,"x":4,"width":886,"skin":"lobbyRes/lobbyRoomList/img_fjlbdi.png","sizeGrid":"22,14,22,14","height":211}},{"type":"Image","props":{"y":22,"x":60,"width":685,"skin":"lobbyRes/lobbyRoomList/img_fjlbidi.png","sizeGrid":"10,10,10,10","height":194}},{"type":"Image","props":{"y":115,"x":815,"var":"btnEnterRoom","skin":"lobbyRes/lobbyRoomList/btn_com_fangjian_jingru.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":50,"x":9,"skin":"lobbyRes/lobbyRoomList/img_sb_sfzs-f.png"}},{"type":"Image","props":{"y":-18,"x":74,"skin":"lobbyRes/lobbyRoomList/img_sb_sfzs-yzgth.png"}},{"type":"LobbyTableTrendBox","props":{"y":14,"x":61,"var":"lobbyTableTrendBoxObj","runtime":"ui.gameTrend.Boxs.LobbyTableTrendBoxUI"}}]},{"type":"Label","props":{"y":9,"var":"betLimitLabel","valign":"bottom","text":"押注限额 5000","left":103,"fontSize":22,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":9,"var":"zhunRuLabel","text":"局数 : 第40局","left":281,"fontSize":22,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":8,"var":"tableName","text":"A 桌","left":10,"fontSize":24,"font":"Microsoft YaHei","color":"#33ffff","align":"left"}},{"type":"Label","props":{"y":8,"var":"stateCDLabel","valign":"bottom","text":"下注中 12S","left":767,"fontSize":22,"font":"Microsoft YaHei","color":"#ffcc66","align":"left"}},{"type":"Label","props":{"y":9,"var":"tongji","text":"统计 : 大 2   小 26  豹子 22","left":477,"fontSize":22,"font":"Microsoft YaHei","color":"#ffffff","align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.gameTrend.Boxs.LobbyTableTrendBoxUI",ui.gameTrend.Boxs.LobbyTableTrendBoxUI);

            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.LobbyTableBarBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class MainPlayerInfoBoxUI extends View {
		public showAnim:Laya.FrameAnimation;
		public frameNode:Laya.Image;
		public header:Laya.Image;
		public nameLabel:Laya.Label;
		public playerWalletBoxObj:ui.lobbyUI.Boxs.MainPlayerWalletBoxUI;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":588,"height":121},"child":[{"type":"Box","props":{"y":0,"x":0,"width":588,"sizeGrid":"48,534,23,20","height":121,"alpha":1},"compId":2,"child":[{"type":"Image","props":{"y":0,"x":0,"var":"frameNode","skin":"lobbyRes/lobbyPanel/img_dating_03.png","alpha":1},"child":[{"type":"Image","props":{"y":6,"x":59,"var":"header","skin":"lobbyRes/lobbyPanel/header01.png","scaleY":0.7,"scaleX":0.7}},{"type":"Label","props":{"y":24,"x":189,"width":234,"var":"nameLabel","height":28,"fontSize":30,"color":"#ffe996","align":"left"}}]},{"type":"SkeletonPlayer","props":{"y":72,"x":359,"url":"lobbyRes/anim/liangguang.sk","name":"liangguang"}},{"type":"MainPlayerWalletBox","props":{"y":55,"x":129,"var":"playerWalletBoxObj","runtime":"ui.lobbyUI.Boxs.MainPlayerWalletBoxUI"}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":-150,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15}],"x":[{"value":0,"tweenMethod":"circOut","tween":true,"target":2,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":15}],"alpha":[{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15}]}}],"name":"showAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);
			View.regComponent("ui.lobbyUI.Boxs.MainPlayerWalletBoxUI",ui.lobbyUI.Boxs.MainPlayerWalletBoxUI);

            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.MainPlayerInfoBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Boxs {
    export class MainPlayerWalletBoxUI extends View {
		public showAnim:Laya.FrameAnimation;
		public frameNode:Laya.Image;
		public rechargeBtn:Laya.Image;
		public moneyLabel:lobby.font.playerMoneyCommonFont;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":311,"height":49},"child":[{"type":"Box","props":{"y":0,"x":0,"width":312,"height":52,"alpha":1},"compId":2,"child":[{"type":"Image","props":{"y":10,"x":48,"var":"frameNode","skin":"lobbyRes/lobbyPanel/img_dating_shuzidi.png","alpha":1},"child":[{"type":"Image","props":{"y":-1,"x":191,"var":"rechargeBtn","skin":"lobbyRes/lobbyPanel/img_dating_anniushuaxin01.png"},"child":[{"type":"Image","props":{"y":5,"x":12,"skin":"lobbyRes/lobbyPanel/img_dating_anniuchongzhi.png"}}]},{"type":"Box","props":{"y":4,"var":"moneyLabel","scaleY":0.8,"scaleX":0.8,"runtime":"lobby.font.playerMoneyCommonFont","height":40,"centerX":-20}}]},{"type":"SkeletonPlayer","props":{"y":31,"x":72,"url":"lobbyRes/anim/money_icon.sk","scaleY":0.7,"scaleX":0.7,"name":"money_icon"}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":-87,"tweenMethod":"circOut","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15}],"alpha":[{"value":0,"tweenMethod":"cubicOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15}]}}],"name":"showAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("lobby.font.playerMoneyCommonFont",lobby.font.playerMoneyCommonFont);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.lobbyUI.Boxs.MainPlayerWalletBoxUI.uiView);

        }

    }
}

module ui.lobbyUI.Components {
    export class GameSettingSliderUI extends View {
		public bgFrame:Laya.Image;
		public sliderBar:Laya.Image;
		public ctrlPoint:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":336,"height":33},"child":[{"type":"Image","props":{"y":17,"x":168,"var":"bgFrame","skin":"lobbyRes/gameSetting/img_sangong_jdt01.png","centerY":0,"centerX":0}},{"type":"Image","props":{"y":17,"x":0,"width":0,"var":"sliderBar","skin":"lobbyRes/gameSetting/img_sangong_jdt02.png","sizeGrid":"0,6,0,6","left":0,"centerY":0}},{"type":"Image","props":{"y":17,"x":0,"var":"ctrlPoint","skin":"lobbyRes/gameSetting/btn_sangong_jdt.png","centerY":0,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Components.GameSettingSliderUI.uiView);

        }

    }
}

module ui.lobbyUI.Items {
    export class GameHistoryItemUI extends View {
		public indexLabel:Laya.Label;
		public numberLabel:Laya.Label;
		public roomLabel:Laya.Label;
		public beniftLabel:Laya.Label;
		public endTimeLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":971,"height":40},"child":[{"type":"Label","props":{"y":0,"x":2,"width":76,"var":"indexLabel","valign":"middle","text":"1","name":"indexLabel","height":24,"fontSize":30,"color":"#9cc5d8","bold":true,"align":"center"}},{"type":"Label","props":{"y":2,"x":76,"width":300,"var":"numberLabel","valign":"middle","text":"18111510100053111","name":"numberLabel","height":24,"fontSize":30,"color":"#efe8cd","bold":true,"align":"center"}},{"type":"Label","props":{"y":4,"x":373,"width":126,"var":"roomLabel","valign":"top","text":"土豪房","name":"roomLabel","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#9cc5d8","bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":495,"width":150,"var":"beniftLabel","valign":"top","text":"-7250.00","name":"beniftLabel","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#df4218","bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":645,"width":320,"var":"endTimeLabel","valign":"top","text":"2018/11/15 18:29:48","name":"endTimeLabel","height":40,"fontSize":28,"font":"Microsoft YaHei","color":"#9cc5d8","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Items.GameHistoryItemUI.uiView);

        }

    }
}

module ui.lobbyUI.Panels {
    export class GameHistoryPanelUI extends Laya.UIPanel {
		public background:Laya.Image;
		public bgFrame:Laya.Image;
		public closeBtn:Laya.Image;
		public itemPanel:Laya.Panel;
		public container:Laya.Box;

        public static  uiView:any ={"type":"UIPanel","props":{"y":375,"x":667,"width":1334,"top":0,"right":0,"left":0,"height":750,"centerY":0,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"background","top":0,"skin":"lobbyRes/common/black_mask.png","sizeGrid":"2,2,2,2","right":0,"name":"background","mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Image","props":{"width":1031,"var":"bgFrame","skin":"lobbyRes/common/img_zhajinhua_dakuang.png","height":624,"centerY":10,"centerX":0},"child":[{"type":"Image","props":{"y":62,"x":971,"width":80,"var":"closeBtn","skin":"lobbyRes/common/img_zhajinhua_guanbi.png","name":"closeBtn","height":80,"gray":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":6,"x":444,"width":142,"skin":"lobbyRes/gameHistory/img_zhajinhua_zi_zhanji.png","name":"title","height":66}},{"type":"Image","props":{"y":110,"x":28,"width":973,"skin":"lobbyRes/gameHistory/history_title.png","sizeGrid":"60,10,20,10","name":"msgBar","height":477}},{"type":"Panel","props":{"x":516,"width":971,"var":"itemPanel","vScrollBarSkin":"lobbyRes/common/mask.png","top":184,"name":"itemPanel","height":400,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"container","staticCache":true,"cacheAs":"normal"}}]},{"type":"Label","props":{"y":591,"valign":"top","text":"显示当日最新10条游戏战绩","height":40,"fontSize":24,"font":"Microsoft YaHei","color":"#7b73b3","centerX":0,"bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Panels.GameHistoryPanelUI.uiView);

        }

    }
}

module ui.lobbyUI.Panels {
    export class GameRulePanelUI extends Laya.UIPanel {
		public bgFrame:Laya.Image;
		public closeBtn:Laya.Image;
		public checkGroupObj:Laya.Box;
		public content4:Laya.Image;
		public content1:Laya.Panel;
		public content2:Laya.Panel;
		public content3:Laya.Panel;

        public static  uiView:any ={"type":"UIPanel","props":{"y":375,"x":667,"width":1334,"top":0,"right":0,"left":0,"height":750,"centerY":0,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":0,"skin":"lobbyRes/common/black_mask.png","sizeGrid":"2,2,2,2","right":0,"name":"background","mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Image","props":{"width":1031,"var":"bgFrame","skin":"lobbyRes/common/img_zhajinhua_dakuang.png","name":"bg","height":624,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":63,"x":972,"width":80,"var":"closeBtn","skin":"lobbyRes/common/img_zhajinhua_guanbi.png","name":"closeBtn","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":108,"x":26,"width":973,"skin":"lobbyRes/gameRule/menu_bar.png","sizeGrid":"60,10,20,10","name":"menuBar","height":492}},{"type":"Image","props":{"y":4,"x":442,"skin":"lobbyRes/gameRule/img_sangong_zi_guize.png","name":"title"}},{"type":"Box","props":{"y":106,"x":-16,"var":"checkGroupObj"},"child":[{"type":"CheckBox","props":{"y":2,"x":42,"width":240,"stateNum":2,"skin":"lobbyRes/gameRule/menu1.png","name":"menu1"}},{"type":"CheckBox","props":{"y":2,"x":284,"stateNum":2,"skin":"lobbyRes/gameRule/menu2.png","scaleX":1.015,"name":"menu2"}},{"type":"CheckBox","props":{"y":2,"x":528,"stateNum":2,"skin":"lobbyRes/gameRule/menu3.png","scaleX":1.015,"name":"menu3"}},{"type":"CheckBox","props":{"y":2,"x":773,"stateNum":2,"skin":"lobbyRes/gameRule/menu4.png","scaleX":1.015,"name":"menu4"}}]},{"type":"Image","props":{"y":250,"x":263,"visible":false,"var":"content4","skin":"lobbyRes/gameRule/img_honghai_guize_women.png","name":"content4"}},{"type":"Panel","props":{"y":162,"x":29,"width":967,"var":"content1","vScrollBarSkin":"lobbyRes/common/mask.png","name":"content1","height":436},"child":[{"type":"Image","props":{"y":15,"x":28,"skin":"lobbyRes/gameRule/img_sb_fjlb-px.png"}}]},{"type":"Panel","props":{"y":162,"x":29,"width":967,"var":"content2","vScrollBarSkin":"lobbyRes/common/mask.png","name":"content2","height":425},"child":[{"type":"Image","props":{"y":5,"x":10,"width":930,"skin":"lobbyRes/gameRule/img_sb_fjlb-wf.png","height":1530}}]},{"type":"Panel","props":{"y":162,"x":39,"width":967,"visible":false,"var":"content3","vScrollBarSkin":"lobbyRes/common/mask.png","name":"content3","height":425},"child":[{"type":"Image","props":{"y":5,"x":3,"width":930,"visible":true,"skin":"lobbyRes/gameRule/img_sb_fjlb-js.png","height":699}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.lobbyUI.Panels.GameRulePanelUI.uiView);

        }

    }
}

module ui.lobbyUI.Panels {
    export class GameSettingPanelUI extends Laya.UIPanel {
		public background:Laya.Image;
		public bgFrame:Laya.Image;
		public closeBtn:Laya.Image;
		public musicSliverObj:ui.lobbyUI.Components.GameSettingSliderUI;
		public soundSliverObj:ui.lobbyUI.Components.GameSettingSliderUI;
		public tgMusic:Laya.CheckBox;
		public tgSound:Laya.CheckBox;

        public static  uiView:any ={"type":"UIPanel","props":{"top":0,"right":0,"left":0,"centerY":0,"centerX":0,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"background","top":0,"skin":"lobbyRes/common/black_mask.png","sizeGrid":"2,2,2,2","right":0,"name":"background","left":0,"bottom":0}},{"type":"Image","props":{"y":146,"x":292,"width":750,"var":"bgFrame","skin":"lobbyRes/common/img_zhajinhua_xiaokuang.png","height":470,"centerY":6,"centerX":0},"child":[{"type":"Image","props":{"y":52,"x":699,"width":75,"var":"closeBtn","top":14,"skin":"lobbyRes/common/img_zhajinhua_guanbi.png","right":14,"height":75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":300,"x":27,"skin":"lobbyRes/gameSetting/img_sangong_shezhi_yingliang.png","name":"soundIcon"}},{"type":"Image","props":{"y":312,"x":107,"skin":"lobbyRes/gameSetting/img_sangong_zi_yingxiao.png","name":"soundTip"}},{"type":"Image","props":{"y":160,"x":27,"skin":"lobbyRes/gameSetting/img_sangong_shezhi_yingyue.png","name":"musicIcon"}},{"type":"Image","props":{"y":172,"x":105,"skin":"lobbyRes/gameSetting/img_sangong_zi_yingyue.png","name":"musicTip"}},{"type":"GameSettingSlider","props":{"y":180,"x":246,"var":"musicSliverObj","runtime":"ui.lobbyUI.Components.GameSettingSliderUI"}},{"type":"GameSettingSlider","props":{"y":319,"x":245,"var":"soundSliverObj","runtime":"ui.lobbyUI.Components.GameSettingSliderUI"}},{"type":"CheckBox","props":{"y":172,"x":613,"var":"tgMusic","stateNum":2,"skin":"lobbyRes/gameSetting/switch_btn.png"}},{"type":"CheckBox","props":{"y":312,"x":613,"var":"tgSound","stateNum":2,"skin":"lobbyRes/gameSetting/switch_btn.png"}},{"type":"Image","props":{"y":-1,"x":303,"skin":"lobbyRes/gameSetting/img_sangong_zi_shezhi.png","name":"title","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.lobbyUI.Components.GameSettingSliderUI",ui.lobbyUI.Components.GameSettingSliderUI);

            super.createChildren();
            this.createView(ui.lobbyUI.Panels.GameSettingPanelUI.uiView);

        }

    }
}

module ui.lobbyUI.Panels {
    export class LobbyPanelUI extends Laya.UIPanel {
		public startAnim:Laya.FrameAnimation;
		public exitBtns:ui.lobbyUI.Boxs.ExitButtonUI;
		public playerInfoBoxObj:ui.lobbyUI.Boxs.MainPlayerInfoBoxUI;
		public supermodel:Laya.Box;
		public centerNode:Laya.Box;
		public logo:Laya.Image;
		public btnBarObj:ui.lobbyUI.Boxs.LobbyBtnBarBoxUI;
		public lobbyRoomBoxObj:ui.lobbyUI.Boxs.LobbyRoomBoxUI;
		public marqueeBoxObj:ui.commonUI.Boxs.MarqueeBoxUI;
		public versionLabel:Laya.Label;

        public static  uiView:any ={"type":"UIPanel","props":{"y":0,"width":1624,"height":750},"child":[{"type":"Image","props":{"visible":false,"skin":"lobbyRes/lobbyBG/img_sb_bg.png","name":"bg","mouseThrough":false,"mouseEnabled":true,"centerY":0,"centerX":0}},{"type":"ExitButton","props":{"y":22,"x":1404,"var":"exitBtns","top":19,"right":28,"runtime":"ui.lobbyUI.Boxs.ExitButtonUI"}},{"type":"MainPlayerInfoBox","props":{"x":-165,"var":"playerInfoBoxObj","runtime":"ui.lobbyUI.Boxs.MainPlayerInfoBoxUI"}},{"type":"Box","props":{"y":131,"x":122,"width":342,"var":"supermodel","height":677},"child":[{"type":"Image","props":{"y":-1,"x":47,"skin":"lobbyRes/lobbyBG/img_sb_hg2.png","alpha":1},"compId":101}]},{"type":"Box","props":{"width":1334,"var":"centerNode","mouseEnabled":true,"height":750,"centerY":3,"centerX":47},"child":[{"type":"Image","props":{"y":62,"x":615,"visible":true,"var":"logo","skin":"lobbyRes/lobbyPanel/img_sb_sb_dt5-0.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":104},{"type":"LobbyBtnBarBox","props":{"y":545,"x":317,"var":"btnBarObj","runtime":"ui.lobbyUI.Boxs.LobbyBtnBarBoxUI"}},{"type":"LobbyRoomBox","props":{"y":168,"x":367,"var":"lobbyRoomBoxObj","alpha":1,"runtime":"ui.lobbyUI.Boxs.LobbyRoomBoxUI"},"compId":102},{"type":"MarqueeBox","props":{"x":329,"var":"marqueeBoxObj","top":122,"runtime":"ui.commonUI.Boxs.MarqueeBoxUI"}}]},{"type":"Label","props":{"y":709,"x":172,"var":"versionLabel","text":"版本号:1.0.0.01","stroke":1,"fontSize":26,"font":"Microsoft YaHei","color":"#94b9d6","bold":true}}],"animations":[{"nodes":[{"target":104,"keyframes":{"y":[{"value":-77,"tweenMethod":"linearNone","tween":true,"target":104,"key":"y","index":0},{"value":10,"tweenMethod":"linearNone","tween":true,"target":104,"key":"y","index":15}],"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":104,"key":"visible","index":0}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":104,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":104,"key":"alpha","index":15}]}},{"target":101,"keyframes":{"x":[{"value":-150,"tweenMethod":"linearNone","tween":true,"target":101,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":101,"key":"x","index":15}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":101,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":101,"key":"alpha","index":15}]}},{"target":102,"keyframes":{"x":[{"value":517,"tweenMethod":"linearNone","tween":true,"target":102,"key":"x","index":0},{"value":367,"tweenMethod":"linearNone","tween":true,"target":102,"key":"x","index":15}],"alpha":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":102,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":102,"key":"alpha","index":15}]}}],"name":"startAnim","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.lobbyUI.Boxs.ExitButtonUI",ui.lobbyUI.Boxs.ExitButtonUI);
			View.regComponent("ui.lobbyUI.Boxs.MainPlayerInfoBoxUI",ui.lobbyUI.Boxs.MainPlayerInfoBoxUI);
			View.regComponent("ui.lobbyUI.Boxs.LobbyBtnBarBoxUI",ui.lobbyUI.Boxs.LobbyBtnBarBoxUI);
			View.regComponent("ui.lobbyUI.Boxs.LobbyRoomBoxUI",ui.lobbyUI.Boxs.LobbyRoomBoxUI);
			View.regComponent("ui.commonUI.Boxs.MarqueeBoxUI",ui.commonUI.Boxs.MarqueeBoxUI);

            super.createChildren();
            this.createView(ui.lobbyUI.Panels.LobbyPanelUI.uiView);

        }

    }
}

module ui.lobbyUI.Panels {
    export class MatchPanelUI extends Laya.UIPanel {
		public bgMask:Laya.Image;

        public static  uiView:any ={"type":"UIPanel","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"var":"bgMask","top":0,"skin":"commonRes/common/black_mask.png","right":0,"mouseThrough":false,"mouseEnabled":true,"left":0,"bottom":0}},{"type":"Box","props":{"width":1,"height":1,"centerY":0,"centerX":0},"child":[{"type":"SkeletonPlayer","props":{"y":2,"x":2,"url":"lobbyRes/anim/zzpp.sk"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.lobbyUI.Panels.MatchPanelUI.uiView);

        }

    }
}

module ui.test {
    export class TestPageUI extends View {
		public btn:Laya.Button;
		public clip:Laya.Clip;
		public combobox:Laya.ComboBox;
		public tab:Laya.Tab;
		public list:Laya.List;
		public btn2:Laya.Button;
		public check:Laya.CheckBox;
		public radio:Laya.RadioGroup;
		public box:Laya.Box;

        public static  uiView:any ={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.test.TestPageUI.uiView);

        }

    }
}
