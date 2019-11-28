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
    var action;
    (function (action) {
        /** 房间初始化动作 4000*/
        var RoomInitAction = /** @class */ (function (_super) {
            __extends(RoomInitAction, _super);
            function RoomInitAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoomInitAction.prototype.runActionFunc = function (roomData) {
                //清空管理器数据
                this.gameCtrl.clearData();
                //设置房间配置对象
                if (!this.gameCtrl.roomObj.setData(roomData)) {
                    //
                    lobby.panel.MatchPanel.Hide();
                    common.panel.PopInfoPanel.Show("服务器快照座位数据错误！！");
                    console.error(JSON.stringify(roomData));
                    //
                    this.gameCtrl.goBackGameLobby();
                    return;
                }
                // //初始化玩家对象
                // for (let index = 0; index < roomData.players.length; ++index) {
                //     const playerData = roomData.players[index];
                //     //对象绑定座位
                //     let playerObj = this.gameCtrl.addPlayerObj(playerData);
                //     //对象初始化数据
                //     playerObj.setData(playerData);
                // }
                //恢复或开始新一局游戏
                this.roomPanel.roomInit(this.gameCtrl.roomObj);
                this.gameCtrl.actionQueue.LockActionQueueTime(500);
            };
            return RoomInitAction;
        }(action.GameActionBase));
        action.RoomInitAction = RoomInitAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=01_RoomInitAction.js.map