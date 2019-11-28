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
var common;
(function (common) {
    var panel;
    (function (panel) {
        var LoadingMask = /** @class */ (function (_super) {
            __extends(LoadingMask, _super);
            function LoadingMask() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //private isDone: boolean = true;
                _this.isTimeEnd = false;
                _this.m_percent = 0;
                return _this;
            }
            LoadingMask.prototype.initComponents = function () {
            };
            LoadingMask.prototype.Show = function () {
                if (GameMain)
                    console.log("LoadingMask Show");
                this.loadNode.visible = false;
                this.showLabel(false);
                this.isTimeEnd = false;
                this.m_percent = 0;
                Laya.timer.once(1000, this, this.showLoading);
                this.visible = true;
            };
            LoadingMask.prototype.Hide = function () {
                //if (GameMain) console.log("LoadingMask Hide");
                Laya.timer.clear(this, this.showLoading);
                this.loadNode.visible = false;
                this.showLabel(false);
                this.visible = false;
                this.m_percent = 0;
                this.isTimeEnd = false;
            };
            LoadingMask.prototype.onProgress = function (num) {
                //if (GameMain.DEBUG) console.log("Loadingmask onProgress=============>", num);
                //this.labelNode.visible = true;
                if (!this.isTimeEnd)
                    return;
                //this.isDone = false;
                this.m_percent = num;
                if (num >= 1) {
                    //this.isDone = true;
                    this.showLabel(false);
                }
                this.showLabel(true);
                //if (GameMain.DEBUG) console.log("LoadingMash showLoading================333>", this.labelNode.visible);
                var n = num.toFixed(2);
                this.progress.text = n * 100 + "%";
            };
            /**
           * 显示Loading遮罩
           * @param showMask
           */
            LoadingMask.Show = function (showMask) {
                if (showMask === void 0) { showMask = true; }
                UIManager.getInstance().ShowMaskUI(LoadingMask, LoadingMask.assets, this, function (ui) {
                    //ui.showLabel(showMask, false);
                });
            };
            /**
             * 隐藏Loading遮罩
             * @param destroy
             */
            LoadingMask.Hide = function (destroy) {
                if (destroy === void 0) { destroy = false; }
                UIManager.getInstance().HideUI(LoadingMask, destroy);
            };
            LoadingMask.prototype.showLabel = function (show) {
                if (show === void 0) { show = true; }
                this.labelNode.visible = show;
            };
            LoadingMask.prototype.showLoadNode = function (show) {
                if (show === void 0) { show = false; }
                this.loadNode.visible = show;
            };
            /** 1.2秒后展示*/
            LoadingMask.prototype.showLoading = function () {
                this.loadNode.visible = true;
                this.isTimeEnd = true;
                //console.log("LoadingMash showLoading================4444", this.m_percent);
                if (this.m_percent >= 1) {
                    this.showLabel(false);
                    //if (GameMain.DEBUG) console.log("LoadingMash showLoading================1111>", this.labelNode.visible);
                }
                /* else {
                     this.showLabel(true);
                     if (GameMain.DEBUG) console.log("LoadingMash showLoading================222>", this.labelNode.visible);
                 }*/
            };
            LoadingMask.assets = common.asset.AssetConfig.LoadingMask;
            return LoadingMask;
        }(ui.commonUI.Panels.LoadingMaskUI));
        panel.LoadingMask = LoadingMask;
    })(panel = common.panel || (common.panel = {}));
})(common || (common = {}));
//# sourceMappingURL=LoadingMask.js.map