

module game.objs {

    import GamePlayerStage = gameenum.GamePlayerStage;

    import PlayerAllowActions = gameenum.PlayerAllowActions;

    /** 游戏玩家对象 */
    export class PlayerObject extends GameObject {


        /** 服务器玩家阶段与本地玩家状态映射 */
        private static playerSeverStageMap = {
            JOIN: GamePlayerStage.UnReady,		//(0,"加入"),
            START: GamePlayerStage.Ready,		//(1,"开始"),
            THINKING: GamePlayerStage.Playing,	//(2,"思考"),
            WAIT: GamePlayerStage.Wating,		//(3,"等待"),
            LOOK: GamePlayerStage.Wating,	    //(4,"看牌"),
            FOLD: GamePlayerStage.Fold,	        //(5,"弃牌"),
            OVER: GamePlayerStage.ComparedLose,	//(6,"比输"),
            WINNER: GamePlayerStage.Wating,		//(7,"赢家"),
            CHANGE: GamePlayerStage.None,		//(8,"换桌"),
            LEFT: GamePlayerStage.None,			//(9,"离开"),
            BYSTANDER: GamePlayerStage.Bystander,//(10,"旁观");
        }

        /********** 玩家倒计时数据 ****************/
        /** 收到消息时间 */
        private _msgTime: number = 0;
        /** 玩家本次操作剩余倒计时 eg 20 */
        private _remainingTime: number = 0;

        /************ StateBox  数据 **************/
        /** 玩家ID eg "201814303"*/
        public userId: string;
        /** 玩家名称 eg "yan****4418"*/
        public username: string;
        /** 玩家头像序号 eg "7" */
        public avatar: string;

        /************ InfoBox  数据 **************/
        /** 玩家余额  eg "638"*/
        public balanceScore: number;
        /** 玩家总下注数 eg 0 */
        public totalBetScore: number;
        /** 玩家本次下注数值 */
        public addBetNum: number;
        /**  玩家盈利数据  当局的盈利*/
        public lastBonusScore:number;
        /**   玩家的 */
        /**
         * 排名数据
         */
        public rank:number;
      

        /******************* 玩家操作状态 ****************/
        /** 玩家本地游戏阶段*/
        private _localStage: GamePlayerStage;

        /** 玩家阶段可执行操作Map*/
        public allowActionsMap: { [key: string]: boolean };
      
        /** 玩家是否已经结束本次游戏了 */
        public isOverGame: boolean;
     

        /** 重置玩家数据 */
        public resetObj() {
            this._msgTime = 0;
            this._remainingTime = 0;
            //
            this.userId = null;
            this.username = null;
            this.avatar = null;
            //
            this.balanceScore = 0;
            this.totalBetScore = 0;
            this.addBetNum = 0;
            //
        
        
            this._localStage = null;
            //
            this.allowActionsMap = {};
        
            this.isOverGame = false;
            this.lastBonusScore = 0;
            this.rank = 0;
        
        }

        public destroy() {
            this.resetObj();
        }

        constructor() {
            super();
            this.resetObj();
        }

        /****************************************************** 玩家可操作性数据整理 ****************************************************************/
        public updatePlayerAllowActionsMap() {
            //只有主玩家才计算
            if (this.userId != UserInfoManger.UserId) return;
            //重置按钮状态
          
        }

        /*************************************************** 玩家数据本地整理 ****************************************************************/
     
    
      
        /** 获取玩家倒计时时间 */
        public get remainingTime(): number {
            var remainingTime = this.ctrl.getRealRemainingTime(this._msgTime, this._remainingTime);
            this._remainingTime = Math.max(remainingTime, 0);
            return this._remainingTime;
        }
        /** 玩家本地阶段 */
        public set localStage(value: GamePlayerStage) {
            this._localStage = value;
            this.updatePlayerAllowActionsMap();
        }
        /** 玩家本地阶段 */
        public get localStage() {
            return this._localStage;
        }

        public get msgTime() {
            return this._msgTime;
        }
        /** 设置玩家倒计时数据 */
        public setRemainingTime(msgTime: number, remainingTime: number) {
            //
            this._msgTime = msgTime;
            this._remainingTime = remainingTime || 0;
        }

        /**
        "balanceScore": "3509.5100",
        "isLooked": true,
        "allowActions": ["BET", "ABANDON", "COMPARE"],
        "cards": [26, 48, 31],
        "cardType": "单张",
        "actionRecords": [],
        "lastBet": 0.0,
        "avatar": "8",
        "totalBetScore": 0.02,
        "isOffLine": false,
        "userId": "34808101",
        "remainingTime": 12,
        "realPlayer": false,
        "seatIndex": 0,
        "isAddBet": false,
        "historySeatIndex": [],
        "isLookedBeforeBet": false,
        "state": "THINKING",
        "isOverHost": true,
        "username": "cry****l61"
         * @param data 服务器玩家数据
         */
        public setData(data: any) {
            //
            //this._msgTime = data.time;
           // this._remainingTime = (data.remainingTime || 0);
            //
            this.userId = data.userId;
            this.username = data.username;
            this.avatar = data.avatar;
            //
            var balanceScore: any = data.balanceScore
            this.balanceScore = parseFloat(balanceScore);
            this.lastBonusScore = parseFloat(data.lastBonusScore);
            //this.totalBetScore = data.totalBetScore;
           // this.addBetNum = 0;
            //
          
        
        }


        public setBalance(num:number){
            this.balanceScore = num;
        }

        public setRank(num:number){
            this.rank = num;
        }

        public getRank():number{
            return this.rank;
        }
        
        public setLastBonusScore(v:number){
            this.lastBonusScore = v;
        }
        public getLastBonusScore():number{
            return this.lastBonusScore;
        }
    }

}
