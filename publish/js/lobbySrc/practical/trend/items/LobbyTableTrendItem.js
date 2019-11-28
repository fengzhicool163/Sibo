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
        var LobbyTableTrendItem = /** @class */ (function (_super) {
            __extends(LobbyTableTrendItem, _super);
            function LobbyTableTrendItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                /**
                 * 和次数
                 */
                _this.heNum = 0;
                return _this;
            }
            LobbyTableTrendItem.prototype.initComponents = function () {
            };
            /**
             * 设置骰宝历史记录Item数据 []
             * @param itemType
             */
            LobbyTableTrendItem.prototype.setItemView = function (itemType) {
                this.lightBj.visible = false;
                this.imgN.visible = false;
                var dir = "lobbyRes/lobbyRoomList/img_sz_";
                this.img0.skin = dir + itemType[0] + ".png";
                this.img1.skin = dir + itemType[1] + ".png";
                this.img2.skin = dir + itemType[2] + ".png";
                var num1 = parseInt(itemType[0]);
                var num2 = parseInt(itemType[1]);
                var num3 = parseInt(itemType[2]);
                var num4 = parseInt(itemType[3]);
                if ((num1 == num2) && (num1 == num3)) {
                    this.big.visible = false;
                    this.small.visible = false;
                    this.baozi.visible = true;
                    this.szbaozi.text = itemType[3];
                    this.szbao.text = itemType[4];
                }
                else if (num4 > 10) {
                    this.big.visible = true;
                    this.small.visible = false;
                    this.baozi.visible = false;
                    this.szbig.text = itemType[3];
                    this.szb.text = itemType[4];
                }
                else {
                    this.big.visible = false;
                    this.small.visible = true;
                    this.baozi.visible = false;
                    this.szsmall.text = itemType[3];
                    this.szs.text = itemType[4];
                }
            };
            /**
             * 添加一次和状态
             */
            LobbyTableTrendItem.prototype.showLight = function () {
                this.lightBj.visible = true;
                this.imgN.visible = true;
            };
            /**
             * 显示触底提示
             */
            LobbyTableTrendItem.prototype.showTouchButtom = function () {
            };
            /** 重置盒子(默认显示) */
            LobbyTableTrendItem.prototype.resetBox = function () {
                this.big.visible = false;
                this.small.visible = false;
                this.baozi.visible = false;
            };
            /** 清理盒子(清空显示) */
            LobbyTableTrendItem.prototype.clearBox = function () {
                this.datas = null;
            };
            /** 根据传入参数设置盒子显示  data下 tables 下的roundResult*/
            LobbyTableTrendItem.prototype.setData = function (data) {
                this.setItemView(data.d.split("_"));
            };
            return LobbyTableTrendItem;
        }(ui.gameTrend.Items.LobbyTableTrendItemUI));
        component.LobbyTableTrendItem = LobbyTableTrendItem;
    })(component = lobby.component || (lobby.component = {}));
})(lobby || (lobby = {}));
//# sourceMappingURL=LobbyTableTrendItem.js.map