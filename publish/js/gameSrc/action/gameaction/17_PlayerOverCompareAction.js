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
        var GamePlayerStage = gameenum.GamePlayerStage;
        /** 玩家比牌结束动作 */
        var PlayerOverCompareAction = /** @class */ (function (_super) {
            __extends(PlayerOverCompareAction, _super);
            function PlayerOverCompareAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerOverCompareAction.prototype.runActionFunc = function (data) {
                //
                this.printTime("[玩家比牌结束]", data.time, 5, data);
                //参与比牌玩家列表
                var comparePlayerObjs = [];
                //获取发起比牌对象
                var fplayerObj = this.gameCtrl.getPlayerObjByUUID(data.userId);
                comparePlayerObjs.push(fplayerObj);
                //设置玩家比牌输赢阶段状态
                if (data.t_u != "*") { //普通比牌
                    var isFwin = (data.l_u == data.t_u);
                    //
                    fplayerObj.localStage = isFwin ? GamePlayerStage.ComparedWin : GamePlayerStage.ComparedLose;
                    fplayerObj.isOverGame = !isFwin;
                    //
                    var tplayerObj = this.gameCtrl.getPlayerObjByUUID(data.t_u);
                    tplayerObj.localStage = !isFwin ? GamePlayerStage.ComparedWin : GamePlayerStage.ComparedLose;
                    tplayerObj.isOverGame = isFwin;
                    //
                    comparePlayerObjs.push(tplayerObj);
                }
                else { //孤注一掷
                    var isFwin = (data.l_u == "*");
                    //服务器无数据,记录玩家孤注一掷下注筹码
                    fplayerObj.localStage = isFwin ? GamePlayerStage.ComparedWin : GamePlayerStage.ComparedLose;
                    fplayerObj.isOverGame = !isFwin;
                    //刷新对应玩家本地阶段
                    for (var userId in this.gameCtrl.userIDPlayerObjMap) {
                        if (data.f_u == userId)
                            continue;
                        var playerObj = this.gameCtrl.userIDPlayerObjMap[userId];
                        //
                        if (playerObj.isOverGame)
                            continue;
                        //
                        playerObj.localStage = !isFwin ? GamePlayerStage.ComparedWin : GamePlayerStage.ComparedLose;
                        playerObj.isOverGame = isFwin;
                        //
                        comparePlayerObjs.push(playerObj);
                    }
                }
                //
                this.roomPanel.playerOverCompare(comparePlayerObjs);
            };
            return PlayerOverCompareAction;
        }(action.GameActionBase));
        action.PlayerOverCompareAction = PlayerOverCompareAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=17_PlayerOverCompareAction.js.map