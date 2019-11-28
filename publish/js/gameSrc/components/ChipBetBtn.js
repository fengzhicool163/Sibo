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
        var ChipBetBtn = /** @class */ (function (_super) {
            __extends(ChipBetBtn, _super);
            function ChipBetBtn() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChipBetBtn.prototype.initComponents = function () {
                this.bindObj.chipbj.on(Laya.Event.CLICK, this, this.onBetArea);
                //this.hideBg();
            };
            ChipBetBtn.prototype.getChipImage = function (chipNum) {
                var url = game.asset.AssetConfig.ChipImageMap[chipNum];
                return url;
            };
            ChipBetBtn.prototype.getChipValueImage = function (chipNum) {
                var url = game.asset.AssetConfig.ChipValueMap[chipNum];
                return url;
            };
            ChipBetBtn.prototype.onBetArea = function () {
                //console.log("ChipBetBtn onBetArea ================>", this.betData);
                var gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                if (gameCtrl.roomObj.getGameState() != gameenum.GameStateType.PLAYING) {
                    return;
                }
                EventManager.dispath(game.event.GameEvent.UPDATE_BET_BAR);
                this.bindObj.chipguang.visible = true;
                gameCtrl.roomObj.setLastBetScore(parseFloat(this.betData));
            };
            ChipBetBtn.prototype.setData = function (data) {
                this.betData = data;
                this.setChipNum(parseInt(data));
            };
            /** 重置房间信息显示 */
            ChipBetBtn.prototype.resetBox = function () {
                //设置显示初始值
                this.bindObj.chipguang.visible = false;
                this.bindObj.reCache();
            };
            /** 清空房间信息显示 */
            ChipBetBtn.prototype.clearBox = function () {
                this.resetBox();
                //this.bindObj.visible = false;
            };
            /**
          * 设置筹码显示
          * @param chipNum
          */
            ChipBetBtn.prototype.setChipNum = function (chipNum) {
                var num = chipNum || 0;
                var url = this.getChipImage(num);
                this.bindObj.chipbj.skin = url;
                var valueurl = this.getChipValueImage(num);
                this.bindObj.chipValue.skin = valueurl;
            };
            ChipBetBtn.prototype.showLight = function () {
                this.bindObj.chipguang.visible = true;
            };
            ChipBetBtn.prototype.hideLight = function () {
                this.bindObj.chipguang.visible = false;
            };
            return ChipBetBtn;
        }(common.component.UIBox));
        component.ChipBetBtn = ChipBetBtn;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=ChipBetBtn.js.map