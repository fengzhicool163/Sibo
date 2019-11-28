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
        var BetBox = /** @class */ (function (_super) {
            __extends(BetBox, _super);
            function BetBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BetBox.prototype.initComponents = function () {
                this.bindObj.btn_bet.on(Laya.Event.CLICK, this, this.onBetArea);
                this.hideBg();
            };
            /**  显示光亮背景 */
            BetBox.prototype.showBg = function () {
                this.bindObj.bj.visible = true;
            };
            /** 隐藏光亮背景 */
            BetBox.prototype.hideBg = function () {
                //if(GameMain.DEBUG)console.log("BetBox hideBg=============>")
                this.bindObj.bj.visible = false;
            };
            /** 点击投注按钮 */
            BetBox.prototype.onBetArea = function () {
                if (GameMain.DEBUG)
                    console.log("BetBox onBetArea=============>");
                var gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                if (gameCtrl.roomObj.getGameState() != gameenum.GameStateType.PLAYING) {
                    return;
                }
                // 当前区域的总投注额
                var money = gameCtrl.roomObj.getBetMoneyByName(this.betArea);
                // 当前区域的限额
                var limit = gameCtrl.roomObj.getBetLimitByName(this.betArea);
                // 这次投注的金额
                var value = gameCtrl.roomObj.getLastBetScore();
                // 这次投注的金额 如果大于用户的余额，提示用户充值
                if (value > gameCtrl.getMainPlayerObj().balanceScore) {
                    common.panel.PopInfoPanel.Show("您的金币不足，是否前去充值？", function () {
                        game.SoundManager.PlayOpenPanel();
                        //跳转充值 
                        util.PostTool.jumpToRecharge();
                    });
                    return;
                }
                // 我自己下注的总金额，包括所有投注区域的金额总和
                var total = gameCtrl.roomObj.totalBetScore;
                if ((money + value) > limit) {
                    EventManager.dispath(game.event.GameEvent.TIPS, ["您的押注金额已经超过限额"]);
                    return;
                }
                if ((value + total) > gameCtrl.roomObj.maxBet) {
                    EventManager.dispath(game.event.GameEvent.TIPS, ["您的押注金额已经超过房间的限额"]);
                    return;
                }
                net.protocol.GameRequest.reqBet(this.betArea, gameCtrl.roomObj.getLastBetScore());
            };
            BetBox.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
                this.bindObj.btn_bet.off(Laya.Event.CLICK, this, this.onBetArea);
            };
            BetBox.prototype.setBetArea = function (area) {
                this.betArea = area;
            };
            BetBox.prototype.getBetArea = function () {
                return this.betArea;
            };
            BetBox.prototype.updateBetMoney = function (money) {
                this.bindObj.bet_bj.visible = true;
                this.bindObj.bet_money.text = money;
            };
            BetBox.prototype.hideBetMoney = function () {
                this.bindObj.bet_bj.visible = false;
                this.bindObj.bet_money.text = "";
            };
            BetBox.prototype.clearBox = function () {
                this.bindObj.bet_bj.visible = false;
                this.bindObj.bet_money.text = "";
                this.bindObj.bj.visible = false;
            };
            return BetBox;
        }(common.component.UIComponent));
        component.BetBox = BetBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=BetBox.js.map