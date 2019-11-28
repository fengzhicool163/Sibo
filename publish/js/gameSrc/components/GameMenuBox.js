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
        var GameMenuBox = /** @class */ (function (_super) {
            __extends(GameMenuBox, _super);
            function GameMenuBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameMenuBox.prototype.initComponents = function () {
                this.ctrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                _super.prototype.initComponents.call(this);
            };
            GameMenuBox.prototype.exitFunc = function () {
                this.ctrl.exitGame();
            };
            GameMenuBox.prototype.historyFunc = function () {
                UIManager.getInstance().ShowPopUI(lobby.panel.GameHistoryPanel, lobby.panel.GameHistoryPanel.assets);
            };
            GameMenuBox.prototype.ruleFunc = function () {
                UIManager.getInstance().ShowPopUI(lobby.panel.GameRulePanel, lobby.asset.AssetConfig.GameRulePanel);
            };
            GameMenuBox.prototype.settingFunc = function () {
                UIManager.getInstance().ShowPopUI(lobby.panel.GameSettingPanel, lobby.asset.AssetConfig.GameSettingPanel);
            };
            return GameMenuBox;
        }(component.GameMenuBoxBase));
        component.GameMenuBox = GameMenuBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameMenuBox.js.map