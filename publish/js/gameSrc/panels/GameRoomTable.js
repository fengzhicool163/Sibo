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
* 牌桌类
*/
var game;
(function (game) {
    var panel;
    (function (panel) {
        var GameRoomTable = /** @class */ (function (_super) {
            __extends(GameRoomTable, _super);
            function GameRoomTable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 发牌列表 */
            //protected sendCardItemList: items.GameCardItem[];
            /** 牌桌初始化 */
            GameRoomTable.prototype.initComponents = function () {
                //管理器获取
                this.lobbyCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
                this.gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                this.netCtrl = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
                //
                //筹码盒子
                this.gameChipsBox = this.bindScript(game.component.GameChipsBox, this.gameChipsBoxObj);
                //倒计时时钟
                this.countDownBox = this.bindScript(game.component.GameCountDownBox, this.countDownObj);
                this.startBetAnim.on(Laya.Event.STOPPED, this, this.playStartComplete);
                this.stopAnim.on(Laya.Event.STOPPED, this, this.playStopComplete);
                //结算亮牌盒子
                //this.gameShowCardBox = this.bindScript(game.component.GameShowCardBox, this.gameShowCardBoxObj);
            };
            /** 关闭所有座位表现效果 */
            GameRoomTable.prototype.resetAllPlayerSitEffect = function () {
            };
            /** 重置牌桌 */
            GameRoomTable.prototype.resetTable = function () {
                //你赢了金币动画
                this.winAnim.visible = false;
                this.winAnim.stop();
                //亮牌BOX
                //this.gameShowCardBox.hide();
                //筹码
                this.gameChipsBox.clearAllChip();
                //倒计时
                this.countDownBox.resetBox();
                //牌局号清空
                this.paijuhao.text = "";
                //局数
                this.juShu.text = "";
                //总下注数
                this.allBetNum.text = "";
                //最后一轮特效
                //this.lastRoundEffect.stop();
                //this.lastRoundEffect.visible = false;
            };
            /**
             * 清空牌桌
             */
            GameRoomTable.prototype.clearTable = function () {
                //隐藏牌桌下注信息背景
                //this.tableInfoBG.visible = false;
                //重置牌桌
                this.resetTable();
                //清空所有玩家
            };
            /** 初始化牌桌(快照恢复) */
            GameRoomTable.prototype.initTable = function (roomObj) {
                //重置牌桌
                this.resetTable();
                //牌桌信息更新
                this.setRoundInfo(roomObj.curRound + 1, roomObj.totalBetScore);
                //
                this.showBetInfo(roomObj.oddsInfo);
                this.countDownBox.setData(this.gameCtrl.roomObj.getRemainingTime(), this.gameCtrl.roomObj.getGameState());
                // 恢复筹码，下注区域
                if (this.gameCtrl.roomObj.getGameState() == gameenum.GameStateType.PLAYING) {
                    if (this.gameCtrl.roomObj.getRemainingTime() > 3) {
                        var len = util.Tool.size(this.gameCtrl.roomObj.getBetAreaMoney());
                        if (len > 0) {
                            this.chipInit();
                        }
                    }
                }
                //牌局号更新
                //this.paijuhao.text = roomObj.curRoundUuid;
                //数据恢复
            };
            /****************************************************** 显示刷新外部调用接口 **********************************************************/
            /** 设置牌桌信息 */
            GameRoomTable.prototype.setRoundInfo = function (roundNo, allBetNum) {
                console.log("GameRoomTable  setRoundInfo================>", allBetNum);
                //牌桌信息更新
                this.juShu.text = roundNo.toString();
                //this.allBetNum.text = util.StringUtils.FormatGameMoney(allBetNum, 2);
                //this.tableInfoBG.visible = true;
            };
            /** 恢复投注区域数据 */
            GameRoomTable.prototype.chipInit = function () {
                var obj = this.gameCtrl.roomObj.getBetAreaMoney();
                for (var key in obj) {
                    this.gameChipsBox.callBetNum(UserInfoManger.UserId, key, obj[key]);
                }
            };
            /** 准备摇塞子 */
            GameRoomTable.prototype.gameReady = function () {
                //
                game.SoundManager.PlayYaoSai();
                this.yaosaiAnim.visible = true;
                this.yaosaiAnim.play(0, false);
            };
            /**
             * 开始下注动画
             */
            GameRoomTable.prototype.playStartBet = function () {
                game.SoundManager.PlayStartBet();
                this.startBetAnim.visible = true;
                this.startBetAnim.play(0, false);
            };
            GameRoomTable.prototype.playStartComplete = function () {
                this.startBetAnim.visible = false;
            };
            /**
             * 停止下注动画
             */
            GameRoomTable.prototype.playStopEffect = function () {
                game.SoundManager.PlayStopBet();
                this.stopAnim.visible = true;
                this.stopAnim.play(0, false);
                Laya.timer.once(1000, this, function () {
                    game.SoundManager.PlayStopBetEffect();
                });
            };
            GameRoomTable.prototype.playStopComplete = function () {
                this.stopAnim.visible = false;
            };
            /** 游戏开始倒计时 */
            GameRoomTable.prototype.gameCountDown = function (remainingTime, state) {
                //关闭所有座位表现效果
                this.resetAllPlayerSitEffect();
                //开始倒计时
                this.countDownBox.setData(remainingTime, state);
            };
            /** 游戏投注 */
            GameRoomTable.prototype.gameStartBetBase = function (data) {
                //清空倒计时
                //this.countDownBox.resetBox();
                // 投注 飞筹码
                var bet = data.data;
                var betData = bet.betItems;
                for (var i = 0; i < betData.length; i++) {
                    var d = betData[i];
                    this.gameChipsBox.callBetNum(data.userId, d.betAreaId, d.betMoney);
                    if (data.userId == UserInfoManger.UserId) {
                        //同步当前区域的自己的下注总额
                        this.gameCtrl.roomObj.setBetMoneyByName(d.betAreaId, d.mAreaBetMoney);
                        // 更新 我自己的总下注金额
                        this.gameCtrl.roomObj.addTotalBetScore(d.betMoney);
                        EventManager.dispath(game.event.GameEvent.UPDATE_BET_MONEY, [d.betAreaId, d.mAreaBetMoney]);
                        // 记录用户的重复投注区域
                        //this.gameCtrl.roomObj.reBetArea[d.betAreaId] = d.mAreaBetMoney;
                        var result = { "area": d.betAreaId, "bet": d.betMoney };
                        this.gameCtrl.roomObj.reBetArea.push(result);
                        console.log("GameRoomTable gameStartBetBase 游戏投注============>", this.gameCtrl.roomObj.reBetArea);
                    }
                }
                if (data.userId == UserInfoManger.UserId) {
                    console.log("GameRoomTable gameStartBetBase ===============>", bet.balance);
                    this.gameCtrl.getMainPlayerObj().setBalance(bet.balance);
                    EventManager.dispath(game.event.GameEvent.UPDATE_USER_BALANCE, bet.balance);
                    EventManager.dispath(game.event.GameEvent.UPDATE_REBET, [true]);
                }
                //发牌动画时长
                //return (this.sendCardItemList.length + 1) * cardDelay;
            };
            /** 赔率信息 */
            GameRoomTable.prototype.showBetInfo = function (data) {
                var oddsInfoBox = this.oddsInfoBox;
                for (var key in data) {
                    var item = oddsInfoBox.getChildByName(key);
                    if (item) {
                        var value = parseInt(data[key]) - 1;
                        item.text = "1:" + value;
                    }
                }
            };
            return GameRoomTable;
        }(ui.gameUI.GamePanel.GameRoomPanelUI));
        panel.GameRoomTable = GameRoomTable;
    })(panel = game.panel || (game.panel = {}));
})(game || (game = {}));
//# sourceMappingURL=GameRoomTable.js.map