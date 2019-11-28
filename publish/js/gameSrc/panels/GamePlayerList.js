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
    var panel;
    (function (panel) {
        var GamePlayerList = /** @class */ (function (_super) {
            __extends(GamePlayerList, _super);
            function GamePlayerList() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GamePlayerList.prototype.initComponents = function () {
                //关闭按钮
                EventManager.addTouchScaleListener(this.closeBtn, this, this.closeBtnFunc);
                this.gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                this.itemPool = new util.PoolUtil(items.PlayerListItem, 11, 11);
                this.itemList = [];
            };
            GamePlayerList.prototype.destroy = function () {
                this.itemPool.destroy();
                _super.prototype.destroy.call(this);
            };
            GamePlayerList.prototype.Show = function () {
                _super.prototype.Show.call(this);
                //请求数据
                //this.reqHistoryData();
                //
                this.updateHistoryView(this.gameCtrl.roomObj.getPlayerList());
                this.openAnim(this.bgFrame);
            };
            GamePlayerList.prototype.Hide = function () {
                //清空界面
                for (var index = 0; index < this.itemList.length; index++) {
                    var item = this.itemList[index];
                    this.itemPool.recover(item);
                }
                this.itemList.length = 0;
                //设置节点缓存
                this.container.reCache();
                _super.prototype.Hide.call(this);
            };
            GamePlayerList.prototype.updateHistoryView = function (datas) {
                //如果界面已经销毁了
                if (this.destroyed)
                    return;
                //设置item显示
                for (var i = 0; i < 10; i++) {
                    var itemData = datas[i];
                    itemData.rank = i + 1;
                    //
                    var item = this.itemPool.getItem();
                    item.setData(itemData);
                    item.pos(25, i * 95);
                    item.visible = true;
                    //
                    this.container.addChild(item);
                    this.itemList.push(item);
                }
                this.updateMyself();
                //重置节点大小
                this.container.size(971, datas.length * 95 - 10);
                this.container.event("resize");
                //设置节点缓存
                this.container.reCache();
            };
            GamePlayerList.prototype.updateMyself = function () {
                var data = this.gameCtrl.getMainPlayerObj();
                this.myself.setMySelf(data);
            };
            /******************************************************* 按钮点击事件 *********************************************/
            GamePlayerList.prototype.closeBtnFunc = function () {
                game.SoundManager.PlayClose();
                UIManager.getInstance().HideUI(GamePlayerList);
            };
            return GamePlayerList;
        }(ui.gameUI.GamePanel.GamePlayerListUI));
        panel.GamePlayerList = GamePlayerList;
    })(panel = game.panel || (game.panel = {}));
})(game || (game = {}));
//# sourceMappingURL=GamePlayerList.js.map