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
var lobby;
(function (lobby) {
    var panel;
    (function (panel) {
        var GameRequest = net.protocol.GameRequest;
        var LobbyPanel = /** @class */ (function (_super) {
            __extends(LobbyPanel, _super);
            function LobbyPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isFirst = true;
                return _this;
            }
            LobbyPanel.prototype.initComponents = function () {
                _super.prototype.initComponents.call(this);
                this.lobbyRoomBox = this.bindScript(lobby.component.LobbyRoomBox, this.lobbyRoomBoxObj);
            };
            /** 根据数据初始化显示 设置房间信息 */
            LobbyPanel.prototype.checkData = function () {
                //
                var rooms = this.ctrl.roomDatas;
                //
                if (!_super.prototype.checkData.call(this) || !rooms)
                    return false;
                //
                return true;
            };
            LobbyPanel.prototype.updateView = function () {
                //
                // if(!super.updateView()){
                // 	return false;
                // }
                if (!this.checkData()) {
                    return false;
                }
                //
                if (!this.isUpdate) {
                    _super.prototype.updateView.call(this);
                    this.lobbyRoomBox.Show();
                }
                else {
                    this.lobbyRoomBox.UpdateData();
                }
                if (this.isFirst) {
                    //初始化房间大厅音乐
                    lobby.SoundManager.PlayBGM();
                    lobby.SoundManager.PlayWelcomeGame();
                    //
                    this.exitBtns.showAnim.play(0, false);
                    var msg = JSON.stringify({ action: "game_start", gameId: AppInfoManager.GameId });
                    window.top.postMessage(msg, "*");
                    this.isFirst = false;
                    //
                    Laya.timer.once(500, this, function () {
                        UIManager.getInstance().PreLoadUI(game.panel.GameRoomPanel, game.panel.GameRoomPanel.assets);
                    });
                }
                // try {
                // 	//window['loadJsOver']();
                // }
                // catch (e) {
                // 	if (GameMain.DEBUG) console.log(e);
                // }
                return true;
            };
            /************************************************** 点击事件 *******************************************/
            LobbyPanel.prototype.exitBtnFunc = function () {
                _super.prototype.exitBtnFunc.call(this);
                this.ctrl.gotoLobby();
                //this.Hide();
            };
            LobbyPanel.prototype.resize = function () {
                _super.prototype.resize.call(this);
                var wh = 16 / 9 + 0.01;
                if (Laya.stage.width / Laya.stage.height > wh) { //宽屏
                    this.supermodel.left = 118;
                }
                else {
                    this.supermodel.left = 16;
                }
            };
            LobbyPanel.prototype.Show = function () {
                this.ctrl.addListener(this.ctrl.EVENT_SHOWROOMBOX, this, this.updateView);
                Laya.timer.loop(20000, this, this.loopReqRoomData);
                this.loopReqRoomData();
                _super.prototype.Show.call(this);
            };
            LobbyPanel.prototype.Hide = function () {
                this.ctrl.removeListener(this.ctrl.EVENT_SHOWROOMBOX, this, this.updateView);
                Laya.timer.clear(this, this.loopReqRoomData);
                _super.prototype.Hide.call(this);
            };
            LobbyPanel.prototype.loopReqRoomData = function () {
                GameRequest.reqRoomInfo();
            };
            LobbyPanel.assets = lobby.asset.AssetConfig.LobbyPanel;
            return LobbyPanel;
        }(panel.LobbyPanelBase));
        panel.LobbyPanel = LobbyPanel;
    })(panel = lobby.panel || (lobby.panel = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=LobbyPanel.js.map