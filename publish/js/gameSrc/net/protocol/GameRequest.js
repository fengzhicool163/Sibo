/**
* name
*/
var net;
(function (net) {
    var protocol;
    (function (protocol) {
        var GameRequest = /** @class */ (function () {
            function GameRequest() {
            }
            GameRequest.clientCodeToStr = function (code) {
                var str = this.clientCodeMap[code];
                str = str || "empty";
                return str;
            };
            /**
             * @param msg 发送消息
             */
            GameRequest.sendMsg = function (data) {
                //统一添加userId
                var userId = UserInfoManger.UserId;
                data.userId = userId;
                var date = GameRequest.getNetManager().getCurSeverTime();
                data.timestamp = date;
                data.ctime = date;
                data.sn = "vdfvccvxdv";
                //data.brand = "";
                //发送消息
                var gameNet = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
                gameNet.sendMessage(data);
            };
            GameRequest.getNetManager = function () {
                var gameNet = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
                return gameNet;
            };
            /** 服务器延时心跳 */
            GameRequest.reqPingPong = function () {
                var reqData = {
                    code: 1
                };
                this.sendMsg(reqData);
            };
            /**
             * 更换桌子
             */
            GameRequest.reqChangeTable = function () {
                var reqData = {
                    code: 1002
                };
                this.sendMsg(reqData);
            };
            /**
             * 下注
             * @param betValue 下注值
             * @param baseBet 底注
             */
            GameRequest.reqBet = function (area, baseBet) {
                var gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                var tId = gameCtrl.roomObj.getTableId();
                var rId = gameCtrl.roomObj.getRoomId();
                var reqData = {
                    code: 34103,
                    betInfo: [{ "area": area, "bet": baseBet }],
                    roomId: rId,
                    tableId: tId
                };
                this.sendMsg(reqData);
            };
            /**
             * 重复投注
             */
            GameRequest.reqReBet = function (info) {
                var gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                var tId = gameCtrl.roomObj.getTableId();
                var rId = gameCtrl.roomObj.getRoomId();
                var reqData = {
                    code: 34103,
                    betInfo: info,
                    roomId: rId,
                    tableId: tId
                };
                this.sendMsg(reqData);
            };
            /**
             * 离开(区别换桌) 34104
             */
            GameRequest.reqExitGame = function () {
                var reqData = {
                    code: 34104,
                    level: "exit"
                };
                this.sendMsg(reqData);
            };
            /**
             * 孤注一掷
             */
            GameRequest.reqLastFight = function () {
                var reqData = {
                    code: 1009
                };
                this.sendMsg(reqData);
            };
            /**
             * 超时托管
             * @param overHost
             */
            GameRequest.reqOverHost = function (overHost) {
                var reqData = {
                    code: 1011,
                    overHost: overHost,
                };
                this.sendMsg(reqData);
            };
            /**
             * 跟到底
             */
            GameRequest.reqAllFollow = function (betToEnd) {
                var reqData = {
                    code: 1012,
                    betToEnd: betToEnd,
                };
                this.sendMsg(reqData);
            };
            /**
             * 获取房间列表
             */
            GameRequest.reqRoomInfo = function () {
                var date = GameRequest.getNetManager().getCurSeverTime();
                var reqData = {
                    code: 1010,
                };
                this.sendMsg(reqData);
            };
            /**
             * 加入台桌
             */
            GameRequest.reqJoinRoom = function (rId, tId) {
                var reqData = {
                    code: 1111,
                    roomId: rId,
                    tableId: tId,
                };
                this.sendMsg(reqData);
            };
            /**
             * 请求结算结果 34105
             */
            GameRequest.reqResult = function (rId, room, tId) {
                var reqData = {
                    code: 34105,
                    roomId: room,
                    tableId: tId,
                    players: [UserInfoManger.UserId],
                    roundId: rId
                };
                this.sendMsg(reqData);
            };
            /**
             * 请求战绩
             */
            GameRequest.reqGameRec = function () {
                var data = "rec";
                var gameNet = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
                gameNet.sendData(data);
            };
            GameRequest.clientCodeMap = {
                1: "网络延时心跳",
                1001: "玩家请求准备",
                1002: "玩家请求换桌",
                1003: "玩家请求跟注",
                1008: "玩家请求离开",
                1010: "获取房间列表",
                1111: "请求加入台桌",
                34101: "请求加入台桌",
                34103: "请求下注",
                34105: "请求用户结算结果",
                5109: "请求离开"
            };
            return GameRequest;
        }());
        protocol.GameRequest = GameRequest;
    })(protocol = net.protocol || (net.protocol = {}));
})(net || (net = {}));
//# sourceMappingURL=GameRequest.js.map