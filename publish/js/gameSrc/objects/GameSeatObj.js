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
        /** 游戏座位映射对象 */
        var GameSeatObj = /** @class */ (function (_super) {
            __extends(GameSeatObj, _super);
            function GameSeatObj() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /** 服务器座位与本地座位映射 */
                _this.severLocalMap = {};
                /** 本地座位与服务器座位映射 */
                _this.localSeverMap = {};
                return _this;
            }
            GameSeatObj.prototype.resetObj = function () {
                this.severLocalMap = null;
                this.localSeverMap = null;
            };
            GameSeatObj.prototype.destroy = function () {
                this.resetObj();
            };
            /** 初始化座位映射数据 */
            GameSeatObj.prototype.setData = function (data) {
                //
                this.severLocalMap = {};
                this.localSeverMap = {};
                //
                var success = false;
                var playerCount = 0;
                //求出服务器对应本地的起始座位
                var startSeverSit = 0;
                //获取自身ID
                var myUserId = UserInfoManger.UserId;
                for (var severSit = 0; severSit < data.seats.length; ++severSit) {
                    var userId = data.seats[severSit];
                    if (userId != null) {
                        ++playerCount;
                    }
                    if (userId == myUserId) {
                        startSeverSit = severSit; //求出主玩家服务器座位
                        success = true;
                    }
                }
                //
                if (playerCount != data.players.length) {
                    return false;
                }
                //初始化本地座位与服务器座位映射
                for (var localSit = 0; localSit < 5; ++localSit) {
                    this.severLocalMap[startSeverSit] = localSit;
                    this.localSeverMap[localSit] = startSeverSit;
                    ++startSeverSit;
                    if (startSeverSit >= 5) {
                        startSeverSit = 0;
                    }
                }
                //初始化座位成功与否
                return success;
            };
            return GameSeatObj;
        }(objs.GameObject));
        objs.GameSeatObj = GameSeatObj;
    })(objs = game.objs || (game.objs = {}));
})(game || (game = {}));
//# sourceMappingURL=GameSeatObj.js.map