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
        var GamePlayerBox = /** @class */ (function (_super) {
            __extends(GamePlayerBox, _super);
            function GamePlayerBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GamePlayerBox.prototype.getStateImage = function (stateTypeData) {
                throw new Error("Method not implemented.");
            };
            GamePlayerBox.prototype.getHeadImage = function (headData) {
                var headUrl = game.asset.AssetConfig.GetHeadAsset(headData);
                return headUrl;
            };
            GamePlayerBox.prototype.getTalkImage = function (talkTypeData) {
                throw new Error("Method not implemented.");
            };
            GamePlayerBox.prototype.playerSitDown = function (playerObj) {
                this.setPlayerHead(playerObj.avatar);
                this.setPlayerName(playerObj.username);
                this.setPlayerMoney(playerObj.balanceScore, false);
                this.bindObj.visible = true;
            };
            /**   玩家胜利动效 */
            GamePlayerBox.prototype.playerWin = function (addNum) {
                this.bindObj.winlight.visible = true;
                this.bindObj.winEffect.visible = true;
                this.bindObj.winEffect.play(0, false);
                this.bindObj.effectLabel.text = "+" + addNum;
                this.bindObj.effectLabel.visible = true;
                this.bindObj.flyLabel.play(0, false);
            };
            /** 隐藏玩家胜利动效 */
            GamePlayerBox.prototype.playerWinHide = function () {
                this.bindObj;
            };
            return GamePlayerBox;
        }(component.GamePlayerBoxBase));
        component.GamePlayerBox = GamePlayerBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GamePlayerBox.js.map