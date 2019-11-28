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
        var GameStartInitAction = /** @class */ (function (_super) {
            __extends(GameStartInitAction, _super);
            function GameStartInitAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameStartInitAction.prototype.runActionFunc = function (roomData) {
                if (GameMain.DEBUG)
                    console.log("开局推送准备中 GameStartInitAction==============>", roomData.data);
                //清空管理器数据
                //this.gameCtrl.clearData();
                this.gameCtrl.roomObj.state = roomData.data.state;
                this.gameCtrl.roomObj.curRoundUuid = roomData.data.roundId;
                this.gameCtrl.roomObj.totalBetScore = 0;
                this.gameCtrl.roomObj.clearBetMoney();
                this.gameCtrl.roomObj.setPlayerList(roomData.data.sPlayers);
                this.roomPanel.roomPushData(roomData);
                //this.roomPanel.showBetCtrl(false);
                this.gameCtrl.actionQueue.LockActionQueueTime(500);
            };
            return GameStartInitAction;
        }(action.GameActionBase));
        action.GameStartInitAction = GameStartInitAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=GameStartInitAction.js.map