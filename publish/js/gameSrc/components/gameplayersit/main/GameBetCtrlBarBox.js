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
        var GameBetCtrlBarBox = /** @class */ (function (_super) {
            __extends(GameBetCtrlBarBox, _super);
            function GameBetCtrlBarBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            //protected betLabelList: font.genzhuFont[];
            GameBetCtrlBarBox.prototype.initComponents = function () {
                //初始化控件
                var bindObj = this.bindObj;
                //点击事件
                this.gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                this.betBtnList = [];
                //this.betLabelList = [];
                this.playerBox = this.bindScript(game.component.GamePlayerBox, this.bindObj.playerObj);
                for (var index = 0; index < 5; index++) {
                    var Btn = bindObj["betBtn" + index];
                    var betBtn = this.bindScript(game.component.ChipBetBtn, Btn);
                    this.betBtnList.push(betBtn);
                    Btn.visible = false;
                    //点击事件
                    //EventManager.addTouchScaleListener(betBtn, this, this["clickBetBtnFunc" + index]);
                }
                EventManager.register(game.event.GameEvent.UPDATE_BET_BAR, this, this.UpdateBetCtrlBarData);
                EventManager.register(game.event.GameEvent.UPDATE_USER_BALANCE, this, this.setPlayerMoney);
                EventManager.addTouchScaleListener(this.bindObj.betBtn5, this, this.onReBet);
                EventManager.register(game.event.GameEvent.UPDATE_REBET, this, this.disableRebet);
                EventManager.register(game.event.GameEvent.BALANCE_CHECK, this, this.checkBalance);
                //初始化显示
                this.resetBox();
            };
            /**
             * 设置数据
             */
            GameBetCtrlBarBox.prototype.setData = function (data) {
                this.chipRange = this.gameCtrl.roomObj.getChipRange();
                var bindObj = this.bindObj;
                for (var i = 0; i < this.chipRange.length; i++) {
                    var btn = bindObj["betBtn" + i];
                    btn.visible = true;
                    var scpBet = this.betBtnList[i];
                    scpBet.setData(this.chipRange[i]);
                    scpBet.hideLight();
                    if (i == 0) {
                        scpBet.showLight();
                        this.gameCtrl.roomObj.setLastBetScore(parseFloat(this.chipRange[0]));
                    }
                }
                var betItem = bindObj["betBtn5"];
                betItem.visible = true;
                if (this.gameCtrl.roomObj.fowardRebetArea.length <= 0) {
                    betItem.disabled = true;
                }
                //var betScript:game.component.ChipBetBtn = this.betBtnList[5] ;
                //betScript.setData(0);
                this.checkBalance();
                this.playerBox.playerSitDown(this.gameCtrl.getMainPlayerObj());
            };
            /** 刷新下注按钮Bar显示 */
            GameBetCtrlBarBox.prototype.UpdateBetCtrlBarData = function () {
                var bindObj = this.bindObj;
                for (var i = 0; i < this.chipRange.length; i++) {
                    var btn = bindObj["betBtn" + i];
                    btn.visible = true;
                    var scpBet = this.betBtnList[i];
                    scpBet.hideLight();
                }
            };
            /**
             * 设置玩家当前金币
             */
            GameBetCtrlBarBox.prototype.setPlayerMoney = function (money) {
                this.playerBox.setPlayerMoney(money);
                this.gameCtrl.getMainPlayerObj().setBalance(money);
                this.checkBalance();
            };
            GameBetCtrlBarBox.prototype.TimeEndUpdate = function () {
                //this.bindObj.btnNode.disabled = true;
            };
            GameBetCtrlBarBox.prototype.resetBox = function () {
                //this.bindObj.btnNode.disabled = true;
                this.bindObj.visible = false;
            };
            GameBetCtrlBarBox.prototype.playerWin = function (addNum) {
                this.playerBox.playerWin(addNum);
            };
            GameBetCtrlBarBox.prototype.playerReset = function () {
                this.playerBox.resetPlayer();
            };
            /** 重复投注 */
            GameBetCtrlBarBox.prototype.onReBet = function () {
                if (this.gameCtrl.roomObj.getGameState() != gameenum.GameStateType.PLAYING) {
                    return;
                }
                //var info:any = [];
                var info = this.gameCtrl.roomObj.fowardRebetArea;
                // for(let key in data){
                // 	//this.bindObj.chipguang.visible = true;
                // 	var item:any = {"area":key , "bet":data[key]};
                // 	info.push(item);
                // }
                if (info.length > 0) {
                    net.protocol.GameRequest.reqReBet(info);
                    this.bindObj.betBtn5.disabled = true;
                }
            };
            GameBetCtrlBarBox.prototype.disableRebet = function (v) {
                this.bindObj.betBtn5.disabled = v[0];
            };
            GameBetCtrlBarBox.prototype.setDisable = function (v) {
                this.bindObj.btnNode.disabled = v;
            };
            /** 余额检测，更新投注按钮是否可以点击 */
            GameBetCtrlBarBox.prototype.checkBalance = function () {
                var bindObj = this.bindObj;
                for (var i = 0; i < this.chipRange.length; i++) {
                    var money = this.chipRange[i];
                    var btn = bindObj["betBtn" + i];
                    if (money > this.gameCtrl.getMainPlayerObj().balanceScore) {
                        btn.disabled = true;
                    }
                    else {
                        btn.disabled = false;
                    }
                }
            };
            /****************************** 加注按钮点击事件 *****************************************/
            GameBetCtrlBarBox.prototype.destory = function () {
                this.resetBox();
                this.betBtnList = [];
                EventManager.removeAllEvents(this);
            };
            return GameBetCtrlBarBox;
        }(common.component.UIComponent));
        component.GameBetCtrlBarBox = GameBetCtrlBarBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameBetCtrlBarBox.js.map