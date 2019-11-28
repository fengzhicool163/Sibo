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
        var GamePlayerStage = gameenum.GamePlayerStage;
        /** 游戏玩家对象 */
        var PlayerObject = /** @class */ (function (_super) {
            __extends(PlayerObject, _super);
            function PlayerObject() {
                var _this = _super.call(this) || this;
                /********** 玩家倒计时数据 ****************/
                /** 收到消息时间 */
                _this._msgTime = 0;
                /** 玩家本次操作剩余倒计时 eg 20 */
                _this._remainingTime = 0;
                _this.resetObj();
                return _this;
            }
            /** 重置玩家数据 */
            PlayerObject.prototype.resetObj = function () {
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
            };
            PlayerObject.prototype.destroy = function () {
                this.resetObj();
            };
            /****************************************************** 玩家可操作性数据整理 ****************************************************************/
            PlayerObject.prototype.updatePlayerAllowActionsMap = function () {
                //只有主玩家才计算
                if (this.userId != UserInfoManger.UserId)
                    return;
                //重置按钮状态
            };
            Object.defineProperty(PlayerObject.prototype, "remainingTime", {
                /*************************************************** 玩家数据本地整理 ****************************************************************/
                /** 获取玩家倒计时时间 */
                get: function () {
                    var remainingTime = this.ctrl.getRealRemainingTime(this._msgTime, this._remainingTime);
                    this._remainingTime = Math.max(remainingTime, 0);
                    return this._remainingTime;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PlayerObject.prototype, "localStage", {
                /** 玩家本地阶段 */
                get: function () {
                    return this._localStage;
                },
                /** 玩家本地阶段 */
                set: function (value) {
                    this._localStage = value;
                    this.updatePlayerAllowActionsMap();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PlayerObject.prototype, "msgTime", {
                get: function () {
                    return this._msgTime;
                },
                enumerable: true,
                configurable: true
            });
            /** 设置玩家倒计时数据 */
            PlayerObject.prototype.setRemainingTime = function (msgTime, remainingTime) {
                //
                this._msgTime = msgTime;
                this._remainingTime = remainingTime || 0;
            };
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
            PlayerObject.prototype.setData = function (data) {
                //
                //this._msgTime = data.time;
                // this._remainingTime = (data.remainingTime || 0);
                //
                this.userId = data.userId;
                this.username = data.username;
                this.avatar = data.avatar;
                //
                var balanceScore = data.balanceScore;
                this.balanceScore = parseFloat(balanceScore);
                this.lastBonusScore = parseFloat(data.lastBonusScore);
                //this.totalBetScore = data.totalBetScore;
                // this.addBetNum = 0;
                //
            };
            PlayerObject.prototype.setBalance = function (num) {
                this.balanceScore = num;
            };
            PlayerObject.prototype.setRank = function (num) {
                this.rank = num;
            };
            PlayerObject.prototype.getRank = function () {
                return this.rank;
            };
            PlayerObject.prototype.setLastBonusScore = function (v) {
                this.lastBonusScore = v;
            };
            PlayerObject.prototype.getLastBonusScore = function () {
                return this.lastBonusScore;
            };
            /** 服务器玩家阶段与本地玩家状态映射 */
            PlayerObject.playerSeverStageMap = {
                JOIN: GamePlayerStage.UnReady,
                START: GamePlayerStage.Ready,
                THINKING: GamePlayerStage.Playing,
                WAIT: GamePlayerStage.Wating,
                LOOK: GamePlayerStage.Wating,
                FOLD: GamePlayerStage.Fold,
                OVER: GamePlayerStage.ComparedLose,
                WINNER: GamePlayerStage.Wating,
                CHANGE: GamePlayerStage.None,
                LEFT: GamePlayerStage.None,
                BYSTANDER: GamePlayerStage.Bystander,
            };
            return PlayerObject;
        }(objs.GameObject));
        objs.PlayerObject = PlayerObject;
    })(objs = game.objs || (game.objs = {}));
})(game || (game = {}));
//# sourceMappingURL=PlayerObject.js.map