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
        var GamePlayerState = gameenum.GamePlayerState;
        //import GamePlayerTalk = gameenum.GamePlayerTalk;
        var GamePlayerSitBox = /** @class */ (function (_super) {
            __extends(GamePlayerSitBox, _super);
            function GamePlayerSitBox() {
                //protected bindObj : ui.gameUI.GamePlayerSit.GamePlayerSitLBoxUI;
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /** 当前座位是否可点击操作 */
                _this.canTouch = false;
                return _this;
            }
            ;
            /** 初始化座位，绑定子盒子 */
            GamePlayerSitBox.prototype.initComponents = function () {
                //
                this.ctrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                //
            };
            /** 关闭座位表现效果 倒计时、比牌等特效 */
            GamePlayerSitBox.prototype.resetSit = function () {
                this.canTouch = false;
            };
            /** 获取座位手牌 */
            GamePlayerSitBox.prototype.getSitCardByIndex = function (index) {
                return this.playerHandCardBox.cardList[index];
            };
            /***************************************** 座位动作 ***********************************/
            /** 玩家离开 */
            GamePlayerSitBox.prototype.playerLeaveSit = function () {
                //
                this.resetSit();
                //
                this.canTouch = false;
                //
                this.playerObj = null;
                //玩家数据
            };
            /** 玩家入座 */
            GamePlayerSitBox.prototype.playerJoinSit = function (playerObj, isAnim) {
                //清空座位特效
                this.resetSit();
                //记录玩家入座
                isAnim = isAnim && !playerObj;
                this.playerObj = playerObj;
                //恢复玩家下注数据
            };
            /** 玩家准备 */
            GamePlayerSitBox.prototype.playerReady = function (playerObj) {
                //
                this.resetSit();
                //this.playerBetBox.setBetBoxVisible(false);
                //设置玩家状态
                this.playerBox.setPlayerState(GamePlayerState.Ready);
                //玩家说准备
                //this.playerBox.playerTalk(GamePlayerTalk.Ready);
                //音效
                game.SoundManager.PlayReady();
            };
            /** 玩家下底注 */
            GamePlayerSitBox.prototype.playerBetBase = function (playerObj) {
                //
                this.resetSit();
                //重置玩家
                this.playerBox.resetPlayer();
                //设置玩家剩余金币
                var money = playerObj.balanceScore - playerObj.totalBetScore;
                this.playerBox.setPlayerMoney(money);
                //设置玩家下注数据
                this.playerBetBox.setData(playerObj.totalBetScore);
                //发默认牌
                this.playerHandCardBox.resetBox();
            };
            /** 轮到某个玩家操作 */
            GamePlayerSitBox.prototype.playerAction = function (playerObj) {
                //console.warn("GamePlayerSitBox=================>", playerObj.remainingTime);
                this.playerBox.playerCoundDown(playerObj.remainingTime);
            };
            /** 玩家下注 */
            GamePlayerSitBox.prototype.playerBet = function (playerObj) {
                //
            };
            /** 某个玩家弃牌 */
            GamePlayerSitBox.prototype.playerFold = function (playerObj) {
                //
            };
            /** 某个玩家看牌了 */
            GamePlayerSitBox.prototype.playerLookCard = function (playerObj) {
            };
            /** 显示某个玩家手牌 */
            GamePlayerSitBox.prototype.showPlayerCard = function (playerObj, isAnim) {
            };
            /**
             * 打开玩家比牌效果
             */
            GamePlayerSitBox.prototype.showSelectCompare = function (canTouch) {
            };
            /** 玩家结算 */
            GamePlayerSitBox.prototype.playerSettlement = function (playerObj) {
            };
            /********************************************** 点击事件 *********************************************/
            /** 比牌点击事件 */
            GamePlayerSitBox.prototype.comparePlayerFunc = function () {
            };
            return GamePlayerSitBox;
        }(common.component.UIComponent));
        component.GamePlayerSitBox = GamePlayerSitBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GamePlayerSitBox.js.map