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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
* name
*/
var net;
(function (net) {
    var GameResponse = net.protocol.GameResponse;
    var GameRequest = net.protocol.GameRequest;
    /** 服务器消息顺序排序与分发层 */
    var GameNetMananger = /** @class */ (function (_super) {
        __extends(GameNetMananger, _super);
        function GameNetMananger() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 服务器消息缓存队列 */
            _this.severEventCacheQueue = [];
            /** 等到初始化消息 */
            _this.waitInitEvent = true;
            /** 切换牌桌中 */
            _this.isChangeTable = false;
            /******************************************************* 服务器时间同步 *************************************************/
            /** 服务器与本地时间差值 */
            _this.severTimeOffect = 0;
            return _this;
        }
        /**
         * 长连接打开的回调
         */
        GameNetMananger.prototype.onSocketOpen = function () {
            //消息队列上锁
            this.waitInitEvent = false;
            //
            _super.prototype.onSocketOpen.call(this);
        };
        /**
         * 描述:构造函数，该对象创建即连接，不需要调用额外的函数
         * @param url 服务器的地址
         * @param desc 此websocket的描述，也可以称之为别名用于处理在多个SOCKET的使用的时候排查问题
         */
        GameNetMananger.prototype.init = function (url, desc) {
            _super.prototype.init.call(this, url, desc);
        };
        GameNetMananger.prototype.clearSocket = function () {
            //
            this.severEventCacheQueue.length = 0;
            //
            this.waitInitEvent = false;
            //
            this.isChangeTable = false;
            //告知网关断开socket
            if (this.socket && this.socket.connect) {
                if (GameMain.DEBUG)
                    console.warn("send close!!!");
                var msgBytes = util.StringUtils.jsonObjectToArrayBuffer("close");
                this.addContent(msgBytes);
            }
            //
            _super.prototype.clearSocket.call(this);
        };
        GameNetMananger.prototype.broadcast = function (eventName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (GameMain.DEBUG && !GameMain.Release) {
                var eventID = parseInt(eventName);
                var eventNameStr = net.protocol.GameResponse.severCodeToStr(eventID);
                eventNameStr = !eventNameStr ? eventName : eventNameStr;
                var curTime = this.getCurTime();
                console.warn.apply(console, __spreadArrays(["[Event_Client][" + curTime + "][" + eventNameStr + "]"], args));
            }
            _super.prototype.broadcast.apply(this, __spreadArrays([eventName], args));
        };
        /** 同步服务器时间 */
        GameNetMananger.prototype.synchronizeSevetTime = function (data) {
            if (data.serverTimeStamp) {
                var localTime = Date.now();
                var severTime = data.serverTimeStamp;
                this.severTimeOffect = localTime - severTime;
            }
            else {
                this.severTimeOffect = 0;
                if (GameMain.DEBUG)
                    console.error("心跳同步服务器时间失败！");
            }
        };
        /** 获取服务器时间 */
        GameNetMananger.prototype.getCurSeverTime = function () {
            var localTime = Date.now();
            var severTime = localTime - this.severTimeOffect;
            return severTime;
        };
        /******************************************************* 网络收发消息 *****************************************************/
        /** 消息处理 */
        GameNetMananger.prototype.dealTextMessage = function (message) {
            try {
                var data = _super.prototype.dealTextMessage.call(this, message);
                if (!data)
                    return null;
                if (data.code == 1) {
                    //收到心跳消息同步服务器时间
                    this.synchronizeSevetTime(data);
                }
                /*************************************** 消息排序 ********************************************/
                var code = data.code.toString();
                if (code == GameResponse.RoomInfo) {
                    this.isChangeTable = false;
                }
                if (code == GameResponse.SANPSHOT) {
                    this.isChangeTable = false;
                }
                if (code == GameResponse.FOOTOUT) {
                    this.isChangeTable = false;
                }
                if (this.isChangeTable) {
                    return null;
                }
                switch (code) {
                    //退出游戏
                    case GameResponse.EXIT: //玩家离开
                    case GameResponse.FOOTOUT: //玩家被踢出
                        {
                            //是自己时直接广播,无需排序
                            // userId = 34808551
                            //var datas = { "code": 5012, "userId": "34808551" };
                            if (data.userId == UserInfoManger.UserId) {
                                //this.broadcast("5012", datas);
                                this.isChangeTable = true;
                                this.broadcast(code, data);
                                return data;
                            }
                        }
                    //公共异常,无需排序
                    case GameResponse.COMMON_ERROR: {
                        this.broadcast(code, data);
                        return data;
                    }
                    //服务器即将关闭,无需排序
                    case GameResponse.WILL_CLOSE: {
                        this.broadcast(code, data);
                        return data;
                    }
                    //游戏结算,无需排序,并开启排序等待
                    case GameResponse.OVER: {
                        this.broadcast(code, data);
                        this.waitInitEvent = true;
                        return data;
                    }
                    //游戏结算,无需排序,并开启排序等待
                    case GameResponse.SANPSHOT: {
                        this.waitInitEvent = false;
                        this.broadcast(data.code.toString(), data);
                        while (this.severEventCacheQueue.length > 0) {
                            var msgData = this.severEventCacheQueue.shift();
                            this.broadcast(msgData.code.toString(), msgData);
                        }
                        return data;
                    }
                }
                //等待初始化消息时，所有消息丢到缓存队列
                if (this.waitInitEvent) {
                    this.severEventCacheQueue.push(data);
                    return data;
                }
                this.broadcast(code, data);
            }
            catch (e) {
                if (GameMain.DEBUG)
                    console.warn("deal text error:" + e);
                return null;
            }
        };
        /**
         * 发送消息
         * @param msg 消息
         */
        GameNetMananger.prototype.sendMessage = function (msgObj) {
            /** 未连接 不处理  */
            if (!this.socket || !this.socket.connected)
                return;
            //转换成Buffer
            var msgBytes = util.StringUtils.jsonObjectToArrayBuffer(msgObj);
            //发送消息到服务器
            this.addContent(msgBytes);
            //心跳不记录
            if (msgObj.code != 1) {
                this.addCodeAndSeverFlag(msgObj.code);
                //打印发送消息
                if (GameMain.DEBUG) {
                    //记录网关流水号发送时间
                    var str = GameRequest.clientCodeToStr(msgObj.code);
                    if (GameMain.DEBUG) {
                        console.error("[REQ_Sever][" + str + "]", msgObj);
                    }
                }
                ;
            }
        };
        /**
         *
         */
        GameNetMananger.prototype.sendData = function (msgObj) {
            /** 未连接 不处理  */
            if (!this.socket || !this.socket.connected)
                return;
            //转换成Buffer
            var msgBytes = util.StringUtils.stringToArrayBuffer(msgObj);
            //发送消息到服务器
            this.addContent(msgBytes);
            if (GameMain.DEBUG)
                console.log("GameNetManager sendData  gameRec!!![[", msgObj);
        };
        return GameNetMananger;
    }(net.GameNetEventMask));
    net.GameNetMananger = GameNetMananger;
})(net || (net = {}));
//# sourceMappingURL=GameNetMananger.js.map