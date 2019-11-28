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
    (function (action_1) {
        /** 玩家换桌动作*/
        var PlayerChangeTableAction = /** @class */ (function (_super) {
            __extends(PlayerChangeTableAction, _super);
            function PlayerChangeTableAction() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerChangeTableAction.prototype.runActionFunc = function (data) {
                //判断自己换桌
                var playerObj = this.gameCtrl.getMainPlayerObj();
                if (playerObj.userId == data.userId) {
                    //
                    var action = new game.action.ForceChangtable();
                    action.doActionWithData();
                }
                else {
                    //玩家换桌离开了
                    var localSit = this.gameCtrl.delPlayerObj(data.userId);
                    if (localSit) {
                        this.roomPanel.playerLeave(localSit);
                    }
                }
            };
            return PlayerChangeTableAction;
        }(action.GameActionBase));
        action_1.PlayerChangeTableAction = PlayerChangeTableAction;
    })(action = game.action || (game.action = {}));
})(game || (game = {}));
//# sourceMappingURL=04_PlayerChangeTableAction.js.map