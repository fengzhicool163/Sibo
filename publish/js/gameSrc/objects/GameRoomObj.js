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
    var objs;
    (function (objs) {
        /** 游戏房间对象 */
        var GameRoomObj = /** @class */ (function (_super) {
            __extends(GameRoomObj, _super);
            function GameRoomObj() {
                var _this = _super.call(this) || this;
                //
                _this.isInit = false;
                _this.gameSeatObj = new objs.GameSeatObj();
                _this.resetObj();
                return _this;
            }
            /** 重置玩家数据 */
            GameRoomObj.prototype.resetObj = function () {
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
            };
            GameRoomObj.prototype.destroy = function () {
                this.resetObj();
            };
            /** 获取筹码列表 */
            GameRoomObj.prototype.getBetList = function (betString) {
                var betStrs = betString.split(",");
                var betList = [];
                for (var index = 0; index < betStrs.length; ++index) {
                    var betStr = betStrs[index];
                    var betNum = parseFloat(betStr);
                    betList.push(betNum);
                }
                return betList;
            };
            Object.defineProperty(GameRoomObj.prototype, "curRoundUuid", {
                /** 当前牌局号 */
                get: function () {
                    this._curRoundUuid = !this._curRoundUuid ? "" : this._curRoundUuid;
                    return this._curRoundUuid;
                },
                /**************************************************************** 玩家数据本地整理 ****************************************************************/
                set: function (value) {
                    this._curRoundUuid = value;
                },
                enumerable: true,
                configurable: true
            });
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
            GameRoomObj.prototype.setData = function (data) {
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
            };
            GameRoomObj.prototype.addTotalBetScore = function (score) {
                this.totalBetScore = this.totalBetScore + score;
            };
            GameRoomObj.prototype.getRemainingTime = function () {
                return this.remainingTime;
            };
            GameRoomObj.prototype.getGameState = function () {
                return this.state;
            };
            GameRoomObj.prototype.getChipRange = function () {
                return this.chipRange;
            };
            GameRoomObj.prototype.getRoomId = function () {
                return this.roomId;
            };
            GameRoomObj.prototype.getTableId = function () {
                return this.tableNo;
            };
            GameRoomObj.prototype.setLastBetScore = function (v) {
                this.lastBetScore = v;
            };
            GameRoomObj.prototype.getLastBetScore = function () {
                return this.lastBetScore;
            };
            //设置玩家列表数据
            GameRoomObj.prototype.setPlayerList = function (data) {
                this.playerList = [];
                this.playerList = data;
            };
            GameRoomObj.prototype.getPlayerList = function () {
                return this.playerList;
            };
            // 开奖数据
            GameRoomObj.prototype.setOpenResult = function (data) {
                this.openResult = [];
                this.openResult = data;
            };
            // 获取开奖数据
            GameRoomObj.prototype.getOpenResult = function () {
                return this.openResult;
            };
            //根据字段获取开奖结果
            GameRoomObj.prototype.getOpenResultByName = function (name) {
                return this.openResult[name];
            };
            GameRoomObj.prototype.getWinArea = function (name) {
                var small = null;
                var big = null;
                if (this.openResult["bIGOrSmall"] == "small") {
                    small = "small";
                }
                else if (this.openResult["bIGOrSmall"] == "big") {
                    big = "big";
                }
                var obj = { "small": small, "big": big, "dianshuCode": this.openResult["dianshuCode"], "duiziCode": this.openResult["duiziCode"],
                    "sanjunOne": this.openResult["sanjunOne"], "sanjunTwo": this.openResult["sanjunTwo"], "sanjunThree": this.openResult["sanjunThree"],
                    "sanjunFour": this.openResult["sanjunFour"], "sanjunFives": this.openResult["sanjunFives"], "sanjunSix": this.openResult["sanjunSix"],
                    "weitouCode": this.openResult["weitouCode"] };
                if (name == obj["dianshuCode"]) {
                    return name;
                }
                else if (name == obj["duiziCode"]) {
                    return name;
                }
                else if (name == obj["weitouCode"]) {
                    return name;
                }
                else {
                    return obj[name];
                }
            };
            /** 获取下注区域的投注信息 */
            GameRoomObj.prototype.getBetAreaMoney = function () {
                return this.roundInfo["betMap"];
            };
            /**  获取当前下注区域的投注金额 */
            GameRoomObj.prototype.getBetMoneyByName = function (name) {
                return this.roundInfo["betMap"][name] || 0;
            };
            /** 设置当前下注区域的投注金额 */
            GameRoomObj.prototype.setBetMoneyByName = function (name, value) {
                this.roundInfo["betMap"][name] = value;
            };
            /** 清楚当前所有下注区域的投注金额 清零 */
            GameRoomObj.prototype.clearBetMoney = function () {
                for (var key in this.roundInfo["betMap"]) {
                    this.roundInfo["betMap"][key] = 0;
                }
            };
            /** 获取当前下注区域的押注限额 */
            GameRoomObj.prototype.getBetLimitByName = function (name) {
                return this.roomInfo["areaMaxBetScores"][name];
            };
            return GameRoomObj;
        }(objs.GameObject));
        objs.GameRoomObj = GameRoomObj;
    })(objs = game.objs || (game.objs = {}));
})(game || (game = {}));
//# sourceMappingURL=GameRoomObj.js.map