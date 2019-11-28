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
    var component;
    (function (component) {
        var GamePlayerBoxBase = /** @class */ (function (_super) {
            __extends(GamePlayerBoxBase, _super);
            function GamePlayerBoxBase() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GamePlayerBoxBase.prototype.initComponents = function () {
                //
                this.updateSortBoxHandler = Laya.Handler.create(this, this.updateSortBox, null, false);
                //倒计时盒子
                //this.gpCDBox = this.bindScript(GamePlayerCountDown,this.bindObj.gamePlayerCDBoxObj);
                //初始化
                this.clearPlayer();
            };
            /** 玩家金币设配 */
            GamePlayerBoxBase.prototype.updateSortBox = function () {
                //
                this.bindObj.moneySortNode.width = this.bindObj.playerMoney.width + 40;
            };
            /*********************************************** 外部调用函数 *********************************************/
            /** 重置玩家显示 */
            GamePlayerBoxBase.prototype.resetPlayer = function () {
                //倒计时
                //this.gpCDBox.resetBox();
                //玩家状态
                //this.setPlayerState(null);
                this.bindObj.winlight.visible = false;
                this.bindObj.winEffect.visible = false;
                this.bindObj.effectLabel.visible = false;
                this.bindObj.flyLabel.stop();
            };
            /** 清空玩家显示 */
            GamePlayerBoxBase.prototype.clearPlayer = function () {
                //
                this.resetPlayer();
                //
                this.bindObj.visible = false;
            };
            /** 设置玩家名称 */
            GamePlayerBoxBase.prototype.setPlayerName = function (playerName) {
                this.bindObj.playerName.text = util.StringUtils.starString(playerName, "****");
                ;
            };
            /** 设置玩家头像 */
            GamePlayerBoxBase.prototype.setPlayerHead = function (avatar) {
                //设置头像
                var url = this.getHeadImage(avatar);
                this.bindObj.headImage.skin = url;
                //this.bindObj.headImage.loadImage(url, 0, 0, 90, 90)
                this.bindObj.headImage.visible = true;
            };
            /**
             * 设置玩家当前金币
             * @param money
             */
            GamePlayerBoxBase.prototype.setPlayerMoney = function (money, isAnim) {
                if (isAnim === void 0) { isAnim = true; }
                var balanceScore = money;
                //玩家金币
                if (isAnim) {
                    this.bindObj.playerMoney.ScrollNum(balanceScore, 500, this.updateSortBoxHandler);
                }
                else {
                    var str = util.StringUtils.FormatGameMoney(balanceScore, 2);
                    this.bindObj.playerMoney.curNum = balanceScore;
                    this.bindObj.playerMoney.text = str;
                }
                this.updateSortBox();
            };
            /**
             * 设置玩家状态
             * @param stateType 玩家状态
             */
            GamePlayerBoxBase.prototype.setPlayerState = function (stateTypeData) {
                var stateUrl = this.getStateImage(stateTypeData);
                if (stateUrl) {
                }
                else {
                }
            };
            /** 设置玩家倒计时 */
            GamePlayerBoxBase.prototype.playerCoundDown = function (remainingTime, allRemainingTime) {
                if (allRemainingTime === void 0) { allRemainingTime = 20; }
                //设置玩家倒计时
                if (remainingTime > 0) {
                    //this.gpCDBox.setData(remainingTime, allRemainingTime);
                }
                else {
                    //this.gpCDBox.resetBox();
                }
            };
            return GamePlayerBoxBase;
        }(common.component.UIComponent));
        component.GamePlayerBoxBase = GamePlayerBoxBase;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GamePlayerBoxBase.js.map