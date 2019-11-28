

module game.objs {

    import GameStateType = gameenum.GameStateType;

    /** 游戏房间对象 */
    export class GameRoomObj extends GameObject {
        
        //
        public isInit = false;
        /** 游戏状态 
            CONFIRM,//新建确认状态
            PLAYING,//游戏中
            OVER;//游戏结束
        */
        public gameState: GameStateType;
        /** 最小准入 eg 100*/
        public minEntry: number;

        /** 当前牌局号 */
        private _curRoundUuid : string;
        /** 当前下注轮数 eg 0 */
        public curRound: number;
        /** 当前最大轮数 eg 19 */
        public maxRound: number;
        /** 当前牌局总下注数 eg 0*/
        public totalBetScore: number;

        /** 房间名称 eg "进阶房"*/
        public roomName: string;
        /** 桌号 eg "193" */
        public tableNo: string;
        // 房间id
        public roomId:string;
        /** 房间底注 eg 5 */
        public minBet: number;
        /** 房间最大下注数 eg 50 当前废弃 */
        public maxBet: number;

        /** 当前牌局最后一次下注基础数 eg 0*/
        public lastBetScore: number;
        public remainingTime:number;
        // 赔率数据
        public oddsInfo:any;
        //房间数据
        public roomInfo:any;
        // 当局房间状态
        public state:number;
        /** 玩家最大思考时间 eg 20*/
        public maxThinkTime : number;

        /** 玩家座位Obj */
        private gameSeatObj : GameSeatObj;
        /**
         * 游戏状态
         */
        public roundInfo:any;
        // 当前下注区的押注金额
        public totalBets:any;
        // 最近100局记录
        public winInfo:any;
        // 桌子名
        public tableName:string;
        // 投注额数据
        public chipRange:any;
        // 开奖数据
        public openResult:any;
        public playerList:any;
        /**  重复投区域 */
        public reBetArea:any;
        public fowardRebetArea:any;
        /** 重置玩家数据 */
        public resetObj() {
            //
            this.isInit = false;
            //
            this.gameState = null;
            this.minEntry = null;
            //
            this._curRoundUuid = null;
            this.curRound = null;
            this.maxRound = null;
            this.totalBetScore = 0;
            //
            this.oddsInfo = null;
            this.roomInfo = null;
            this.roomName = null;
            this.tableNo = null;
            this.minBet = null;
            this.maxBet = null;
            //
            this.lastBetScore = null;
            this.remainingTime = 0;
            //
            this.roundInfo = {};
            this.maxThinkTime = null;
            //
            //this.gameSeatObj.resetObj();
            this.state = 0;
            this.totalBets = null;
            this.winInfo = [];
            this.tableName = "";
            this.chipRange = null;
            this.roomId = null;
            this.openResult = [];
            this.playerList = [];
            this.reBetArea = [];
            this.fowardRebetArea = [];
        }

        public destroy() {
            this.resetObj();
        }

       
        constructor(){
            super();
            this.gameSeatObj = new GameSeatObj();
            this.resetObj();
        }

        /** 获取筹码列表 */
        protected getBetList( betString : string ){
            var betStrs = betString.split(",");
            var betList : number[] = [];
            for (let index = 0; index < betStrs.length; ++index) {
				const betStr = betStrs[index];
				var betNum = parseFloat(betStr);
				betList.push(betNum);
            }
            return betList;
        }
        /**************************************************************** 玩家数据本地整理 ****************************************************************/
        public set curRoundUuid( value : string ){
            this._curRoundUuid =  value;
        }
        /** 当前牌局号 */
        public get curRoundUuid(){
            this._curRoundUuid = !this._curRoundUuid ? "" : this._curRoundUuid;
            return this._curRoundUuid;
        }
     
        /**
        "gameId": "10",
		"roomState": "NORMAL",
		"commissionRate": 0.03,
		"maxBet": 40.0,
		"minEntry": 0.6,
		"alisa": "炸金花",
		"minBet": 0.01,
		"maxSeat": 5,
		"minLookRound": 1,
		"maxJackpot": 20000,
		"minCompareRound": 1,
		"maxThinkTime": 20,
		"minStartPlayerNO": 2,
		"roomId": "100",
		"roomName": "新手房",
		"maxRound": 19,
		"gameName": "炸金花",
		"minJackpot": 200,
		"prepareTime": 5,
		"dark": "0.02,0.03,0.04,0.05",
		"brights": "0.04,0.06,0.08,0.1",
		"lookCardMultiple": 2,
		"brand": "106"
         * @param data 服务器房间配置数据
         */
        public setData( data : any ){
            //if(!this.gameSeatObj.setData(data)) return false;
            //
            this.oddsInfo = data.oddsInfo;
            this.roomInfo = data.roomInfo;

            //TableRoundInfo 
            this.curRoundUuid = data.roundInfo.roundNo;
            this.curRound = data.roundInfo.round;
          
            //Info Box
            this.roomName = data.roomInfo.roomName;
            this.tableNo = data.roomInfo.tableId;
            this.tableName = data.roomInfo.tableName;
            //this.minBet = config.minBet;
            //this.maxBet = this.brights[this.brights.length - 1];
        
           // this.maxThinkTime = config.maxThinkTime;  
            //
            this.isInit = true;
            this.remainingTime = data.roundInfo.remainingTime;
            this.state = data.roundInfo.state;
            this.winInfo = data.winInfo;
            this.chipRange = data.roomInfo.chipRange;
            this.roomId = data.roomInfo.roomId;
            this.playerList = data.sPlayers;
            this.maxBet = data.roomInfo.maxBet;
            this.roundInfo = data.roundInfo;
             this.reBetArea = [];
            this.fowardRebetArea = [];
            //
            return true;
        }  

        public addTotalBetScore(score:number){
            this.totalBetScore = this.totalBetScore + score;
        }

        public getRemainingTime():any{
            return this.remainingTime;
        }

        public getGameState():any{
            return this.state;
        }
        public getChipRange():any{
            return this.chipRange;
        }

        public getRoomId(){
            return this.roomId;
        }

        public getTableId(){
            return this.tableNo;
        }

        public setLastBetScore(v:number){
            this.lastBetScore = v;
        }

        public getLastBetScore():number{
            return this.lastBetScore;
        }


        //设置玩家列表数据
        public setPlayerList(data:any){
            this.playerList = [];
            this.playerList = data;
        }

        public getPlayerList():any{
            return this.playerList;
        }

        // 开奖数据
        public setOpenResult(data:any){
            this.openResult = [];
            this.openResult = data;
        }

        // 获取开奖数据
        public getOpenResult():any{
            return this.openResult;
        }

        //根据字段获取开奖结果
        public getOpenResultByName(name:string):any{
            return this.openResult[name];
        }

        public getWinArea(name:string):any{
            var small = null;
            var big = null;
            if(this.openResult["bIGOrSmall"]== "small"){
                small = "small";
            }
            else if( this.openResult["bIGOrSmall"] == "big"){
                big = "big";
            }
          
            var obj = {"small":small , "big":big,"dianshuCode":this.openResult["dianshuCode"],"duiziCode":this.openResult["duiziCode"],
            "sanjunOne":this.openResult["sanjunOne"],"sanjunTwo":this.openResult["sanjunTwo"],"sanjunThree":this.openResult["sanjunThree"],
            "sanjunFour":this.openResult["sanjunFour"],"sanjunFives":this.openResult["sanjunFives"],"sanjunSix":this.openResult["sanjunSix"],
            "weitouCode":this.openResult["weitouCode"]};
           
            if(name == obj["dianshuCode"]){
                return name;
            }
            else if(name == obj["duiziCode"]){
                return name;
            }
            else if(name == obj["weitouCode"]){
                return name;
            }
            else{
                return obj[name];
            }
        }

        /** 获取下注区域的投注信息 */
        public getBetAreaMoney():any{
            return this.roundInfo["betMap"];
        }
        /**  获取当前下注区域的投注金额 */
        public getBetMoneyByName(name:string):any{
            return this.roundInfo["betMap"][name] || 0;
        }
        /** 设置当前下注区域的投注金额 */
        public setBetMoneyByName(name:string,value:any){
            this.roundInfo["betMap"][name] = value;
        }

        /** 清楚当前所有下注区域的投注金额 清零 */
        public clearBetMoney(){
            for(var key in this.roundInfo["betMap"]){
                this.roundInfo["betMap"][key] = 0;
            }
        }
        /** 获取当前下注区域的押注限额 */
        public getBetLimitByName(name:string):any{
           return this.roomInfo["areaMaxBetScores"][name];
        }
        
    }

}
