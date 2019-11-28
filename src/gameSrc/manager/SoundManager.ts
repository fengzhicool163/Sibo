
module game {

    import AssetConfigBase = game.asset.AssetConfigBase;

    export class SoundManager extends lobby.SoundManager {
        private static isPlayMore:boolean = false;
        /** 游戏音效资源 */
        public static readonly Sounds = [

            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_ready.mp3",                //0     玩家准备
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_send_card.mp3",            //1     发牌音效
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_one_chips.mp3",            //2     一个筹码飞
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_multiple_chips.mp3",       //3     多个筹码飞
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_shake.mp3",               //4     摇塞子
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_start_bet.mp3",           //5     开始下注
            AssetConfigBase.GameAssetsDir + "/audios/game/vox_stop_bet.mp3",            //6     停止下注
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_open.mp3",                //7     开骰
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_coin.mp3",                //8     飞金币
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_win.mp3",                  //9     主玩家赢了
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_reciprocal.mp3",                   //10     
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_begin_bet.mp3",               //11 开始下注的特效音
            AssetConfigBase.GameAssetsDir + "/audios/game/sfx_stop_bet.mp3",            //12 停止下注的特效音
    
         
        ];

        /**
         * 玩家准备（每一个玩家都播）
         */
        public static PlayReady(): void {
            this.PlaySound(this.Sounds[0]);
        }

       
        /**
         * 出一个筹码
         */
        public static PlayChipOne(): void {
            this.PlaySound(this.Sounds[2]);
        }

        /**
         * 出多个筹码
         */
        public static PlayChipMore(): void {
            this.PlaySoundByFunc(this.Sounds[3]);
        }

        public static PlaySoundByFunc(soundName:string){
            
             if (this.isPlayEffect != 1) return;
              console.log("SoundManager PlaySoundByFunc=============>" , this.isPlayMore);
             if(!this.isPlayMore){
                
                 this.isPlayMore = true;
                 Laya.SoundManager.playSound(soundName,1 , Laya.Handler.create(this , this.playCompletes,null , false));
                  console.log("SoundManager PlaySoundByFunc  inside=============>" , this.isPlayMore);
             }
           
        }

        public static playCompletes(){
            console.log("SoundManager playCOmpletes=============>")
            this.isPlayMore = false;
            // Laya.timer.once(2000,this , ()=>{
                 
            // })
           
        }
        /** 开始下注 */
        public static PlayStartBet() {
            this.PlaySound(this.Sounds[5]);
        }

        /**
         * 开始下注特效音
         */
        public static PlayStarBetEffect(){
            this.PlaySound(this.Sounds[11]);
        }
        /**停止下注 */
        public static PlayStopBet() {
            this.PlaySound(this.Sounds[6]);
        }

        /**
         * 停止下注特效音
         */
        public static PlayStopBetEffect(){
            this.PlaySound(this.Sounds[12]);
        }
     

        /** 开骰 */
        public static PlayOpen(){
            this.PlaySound(this.Sounds[7]);
        }
    

        /** 结算亮牌 */
        public static PlaySettlementShowCard() {
            this.PlaySound(this.Sounds[9]);
        }

     
        /**
         * 主玩家赢了
         */
        public static PlayWin(): void {
            this.PlaySound(this.Sounds[9]);
        }

        /**
         * 倒计时滴滴声
         */
        public static PlayDi(): void {
            this.PlaySound(this.Sounds[10]);
        }

        /**
         * 倒计时滴滴声
         */
        public static StopDi(): void {
            this.StopSound(this.Sounds[10]);
        }

        /** 播放摇骰子声音 */
        public static PlayYaoSai():void{
            this.PlaySound(this.Sounds[4]);
        }

        /**  停止摇骰子声音 */
        public static StopYaoSai():void{
            this.StopSound(this.Sounds[4]);
        }

        /** 飞金币 */
        public static PlayCoin(){
             this.PlaySound(this.Sounds[8]);
        }

        private static talkUrlMap = {
            [gameenum.GamePlayerTalk.GZYZ]: "vox_all_in.mp3",                //25     玩家孤注一掷说话
            [gameenum.GamePlayerTalk.AddBet]: "vox_annotation.mp3",            //26     玩家加注说话
            [gameenum.GamePlayerTalk.GiveUp]: "vox_discard_card.mp3",          //27     玩家弃牌说话
            [gameenum.GamePlayerTalk.Call]: "vox_fllow.mp3",                 //28     玩家跟注说话
            [gameenum.GamePlayerTalk.Lose]: "vox_lose.mp3",                  //29     玩家输牌说话
            [gameenum.GamePlayerTalk.Compared]: "vox_ratio_card.mp3",            //30     玩家比牌说话
            [gameenum.GamePlayerTalk.LookingCard]: "vox_watch_card.mp3",            //31     玩家看牌说话
            [gameenum.GamePlayerTalk.Win]: "vox_win.mp3",                   //32     玩家赢牌说话
        };

        /**
         * 玩家说话
         */
        public static PlayerTalk(avatar: string, talkType: gameenum.GamePlayerTalk) {
            var talkUrl = this.talkUrlMap[talkType];
            if (!talkUrl) return;
            var avatarInt = parseFloat(avatar);
            var sex = avatarInt > 6 ? "male/" : "female/";
            var url = AssetConfigBase.GameAssetsDir + "/audios/" + sex + talkUrl;
            if (this.isPlayEffect != 1) return;
            Laya.SoundManager.playSound(url);
        }

        private static readonly SiboNumMap = [
            "",
            AssetConfigBase.GameAssetsDir + "/audios/game/1.mp3",   
            AssetConfigBase.GameAssetsDir + "/audios/game/2.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/3.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/4.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/5.mp3",
            AssetConfigBase.GameAssetsDir + "/audios/game/6.mp3",
        ];

        /** 报骰子点数 */
        public static PlaySiboNum(num:number):void{
            this.PlaySound(this.SiboNumMap[num]);
        }

        private static readonly SiboTypeMap = [
             AssetConfigBase.GameAssetsDir + "/audios/game/vox_big.mp3",
             AssetConfigBase.GameAssetsDir + "/audios/game/vox_small.mp3",
             AssetConfigBase.GameAssetsDir + "/audios/game/vox_Leopard.mp3",
        ];

        public static  PlaySiboType(name:string):void{
            if(name == "big"){
                this.PlaySound(this.SiboTypeMap[0]);
            }
            else if(name == "small"){
                this.PlaySound(this.SiboTypeMap[1]);
            }
            else{
                this.PlaySound(this.SiboTypeMap[2]);
            }
        }

        private static readonly SiboDianShuMap = [
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

        public static PlayDianShu(num:number):void{
             this.PlaySound(this.SiboDianShuMap[num]);
        }
    }
}