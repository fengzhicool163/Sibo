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
var game;
(function (game) {
    var component;
    (function (component) {
        var GameMainPlayerSitBox = /** @class */ (function (_super) {
            __extends(GameMainPlayerSitBox, _super);
            function GameMainPlayerSitBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 下注盒子 */
            //protected betCtrlBarBox: GameBetCtrlBarBox;
            GameMainPlayerSitBox.prototype.initComponents = function () {
                _super.prototype.initComponents.call(this);
                //下注控制条
                //this.betCtrlBarBox = this.bindScript(GameBetCtrlBarBox, this.bindObj.betCtrlBarBoxObj);
                //游戏状态控制条
                this.gameStateCtrlBox = this.bindScript(component.GameStateCtrlBox, this.bindObj.gameStateCtrlBoxObj);
            };
            GameMainPlayerSitBox.prototype.updatePlayerCtrlBox = function () {
                //
                //this.betCtrlBarBox.UpdateBetCtrlBarData(this.playerObj);
                //
                this.gameStateCtrlBox.updateGameStateCtrlBox(this.playerObj);
            };
            /** 玩家入座 */
            GameMainPlayerSitBox.prototype.playerJoinSit = function (playerObj, isAnim) {
                _super.prototype.playerJoinSit.call(this, playerObj, isAnim);
                //玩家入座监听控制按钮变化
                this.ctrl.addListener(this.ctrl.Event.PlayerCtrlBtnUpdate, this, this.updatePlayerCtrlBox);
                this.ctrl.addListener(this.ctrl.Event.TimeEndUpDate, this, this.TimeEndUpDate);
                //
                this.updatePlayerCtrlBox();
            };
            GameMainPlayerSitBox.prototype.playerLeaveSit = function () {
                _super.prototype.playerLeaveSit.call(this);
                //玩家离座注销监听
                this.ctrl.removeListener(this.ctrl.Event.PlayerCtrlBtnUpdate, this, this.updatePlayerCtrlBox);
                this.ctrl.removeListener(this.ctrl.Event.TimeEndUpDate, this, this.TimeEndUpDate);
                //
                //this.betCtrlBarBox.resetBox();
                //
                this.gameStateCtrlBox.resetBox();
            };
            GameMainPlayerSitBox.prototype.TimeEndUpDate = function () {
                //this.betCtrlBarBox.TimeEndUpdate();
                this.gameStateCtrlBox.TimeEndUpdate();
            };
            /**  孤注一掷*/
            GameMainPlayerSitBox.prototype.fightBet = function () {
                this.gameStateCtrlBox.oneBtnFunc();
            };
            return GameMainPlayerSitBox;
        }(component.GamePlayerSitBox));
        component.GameMainPlayerSitBox = GameMainPlayerSitBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameMainPlayerSitBox.js.map