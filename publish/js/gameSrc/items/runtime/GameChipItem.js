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
//items.GameCardItem
var items;
(function (items) {
    var GameChipItem = /** @class */ (function (_super) {
        __extends(GameChipItem, _super);
        function GameChipItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 飞筹码
         * @param startX 起始点X
         * @param startY 起始点Y
         * @param targetX 目标X
         * @param targetY 目标Y
         */
        GameChipItem.prototype.flyChip = function (startX, startY, targetX, targetY, flyTime, v) {
            if (flyTime === void 0) { flyTime = 1000; }
            if (v === void 0) { v = false; }
            //
            if (this.timeLine) {
                this.finishChip();
            }
            //
            this.targetX = targetX;
            this.targetY = targetY;
            //筹码初始化位置
            this.visible = true;
            this.pos(startX, startY);
            //移动过去
            this.timeLine = new Laya.TimeLine();
            this.scale(0.5, 0.5);
            this.timeLine.to(this, { x: targetX, y: targetY }, flyTime, Laya.Ease.circOut)
                .to(this, { scaleX: 0.4, scaleY: 0.4 }, 100, Laya.Ease.linearNone)
                .to(this, { scaleX: 0.3, scaleY: 0.3 }, 100, Laya.Ease.linearNone);
            this.timeLine.play(0, false);
            this.timeLine.on(Laya.Event.COMPLETE, this, this.onComplete, [v]);
        };
        GameChipItem.prototype.onComplete = function (v) {
            this.visible = v;
        };
        /**
         * 完成飞行动画
         */
        GameChipItem.prototype.finishChip = function () {
            if (this.timeLine) {
                this.timeLine.pause();
                this.timeLine.destroy();
                this.timeLine = null;
            }
            this.pos(this.targetX, this.targetY);
            this.scale(1, 1);
            this.visible = true;
        };
        /**
         * 请空筹码
         */
        GameChipItem.prototype.clearChip = function () {
            if (this.timeLine) {
                this.timeLine.pause();
                this.timeLine.destroy();
                this.timeLine = null;
            }
            this.pos(this.targetX, this.targetY);
            this.scale(1, 1);
            this.visible = false;
            this.targetArea = "";
            this.startX = 0;
            this.startY = 0;
        };
        GameChipItem.prototype.getChipImage = function (chipNum) {
            var url = game.asset.AssetConfig.ChipImageMap[chipNum];
            return url;
        };
        GameChipItem.prototype.setTargetArea = function (local) {
            this.targetArea = local;
        };
        GameChipItem.prototype.getTargetArea = function () {
            return this.targetArea;
        };
        GameChipItem.prototype.setStartPos = function (startX, startY) {
            this.startX = startX;
            this.startY = startY;
        };
        GameChipItem.prototype.getStartPosX = function () {
            return this.startX;
        };
        GameChipItem.prototype.getStartPosY = function () {
            return this.startY;
        };
        return GameChipItem;
    }(items.GameChipItemBase));
    items.GameChipItem = GameChipItem;
})(items || (items = {}));
//# sourceMappingURL=GameChipItem.js.map