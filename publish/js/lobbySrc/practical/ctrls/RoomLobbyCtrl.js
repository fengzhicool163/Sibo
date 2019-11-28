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
var ctrl;
(function (ctrl) {
    var GameRequest = net.protocol.GameRequest;
    var GameResponse = net.protocol.GameResponse;
    var RoomLobbyCtrl = /** @class */ (function (_super) {
        __extends(RoomLobbyCtrl, _super);
        function RoomLobbyCtrl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 游戏房间信息 */
            _this.roomDatas = null;
            /** 房间显示消息 */
            _this.EVENT_SHOWROOMBOX = "EVENT_SHOWROOMBOX";
            return _this;
        }
        RoomLobbyCtrl.prototype.clearData = function () {
            this.roomDatas = null;
        };
        RoomLobbyCtrl.prototype.init = function () { };
        /**
         * 清除对象所有的定时器
         */
        RoomLobbyCtrl.prototype.destroy = function () {
            this.clearData();
        };
        /** 获取房间信息 */
        RoomLobbyCtrl.prototype.getRoomInfo = function () {
            // if (GameMain.DEBUG) console.log("开始获取房间信息");
            // var roomOb = new net.DefaultNetObserver();
            // //消息返回处理
            // roomOb.onSuccess = (roomInfo: any) => {
            // 	//保存房间数据
            // 	this.roomDatas = roomInfo.datas;
            // 	//广播房间数据更新
            // 	this.broadcast(this.EVENT_SHOWLOBBY);
            // };
            // //消息返回处理
            // roomOb.onError = this.errorCodeFunc.bind(this);
            // //发送消息
            // var roomAction = new net.GameRoomAction().bindObserver(roomOb);
            // roomAction.excute();
        };
        /** 就问取个用户数据三条消息骚不骚 */
        RoomLobbyCtrl.prototype.getAllInfo = function () {
            _super.prototype.getAllInfo.call(this);
            //获取房间信息
            this.getRoomInfo();
        };
        /**
         * 连接服务器
         */
        RoomLobbyCtrl.prototype.initSocket = function () {
            this.gameNet = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
            this.gameNet.addListener(this.gameNet.Event.onConnectOpen, this, this.onSocketOpen);
            this.gameNet.addListener(GameResponse.RoomInfo, this, this.updateRoomBox);
            this.conectServer(); //连接游戏服务器
        };
        RoomLobbyCtrl.prototype.onSocketOpen = function () {
            GameRequest.reqRoomInfo();
        };
        RoomLobbyCtrl.prototype.conectServer = function () {
            if (!this.gameWsurl) {
                if (GameMain.DEBUG)
                    console.log("获取游戏服务器地址");
                // var gameWsOb = new net.DefaultNetObserver();
                // //
                // gameWsOb.onSuccess = (data: any) => {
                // 	this.gameWsurl = data.wsUrl + "/" + AppInfoManager.Token + "/" + AppInfoManager.GameId;
                // 	this.gameNet.init(this.gameWsurl,"SiBoWebsocket");
                // 	if (GameMain.DEBUG) console.log("游戏服务器地址:" + this.gameWsurl);
                // };
                // //消息返回处理
                // gameWsOb.onError = (error: number, msg: string) => {
                // 	this.errorCodeFunc(error,msg);
                // };
                // //
                // var gameWsAction = new net.GameSocketAction().bindObserver(gameWsOb);
                // gameWsAction.excute();
                var token = AppInfoManager.Token;
                var gameId = AppInfoManager.GameId;
                var url = AppInfoManager.GameUrl;
                this.gameWsurl = url + "/game/stake/" + token + "/" + gameId;
                this.gameNet.init(this.gameWsurl, "SiBoWebsocket");
            }
            else {
                this.gameNet.init(this.gameWsurl, "SiBoWebsocket");
            }
        };
        RoomLobbyCtrl.prototype.updateRoomBox = function (data) {
            UserInfoManger.setUserBalance({ balance: data.balance });
            UserInfoManger.setUserData({ username: data.username, userId: data.userId });
            UserInfoManger.setUserHeadData({ avatar: data.avatar });
            this.roomDatas = data.data;
            this.broadcast(this.EVENT_SHOWLOBBY);
        };
        RoomLobbyCtrl.prototype.getRoomNum = function () {
            if (this.roomDatas) {
                return this.roomDatas.length;
            }
            return 0;
        };
        return RoomLobbyCtrl;
    }(ctrl.RoomLobbyCtrlBase));
    ctrl.RoomLobbyCtrl = RoomLobbyCtrl;
})(ctrl || (ctrl = {}));
//# sourceMappingURL=RoomLobbyCtrl.js.map