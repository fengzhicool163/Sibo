/**
* name
*/
var net;
(function (net) {
    var protocol;
    (function (protocol) {
        var GameResponse = /** @class */ (function () {
            function GameResponse() {
            }
            GameResponse.severCodeToStr = function (code) {
                var str = this.severCodeMap[code];
                return str;
            };
            //将4999的错误code转换为字符串
            GameResponse.codeToMessage = function (code) {
                var content = this.codeToMessageMap[code];
                return content;
            };
            /**大厅房间数据 5021*/
            GameResponse.RoomInfo = "34208"; //
            /**心跳 1*/
            GameResponse.PINGPONG = "1"; //
            /**房间快照 4000*/
            GameResponse.SANPSHOT = "4000"; //
            /**房间配置下来了 4102*/
            GameResponse.ROOMCONFIG = "4102"; //
            /**玩家准备 5000*/
            GameResponse.BEGIN_GAME = "5000"; //
            /**
             * 开局推送
             */
            GameResponse.GAME_START_INIT = "34201";
            /**
             * 开局推送 下注中 34202
             */
            GameResponse.GAME_START_BET = "34202";
            /**
             * 开局推送 停止下注 34203
             */
            GameResponse.GAME_END_BET = "34203";
            /**
             * 游戏结束时，推送开奖结果
             */
            GameResponse.GAME_END_RESULET = "34204";
            /**
             * 游戏结算
             */
            GameResponse.GAME_SETTLEMENT = "34207";
            /**某个玩家下注 5002*/
            GameResponse.BET = "5002"; //
            /**某个玩家进入 5008*/
            GameResponse.ENTER = "5008"; //
            /**某个玩家离开 5009*/
            GameResponse.EXIT = "5109"; //
            /**游戏结束 5010*/
            GameResponse.OVER = "5010"; //todo
            /**游戏开始，投注 34205*/
            GameResponse.BASE_BET = "34205"; //
            /** 游戏战绩 */
            GameResponse.GAME_REC = "3018";
            /**某个用户被踢出房间 5012*/
            GameResponse.FOOTOUT = "5012"; //
            /**服务器将会关闭连接 4999*/
            GameResponse.WILL_CLOSE = "4999"; //
            /**统一错误消息回复*/
            GameResponse.COMMON_ERROR = "6000"; //
            /**  游戏提醒消息 */
            GameResponse.GAME_TIPS = "34210";
            GameResponse.severCodeMap = {
                34208: "收到房间桌台信息更新",
                5000: "某个玩家准备",
                5001: "某个玩家换桌的信息",
                5007: "轮到某个玩家操作",
                34205: "某个玩家下注",
                34207: "结算结果返回",
                34204: "推送开奖结果",
                5005: "某个玩家比牌",
                5006: "某个玩家结算亮牌",
                5008: "某个玩家进入",
                5109: "某个玩家离开",
                5010: "游戏结束",
                5011: "游戏开始，玩家开始下底注",
                5012: "某个用户被踢出房间",
                5014: "倒计时",
                5016: "超时托管设置",
                4001: "牌值(玩家点击看牌后)",
                4000: "房间快照",
                4102: "房间配置下来了",
                4999: "服务器将会关闭连接",
                34210: "游戏提醒0",
                3018: "游戏战绩"
            };
            /************************************** 错误码 *******************************************/
            GameResponse.codeToMessageMap = {
                //child code
                4000: "您的余额不足，请前往游戏大厅充值",
                4001: "网络异常，请重新进入或者重新登陆",
                4002: "网络异常，请重新进入",
                4003: "长久未操作，自动退出房间",
                4004: "匹配不成功，请重新匹配",
                4005: "登录过期,请重新登录",
                4006: "您已离开房间",
                4007: "匹配不成功，请重新匹配",
                4008: "长久未操作，自动退出房间",
                4009: "您的账号在异地登录，请注意您的账号安全",
                4010: "用户不存在，请重新尝试",
                4011: "账号异常已被封禁，有问题请联系客服",
                4012: "匹配不成功，请重新匹配",
                4013: "为了更好的体验，游戏停机维护中，给您带来不便敬请谅解",
                4014: "网络异常，请重新进入",
                4015: "您的账号在异地登录，请注意您的账号安全",
            };
            return GameResponse;
        }());
        protocol.GameResponse = GameResponse;
    })(protocol = net.protocol || (net.protocol = {}));
})(net || (net = {}));
//# sourceMappingURL=GameResponse.js.map