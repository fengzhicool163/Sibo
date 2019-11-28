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
    var _a;
    var AssetConfigBase = game.asset.AssetConfigBase;
    var SoundManager = /** @class */ (function (_super) {
        __extends(SoundManager, _super);
        function SoundManager() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 玩家准备（每一个玩家都播）
         */
        SoundManager.PlayReady = function () {
            this.PlaySound(this.Sounds[0]);
        };
        /**
         * 出一个筹码
         */
        SoundManager.PlayChipOne = function () {
            this.PlaySound(this.Sounds[2]);
        };
        /**
         * 出多个筹码
         */
        SoundManager.PlayChipMore = function () {
            this.PlaySoundByFunc(this.Sounds[3]);
        };
        SoundManager.PlaySoundByFunc = function (soundName) {
            if (this.isPlayEffect != 1)
                return;
            console.log("SoundManager PlaySoundByFunc=============>", this.isPlayMore);
            if (!this.isPlayMore) {
                this.isPlayMore = true;
                Laya.SoundManager.playSound(soundName, 1, Laya.Handler.create(this, this.playCompletes, null, false));
                console.log("SoundManager PlaySoundByFunc  inside=============>", this.isPlayMore);
            }
        };
        SoundManager.playCompletes = function () {
            console.log("SoundManager playCOmpletes=============>");
            this.isPlayMore = false;
            // Laya.timer.once(2000,this , ()=>{
            // })
        };
        /** 开始下注 */
        SoundManager.PlayStartBet = function () {
            this.PlaySound(this.Sounds[5]);
        };
        /**
         * 开始下注特效音
         */
        SoundManager.PlayStarBetEffect = function () {
            this.PlaySound(this.Sounds[11]);
        };
        /**停止下注 */
        SoundManager.PlayStopBet = function () {
            this.PlaySound(this.Sounds[6]);
        };
        /**
         * 停止下注特效音
         */
        SoundManager.PlayStopBetEffect = function () {
            this.PlaySound(this.Sounds[12]);
        };
        /** 开骰 */
        SoundManager.PlayOpen = function () {
            this.PlaySound(this.Sounds[7]);
        };
        /** 结算亮牌 */
        SoundManager.PlaySettlementShowCard = function () {
            this.PlaySound(this.Sounds[9]);
        };
        /**
         * 主玩家赢了
         */
        SoundManager.PlayWin = function () {
            this.PlaySound(this.Sounds[9]);
        };
        /**
         * 倒计时滴滴声
         */
        SoundManager.PlayDi = function () {
            this.PlaySound(this.Sounds[10]);
        };
        /**
         * 倒计时滴滴声
         */
        SoundManager.StopDi = function () {
            this.StopSound(this.Sounds[10]);
        };
        /** 播放摇骰子声音 */
        SoundManager.PlayYaoSai = function () {
            this.PlaySound(this.Sounds[4]);
        };
        /**  停止摇骰子声音 */
        SoundManager.StopYaoSai = function () {
            this.StopSound(this.Sounds[4]);
        };
        /** 飞金币 */
        SoundManager.PlayCoin = function () {
            this.PlaySound(this.Sounds[8]);
        };
        /**
         * 玩家说话
         */
        SoundManager.PlayerTalk = function (avatar, talkType) {
            var talkUrl = this.talkUrlMap[talkType];
            if (!talkUrl)
                return;
            var avatarInt = parseFloat(avatar);
            var sex = avatarInt > 6 ? "male/" : "female/";
            var url = AssetConfigBase.GameAssetsDir + "/audios/" + sex + talkUrl;
            if (this.isPlayEffect != 1)
                return;
            Laya.SoundManager.playSound(url);
        };
        /** 报骰子点数 */
        SoundManager.PlaySiboNum = function (num) {
            this.PlaySound(this.SiboNumMap[num]);
        };
        SoundManager.PlaySiboType = function (name) {
            if (name == "big") {
                this.PlaySound(this.SiboTypeMap[0]);
            }
            else if (name == "small") {
                this.PlaySound(this.SiboTypeMap[1]);
            }
            else {
                this.PlaySound(this.SiboTypeMap[2]);
            }
        };
        SoundManager.PlayDianShu = function (num) {
            this.PlaySound(this.SiboDianShuMap[num]);
        };
        SoundManager.isPlayMore = false;
        /** 游戏音效资源 */
        SoundManager.Sounds = [
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_ready.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_send_card.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_one_chips.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_multiple_chips.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_shake.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_start_bet.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_stop_bet.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_open.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_coin.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_win.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_reciprocal.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_begin_bet.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_stop_bet.mp3",
        ];
        SoundManager.talkUrlMap = (_a = {},
            _a[gameenum.GamePlayerTalk.GZYZ] = "vox_all_in.mp3",
            _a[gameenum.GamePlayerTalk.AddBet] = "vox_annotation.mp3",
            _a[gameenum.GamePlayerTalk.GiveUp] = "vox_discard_card.mp3",
            _a[gameenum.GamePlayerTalk.Call] = "vox_fllow.mp3",
            _a[gameenum.GamePlayerTalk.Lose] = "vox_lose.mp3",
            _a[gameenum.GamePlayerTalk.Compared] = "vox_ratio_card.mp3",
            _a[gameenum.GamePlayerTalk.LookingCard] = "vox_watch_card.mp3",
            _a[gameenum.GamePlayerTalk.Win] = "vox_win.mp3",
            _a);
        SoundManager.SiboNumMap = [
            "",
            AssetConfigBase.GameAssetsDir + "/audios/game/1.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/2.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/3.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/4.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/5.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/6.mp3",
        ];
        SoundManager.SiboTypeMap = [
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_big.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_small.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_Leopard.mp3",
        ];
        SoundManager.SiboDianShuMap = [
            "",
            "",
            "",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_sandian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_sidian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_wudian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_liudian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_qidian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_badian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_jiudian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_shidian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_shiyidian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_shierdian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_shisandian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_shisidian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_shiwudian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_shiliudian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_shiqidian.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_shibadian.mp3",
        ];
        return SoundManager;
    }(lobby.SoundManager));
    game.SoundManager = SoundManager;
})(game || (game = {}));
//# sourceMappingURL=SoundManager.js.map