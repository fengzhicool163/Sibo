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
        var GameTrendBox = /** @class */ (function (_super) {
            __extends(GameTrendBox, _super);
            function GameTrendBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameTrendBox.prototype.initComponents = function () {
                this.trendBox = this.bindScript(lobby.component.LobbyTableTrendBox, this.bindObj.gameTread);
            };
            /** 重置盒子清空大路图与状态队列 */
            GameTrendBox.prototype.resetBox = function () {
                this.trendBox.clear();
            };
            /** 销毁盒子清空大路图与状态队列 */
            GameTrendBox.prototype.clearBox = function () {
                this.resetBox();
                this.bindObj.visible = false;
            };
            /** 销毁 */
            GameTrendBox.prototype.destroy = function () {
                this.resetBox();
                _super.prototype.destroy.call(this);
            };
            /**
            * 设置牌桌条数据  data下的tables数据
            * @param data
            */
            GameTrendBox.prototype.setData = function (data) {
                //
                this.resetBox();
                this.trendBox.setData(data);
                this.setRoundResult(data);
                this.bindObj.visible = true;
            };
            GameTrendBox.prototype.setRoundResult = function (data) {
                var big = 0;
                var small = 0;
                var baozi = 0;
                for (var i = 0; i < data.length; i++) {
                    var itemData = data[i].split("_");
                    if ((itemData[0] == itemData[1]) && (itemData[0] == itemData[2])) {
                        baozi = baozi + 1;
                    }
                    else if (itemData[3] > 10) {
                        big = big + 1;
                    }
                    else {
                        small = small + 1;
                    }
                }
                this.bindObj.big.text = "大 " + big;
                this.bindObj.small.text = "小 " + small;
                this.bindObj.baozi.text = "豹 " + baozi;
                this.bindObj.roundLabel.text = "第" + data.length + "局";
            };
            return GameTrendBox;
        }(common.component.UIBox));
        component.GameTrendBox = GameTrendBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameTrendBox.js.map