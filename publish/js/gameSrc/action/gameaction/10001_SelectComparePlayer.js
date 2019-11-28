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
        /** 玩家强制切换牌桌动作*/
        var SelectComparePlayer = /** @class */ (function (_super) {
            __extends(SelectComparePlayer, _super);
            function SelectComparePlayer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SelectComparePlayer.prototype.runActionFunc = function () {
                //
                var mainObj = this.gameCtrl.getMainPlayerObj();
                mainObj.localStage = gameenum.GamePlayerStage.Compared;
                //清空房间数据
                var comparePlayerObjs = this.gameCtrl.getCanComparePlayer();
                //更新玩家显示界面
                this.roomPanel.showSelectCompare(comparePlayerObjs, comparePlayerObjs.length > 1);
                //当只有一个玩家时默认直接比牌
                if (comparePlayerObjs.length == 1) {
                    net.protocol.GameRequest.reqCompare(comparePlayerObjs[0].userId);
                }
            };
            return SelectComparePlayer;
        }(action.GameActionBase));
        action.SelectComparePlayer = SelectComparePlayer;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=10001_SelectComparePlayer.js.map