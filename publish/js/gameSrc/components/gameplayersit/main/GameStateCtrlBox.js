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
        var GamePlayerStage = gameenum.GamePlayerStage;
        var PlayerAllowActions = gameenum.PlayerAllowActions;
        var GameRequest = net.protocol.GameRequest;
        var GameStateCtrlBox = /** @class */ (function (_super) {
            __extends(GameStateCtrlBox, _super);
            function GameStateCtrlBox() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.spaceX = 5;
                _this.btnMap = {};
                return _this;
            }
            GameStateCtrlBox.prototype.initComponents = function () {
                //初始化控件
                this.sortList = [];
                //点击事件
                EventManager.addTouchScaleListener(this.bindObj.reMatchBtn, this, this.reMatchBtnFunc);
                EventManager.addTouchScaleListener(this.bindObj.foldBtn, this, this.foldBtnFunc);
                EventManager.addTouchScaleListener(this.bindObj.oneBtn, this, this.oneBtnFunc);
                EventManager.addTouchScaleListener(this.bindObj.lookCardBtn, this, this.lookCardBtnFunc);
                EventManager.addTouchScaleListener(this.bindObj.readyBtn, this, this.readyBtnFunc);
                EventManager.addTouchScaleListener(this.bindObj.compareBtn, this, this.compareBtnFunc);
                //按钮映射
                this.btnMap[PlayerAllowActions.START_PLAY] = this.bindObj.readyBtn;
                this.btnMap[PlayerAllowActions.CHANGE_TABLE] = this.bindObj.reMatchBtn;
                this.btnMap[PlayerAllowActions.LOOK] = this.bindObj.lookCardBtn;
                this.btnMap[PlayerAllowActions.ABANDON] = this.bindObj.foldBtn;
                this.btnMap[PlayerAllowActions.GZYZ] = this.bindObj.oneBtn;
                this.btnMap[PlayerAllowActions.COMPARE] = this.bindObj.compareBtn;
                //
            };
            /** 隐藏所有按钮 */
            GameStateCtrlBox.prototype.hideAllbtn = function () {
                for (var key in this.btnMap) {
                    this.btnMap[key].visible = false;
                    this.btnMap[key].disabled = true;
                }
            };
            /** 更新操作按钮状态 */
            GameStateCtrlBox.prototype.updateGameStateCtrlBox = function (playerObj) {
                this.hideAllbtn();
                this.sortList.length = 0;
                this.playerObj = playerObj;
                //刷新按钮显示
                if (!playerObj || !playerObj.allowActionsMap)
                    return;
                //刷新按钮显示
                for (var index = 0; index < GameStateCtrlBox.btnSortList.length; index++) {
                    var allowName = GameStateCtrlBox.btnSortList[index];
                    var btn = this.btnMap[allowName];
                    var openKey = playerObj.allowActionsMap[allowName];
                    var touchKey = !playerObj.allowActionsMap[allowName];
                    btn.visible = openKey;
                    btn.disabled = touchKey;
                    if (openKey)
                        this.sortList.push(btn);
                }
                //按钮排序
                if (this.sortList.length == 0)
                    return;
                var orX = 0;
                for (var index = 0; index < this.sortList.length; index++) {
                    var btn_1 = this.sortList[index];
                    orX += btn_1.width / 2;
                    btn_1.x = orX;
                    orX += btn_1.width / 2 + this.spaceX;
                }
                //
                this.bindObj.visible = true;
            };
            GameStateCtrlBox.prototype.resetBox = function () {
                for (var index = 0; index < GameStateCtrlBox.btnSortList.length; index++) {
                    var allowName = GameStateCtrlBox.btnSortList[index];
                    var btn = this.btnMap[allowName];
                    btn.visible = false;
                }
                this.bindObj.visible = false;
            };
            GameStateCtrlBox.prototype.TimeEndUpdate = function () {
                this.bindObj.lookCardBtn.disabled = true;
                this.bindObj.compareBtn.disabled = true;
                this.bindObj.foldBtn.disabled = true;
                this.bindObj.oneBtn.disabled = true;
                this.bindObj.readyBtn.disabled = true;
                this.bindObj.reMatchBtn.disabled = true;
            };
            /************************************************** 操作按钮点击事件 ***************************************************/
            GameStateCtrlBox.prototype.reMatchBtnFunc = function () {
                game.SoundManager.PlayClick();
                GameRequest.reqChangeTable();
                //
                var action = new game.action.ForceChangtable();
                action.doActionWithData();
            };
            GameStateCtrlBox.prototype.foldBtnFunc = function () {
                game.SoundManager.PlayClick();
                GameRequest.reqAbandon();
            };
            GameStateCtrlBox.prototype.oneBtnFunc = function () {
                game.SoundManager.PlayClick();
                GameRequest.reqLastFight();
                if (!this.playerObj)
                    return;
                this.playerObj.localStage = GamePlayerStage.Compared;
            };
            GameStateCtrlBox.prototype.lookCardBtnFunc = function () {
                game.SoundManager.PlayClick();
                GameRequest.reqLookCard();
            };
            GameStateCtrlBox.prototype.readyBtnFunc = function () {
                game.SoundManager.PlayClick();
                GameRequest.reqReadyGame();
            };
            GameStateCtrlBox.prototype.compareBtnFunc = function () {
                game.SoundManager.PlayClick();
                //
                var action = new game.action.SelectComparePlayer();
                action.doActionWithData();
            };
            /** 按钮顺序List */
            GameStateCtrlBox.btnSortList = [
                PlayerAllowActions.GZYZ,
                PlayerAllowActions.CHANGE_TABLE,
                PlayerAllowActions.START_PLAY,
                PlayerAllowActions.LOOK,
                PlayerAllowActions.COMPARE,
                PlayerAllowActions.ABANDON,
            ];
            return GameStateCtrlBox;
        }(common.component.UIComponent));
        component.GameStateCtrlBox = GameStateCtrlBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameStateCtrlBox.js.map