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
        var GameRoomInfoBox = /** @class */ (function (_super) {
            __extends(GameRoomInfoBox, _super);
            function GameRoomInfoBox() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GameRoomInfoBox.prototype.initComponents = function () {
                //初始化控件
                var bindObj = this.bindObj;
                //this.fengding = bindObj.fengding;
                this.roomType = bindObj.roomType;
                this.tableNum = bindObj.tableNum;
                //
                this.clearBox();
            };
            /** 重置房间信息显示 */
            GameRoomInfoBox.prototype.resetBox = function () {
                //设置显示初始值
                //this.fengding.text = "-";
                this.roomType.text = "-";
                this.tableNum.text = "-";
                this.bindObj.reCache();
            };
            /** 清空房间信息显示 */
            GameRoomInfoBox.prototype.clearBox = function () {
                this.resetBox();
                this.bindObj.visible = false;
            };
            /** 刷新游戏房间数据显示 {
                "commissionRate": 0.05,
                "maxBet": 50,
                "minEntry": 100,
                "commissionProportion": 0.05,
                "maxSeat": 5,
                "maxThinkTime": 20,
                "roomId": "101",
                "minBetScore": 5,
                "maxRound": 19,
                "gameName": "炸金花",
                "dark": "10,15,20,25",
                "maxBetScore": 50,
                "alias": "zjh",
                "brights": "20,30,40,50",
                "brand": "106",
                "gameId": "10",
                "minScore": 100,
                "minBet": 5,
                "minLookRound": 1,
                "minCompareRound": 1,
                "minStartPlayerNO": 2,
                "roomName": "进阶房",
                "prepareTime": 5,
                "tableId": "195005005",
                "lookCardMultiple": 2
                tableNo,//PS ctrl里添加的！！！
            }*/
            GameRoomInfoBox.prototype.setData = function (data) {
                //房间名
                this.roomType.text = data.roomName;
                //桌号
                this.tableNum.text = data.tableName; //"第" + data.tableNo + "桌";
                //单注
                //封顶
                this.bindObj.limit.text = "" + data.maxBet;
                //this.fengding.text = data.maxBet.toString();
                //显示
                this.bindObj.visible = true;
                this.bindObj.paijuhao.text = "牌局号:" + data.curRoundUuid;
                //缓存
                this.bindObj.reCache();
            };
            /**   设置局号 */
            GameRoomInfoBox.prototype.setRoundId = function (id) {
                this.bindObj.paijuhao.text = id;
                //缓存
                this.bindObj.reCache();
            };
            return GameRoomInfoBox;
        }(common.component.UIBox));
        component.GameRoomInfoBox = GameRoomInfoBox;
    })(component = game.component || (game.component = {}));
})(game || (game = {}));
//# sourceMappingURL=GameRoomInfoBox.js.map