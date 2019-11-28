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
/**
* name
*/
var ctrl;
(function (ctrl) {
    /** 游戏model层处理解析转换服务器数据 并保存生成的 本地对象 */
    var GameRoomModel = /** @class */ (function (_super) {
        __extends(GameRoomModel, _super);
        function GameRoomModel() {
            var _this = _super.call(this) || this;
            /** 内部广播消息定义 */
            _this.Event = {
                /** 主玩家操作界面更新 */
                PlayerCtrlBtnUpdate: "PlayerCtrlBtnUpdate",
                /** 网络延时刷新 */
                NetDelayUpdate: "NetDelayUpdate",
                //倒计时结束后自己的下注按钮置灰
                TimeEndUpDate: "TimeEndUpdate",
                /** 如果选择跟到底，刚好轮到自己出牌，需要发送事件，自动跟注*/
                AUTOFOLLOW: "autoFollow",
                /** 孤注一掷*/
                FIGHTBET: "fightbet",
            };
            _this.init();
            return _this;
        }
        Object.defineProperty(GameRoomModel.prototype, "playerCount", {
            /** 牌桌玩家数量 */
            get: function () {
                return this._playerCount;
            },
            enumerable: true,
            configurable: true
        });
        /** 清空管理器数据 */
        GameRoomModel.prototype.clearData = function () {
            this.roomObj.resetObj();
            // for (const key in this.userIDPlayerObjMap) {
            // 	const playerObj = this.userIDPlayerObjMap[key];
            // 	this.playerObjPool.recover(playerObj);
            // }
            this.playerObj.destroy();
        };
        //
        GameRoomModel.prototype.destroy = function () {
            this.roomObj.destroy();
            this.roomObj = null;
            this.playerObjPool = null;
            this.playerObj.destroy();
            this.playerObj.destroy();
        };
        //
        GameRoomModel.prototype.init = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //
            this.gameNet = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
            //玩家配置对象
            //玩家配置对象
            this.roomObj = new game.objs.GameRoomObj();
            this.playerObj = new game.objs.PlayerObject();
        };
        Object.defineProperty(GameRoomModel.prototype, "playerEnough", {
            /** 玩家是否足够开局 */
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameRoomModel.prototype, "lastBetScore", {
            /** 当前牌桌最后一次下注数目 */
            get: function () {
                var betBase = this.roomObj.lastBetScore == 0 ? this.roomObj.minBet : this.roomObj.lastBetScore;
                return betBase;
            },
            enumerable: true,
            configurable: true
        });
        /** 获取主玩家信息 */
        GameRoomModel.prototype.getMainPlayerObj = function () {
            return this.playerObj;
        };
        /** 计算真实剩余时间 */
        GameRoomModel.prototype.getRealRemainingTime = function (time, remainingTime) {
            //计算倒计时
            var severTime = this.gameNet.getCurSeverTime();
            var overtTime = Math.max(0, severTime - time);
            var remainingTime = Math.max(0, remainingTime - overtTime / 1000);
            return remainingTime;
        };
        return GameRoomModel;
    }(ctrl.UICtrl));
    ctrl.GameRoomModel = GameRoomModel;
})(ctrl || (ctrl = {}));
//# sourceMappingURL=GameRoomModel.js.map