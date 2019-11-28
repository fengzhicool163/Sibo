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
    var GameRequest = net.protocol.GameRequest;
    var GameResponse = net.protocol.GameResponse;
    /** 游戏ctrl层主要负责net消息的接收数据，通过model层解析保存数据，然后通过分发消息给显示层 */
    var GameRoomCtrl = /** @class */ (function (_super) {
        __extends(GameRoomCtrl, _super);
        function GameRoomCtrl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 是否在游戏场景中 */
            _this.isInGameScene = false;
            return _this;
        }
        /*************************************** 初始化与销毁 ***************************************/
        GameRoomCtrl.prototype.init = function () {
            _super.prototype.init.call(this);
            this.actionQueue = new common.action.ActionQueue();
            this.addListenerNetMsg();
        };
        GameRoomCtrl.prototype.destroy = function () {
            //
            Laya.timer.clearAll(this);
            //
            _super.prototype.destroy.call(this);
            //清空gameNet的事件监听
            this.gameNet.clearAllListener();
        };
        /************************************* 内部调用方法 ********************************/
        GameRoomCtrl.prototype.conectSever = function () {
            //获取游戏网络管理器
            //this.gameNet.init(this.wsUrl, "gameNet");
        };
        GameRoomCtrl.prototype.sendPingPong = function () {
            this.startPingPong = Date.now();
            GameRequest.reqPingPong(); //开始心跳
        };
        GameRoomCtrl.prototype._intoGame = function (roomId, tableId) {
            //
            //
            this.actionQueue.pause();
            //打开游戏界面
            UIManager.getInstance().ShowUI(game.panel.GameRoomPanel, game.panel.GameRoomPanel.assets, this, this.exitGameLobby);
            //
            this.isInGameScene = true;
            //
            GameRequest.reqJoinRoom(roomId, tableId);
            //Laya.timer.once(1000, this, this.conectSever);
        };
        GameRoomCtrl.prototype.exitGameLobby = function () {
            //初始化房间大厅控制器
            //lobby.panel.MatchPanel.Show();
            var rlCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
            //退出大厅
            rlCtrl.exitGameLobby();
            //
        };
        /** 退出游戏界面 */
        GameRoomCtrl.prototype.goBackGameLobby = function () {
            //
            //Laya.timer.clear(this, this.conectSever);
            //前端主动断开socket
            //this.gameNet.clearSocket();
            //
            this.actionQueue.ClearActionQueue();
            //
            lobby.panel.MatchPanel.Hide();
            //
            this.clearData();
            gameenum.ServerErrorCode.errorStatus = null;
            //
            if (!this.isInGameScene)
                return;
            //关闭游戏界面
            UIManager.getInstance().HideUI(game.panel.GameRoomPanel, false);
            //初始化房间大厅控制器
            var rlCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
            //进入大厅
            rlCtrl.intoGameLobby();
        };
        GameRoomCtrl.prototype.closeGameSocket = function () {
            Laya.timer.clear(this, this.conectSever);
            //前端主动断开socket
            this.gameNet.clearSocket();
            //
            this.actionQueue.ClearActionQueue();
            //
            lobby.panel.MatchPanel.Hide();
            //
            this.clearData();
        };
        /**
         * 进入游戏房间
         * @param roomId 房间ID
         */
        GameRoomCtrl.prototype.intoGame = function (roomId, tableId) {
            // var token = AppInfoManager.Token;
            // var gameId = AppInfoManager.GameId;
            // this.wsUrl = roomUrl + "/" + token + "/" + gameId + "/" + roomId;
            this._intoGame(roomId, tableId);
        };
        /** 退出游戏 */
        GameRoomCtrl.prototype.exitGame = function () {
            GameRequest.reqExitGame();
        };
        /*************************************** 网络事件 ****************************************/
        GameRoomCtrl.prototype.addListenerNetMsg = function () {
            //链接事件
            this.gameNet.addListener(this.gameNet.Event.onConnectOpen, this, this.onConnectOpen);
            this.gameNet.addListener(this.gameNet.Event.onConnectClose, this, this.onConnectClose);
            this.gameNet.addListener(this.gameNet.Event.onConnectError, this, this.onConnectError);
            //
            //this.gameNet.addListener(GameResponse.PINGPONG, this, this.getPingPong);
            //统一错误处理
            this.gameNet.addListener(GameResponse.COMMON_ERROR, this, this.commonError);
            //房间快照
            this.gameNet.addListener(GameResponse.SANPSHOT, this, this.roomSanpshot);
            //服务器即将关闭连接
            this.gameNet.addListener(GameResponse.WILL_CLOSE, this, this.severClose);
            //玩家加入	
            //this.gameNet.addListener(GameResponse.ENTER, this, this.playerJoin);
            //玩家离开	
            this.gameNet.addListener(GameResponse.EXIT, this, this.playerLeave);
            //玩家被踢出房间
            //this.gameNet.addListener(GameResponse.FOOTOUT, this, this.playerKickOut)
            //玩家准备
            //this.gameNet.addListener(GameResponse.BEGIN_GAME, this, this.playerReadly);
            //游戏投注消息
            this.gameNet.addListener(GameResponse.BASE_BET, this, this.gameStartBetBase);
            //某个玩家下注了
            //this.gameNet.addListener(GameResponse.BET, this, this.playerBet);
            //游戏结算消息
            this.gameNet.addListener(GameResponse.GAME_SETTLEMENT, this, this.gameSettlement);
            this.gameNet.addListener(GameResponse.GAME_START_INIT, this, this.gameStartInit);
            this.gameNet.addListener(GameResponse.GAME_START_BET, this, this.gameBetReady);
            this.gameNet.addListener(GameResponse.GAME_END_BET, this, this.gameEndBet);
            this.gameNet.addListener(GameResponse.GAME_END_RESULET, this, this.gameEndResult);
            this.gameNet.addListener(GameResponse.GAME_TIPS, this, this.gameTipMsg);
            this.gameNet.addListener(GameResponse.GAME_REC, this, this.gameRec);
        };
        /** 连接上了游戏服务器 */
        GameRoomCtrl.prototype.onConnectOpen = function () {
            //this.sendPingPong();
        };
        /** 链接关闭 */
        GameRoomCtrl.prototype.onConnectClose = function (e) {
            var _this = this;
            //
            this.actionQueue.ClearActionQueue();
            //弹出失败提示
            //UIManager.getInstance().ShowTip(e.reason);
            //
            lobby.panel.MatchPanel.Hide();
            if (gameenum.ServerErrorCode.errorStatus.closeCode == gameenum.ServerErrorCode.SERVER_CLOSE || gameenum.ServerErrorCode.errorStatus.closeCode == gameenum.ServerErrorCode.PARAMS_ERROR) {
                common.panel.PopInfoPanel.Show(gameenum.ServerErrorCode.errorStatus.closeReason, function () {
                    _this.closeGameSocket();
                    var roomCtl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
                    roomCtl.gotoLobby();
                });
            }
            else {
                //
                this.goBackGameLobby();
            }
        };
        /** 链接失败 */
        GameRoomCtrl.prototype.onConnectError = function () {
            //
            this.actionQueue.ClearActionQueue();
            //
            lobby.panel.MatchPanel.Hide();
            //弹出失败提示
            common.panel.PopInfoPanel.Show("网络连接失败，请检查网络");
            //
            this.goBackGameLobby();
        };
        /** 心跳处理 */
        GameRoomCtrl.prototype.getPingPong = function (data) {
            Laya.timer.once(3000, this, this.sendPingPong);
            var netdelay = Date.now() - this.startPingPong;
            this.broadcast(this.Event.NetDelayUpdate, netdelay);
            //if(GameMain.DEBUG) console.log("当前网络来回延时 = " + netdelay + "ms");
        };
        /** 通用错误提示 */
        GameRoomCtrl.prototype.commonError = function (data) {
            var action = new game.action.CommonErrorAction();
            action.runActionFunc(data);
        };
        /** 服务器将会关闭连接 4999*/
        GameRoomCtrl.prototype.severClose = function (data) {
            var action = new game.action.SeverCloseAction();
            action.doActionWithData(data);
        };
        /** 玩家被踢出房间 5012*/
        // protected playerKickOut(data: net.protocol.PlayerKickOutBean) {
        // 	var action = new game.action.PlayerKickOutAction();
        // 	if (data.userId == UserInfoManger.UserId) {
        // 		action.doActionWithData(data);
        // 	} else {
        // 		action.setActionData(data);
        // 		this.actionQueue.addAction(action);
        // 	}
        // }
        /** 玩家离开 5009*/
        GameRoomCtrl.prototype.playerLeave = function (data) {
            var action = new game.action.PlayerLeaveAction();
            if (data.userId == UserInfoManger.UserId) {
                action.doActionWithData(data);
            }
            else {
                //action.setActionData(data);
                //this.actionQueue.addAction(action);
            }
        };
        /** 房间快照 4000*/
        GameRoomCtrl.prototype.roomSanpshot = function (data) {
            var action = new game.action.RoomInitAction();
            action.setActionData(data);
            this.actionQueue.addAction(action);
        };
        /** 玩家进入 5008*/
        GameRoomCtrl.prototype.playerJoin = function (data) {
            var action = new game.action.PlayerJoinAction();
            action.setActionData(data);
            this.actionQueue.addAction(action);
        };
        /** 玩家准备 5000*/
        GameRoomCtrl.prototype.playerReadly = function (data) {
            var action = new game.action.PlayerReadyAction();
            action.setActionData(data);
            this.actionQueue.addAction(action);
        };
        /** 游戏投注 34205*/
        GameRoomCtrl.prototype.gameStartBetBase = function (data) {
            console.log("GameRoomCtrl gamestartBetBase=============>");
            var action = new game.action.GameStartBetAction();
            action.setActionData(data);
            this.actionQueue.addAction(action);
        };
        /** 某个玩家下注了 5002*/
        GameRoomCtrl.prototype.playerBet = function (data) {
            var action = new game.action.PlayerBetAction();
            action.setActionData(data);
            this.actionQueue.addAction(action);
        };
        /** 游戏结算 34207*/
        GameRoomCtrl.prototype.gameSettlement = function (data) {
            var action = new game.action.GameStartSettlementAction();
            action.setActionData(data);
            this.actionQueue.addAction(action);
        };
        /** 玩家超时托管设置 5016 */
        GameRoomCtrl.prototype.overhostsetting = function (data) {
            var action = new game.action.PlayerOverHostSettingAction();
            action.doActionWithData(data);
        };
        /**  跟到底*/
        GameRoomCtrl.prototype.betToEnd = function (data) {
            var action = new game.action.BetEndAction();
            action.doActionWithData(data);
        };
        /**
         *
         * @param data 开局推送 34201 准备中
         */
        GameRoomCtrl.prototype.gameStartInit = function (data) {
            var action = new game.action.GameStartInitAction();
            action.doActionWithData(data);
        };
        /**
         * 开局推送 下注中 34202
         */
        GameRoomCtrl.prototype.gameBetReady = function (data) {
            var action = new game.action.GameBetReady();
            action.doActionWithData(data);
        };
        /**
         * 开局推送 结算中  34203
         */
        GameRoomCtrl.prototype.gameEndBet = function (data) {
            var action = new game.action.GameEndBetAction();
            action.doActionWithData(data);
        };
        /**
         * 游戏结束，推送开奖 34204
         */
        GameRoomCtrl.prototype.gameEndResult = function (data) {
            var action = new game.action.GameOverResultAction();
            action.setActionData(data);
            this.actionQueue.addAction(action);
            //action.doActionWithData(data);
        };
        GameRoomCtrl.prototype.gameTipMsg = function (data) {
            var action = new game.action.GameTipAction();
            action.doActionWithData(data);
        };
        /** 游戏战绩 */
        GameRoomCtrl.prototype.gameRec = function (data) {
            EventManager.dispath(game.event.GameEvent.UPDATE_GAME_REC, data);
        };
        return GameRoomCtrl;
    }(ctrl.GameRoomModel));
    ctrl.GameRoomCtrl = GameRoomCtrl;
})(ctrl || (ctrl = {}));
//# sourceMappingURL=GameRoomCtrl.js.map