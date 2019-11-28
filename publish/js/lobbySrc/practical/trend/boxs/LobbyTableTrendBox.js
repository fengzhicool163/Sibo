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
var lobby;
(function (lobby) {
    var component;
    (function (component) {
        var LobbyTableTrendBox = /** @class */ (function (_super) {
            __extends(LobbyTableTrendBox, _super);
            function LobbyTableTrendBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 缓存池初始化 */
            LobbyTableTrendBox.prototype.initComponents = function () {
                this.bindObj.listView.scrollBar.visible = false;
                this.bindObj.listView.scrollBar.elasticDistance = 50;
                //this.bindObj.listView.itemRender = lobby.component.LobbyTableTrendItem;
                this.bindObj.listView.itemRender = lobby.component.LobbyTableTrendItem;
                this.bindObj.listView.renderHandler = Laya.Handler.create(this, this.onRender, null, false);
                //this.bindObj.listView.selectHandler = Laya.Handler.create(this , this.onselect , null , false);
                //this.bindObj.listView.array = [];
                //this.itemPool = new util.PoolView(LobbyTableTrendItem , ui.gameTrend.Items.LobbyTableTrendItemUI , 20,45);
                //棋子缓存池
                //this.itemPool = new util.PoolView(LobbyTableTrendItem,ui.gameTrend.Items.LobbyTableTrendItemUI,20,48);
            };
            LobbyTableTrendBox.prototype.addItem = function () {
            };
            LobbyTableTrendBox.prototype.clear = function () {
                this.datas = null;
            };
            /** 重置盒子(默认显示) */
            LobbyTableTrendBox.prototype.resetBox = function () {
            };
            /** 清理盒子(清空显示) */
            LobbyTableTrendBox.prototype.clearBox = function () {
            };
            /** 根据传入参数设置盒子显示 */
            LobbyTableTrendBox.prototype.setData = function (data) {
                this.datas = [];
                //data = JSON.parse(data);
                for (var i = 0; i < data.length; i++) {
                    var itemData = data[i];
                    var d = { d: itemData };
                    this.datas.push(d);
                }
                this.bindObj.listView.array = this.datas;
                this.bindObj.listView.tweenTo(this.datas.length - 1, 200, Laya.Handler.create(this, this.tweenComplete, null, false));
            };
            LobbyTableTrendBox.prototype.onRender = function (cell, index) {
                cell.setData(this.datas[index]);
            };
            LobbyTableTrendBox.prototype.onselect = function (index) {
                console.log("LobbyTableTrendBox onSelect===========>", index);
            };
            LobbyTableTrendBox.prototype.tweenComplete = function () {
                var cell = this.bindObj.listView.getCell(this.bindObj.listView.length - 1);
                cell.showLight();
            };
            return LobbyTableTrendBox;
        }(common.component.UIBox));
        component.LobbyTableTrendBox = LobbyTableTrendBox;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=LobbyTableTrendBox.js.map