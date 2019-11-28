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
    var objs;
    (function (objs) {
        /** 游戏对象基类 */
        var GameObject = /** @class */ (function (_super) {
            __extends(GameObject, _super);
            function GameObject() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._ctrl = null;
                return _this;
            }
            Object.defineProperty(GameObject.prototype, "ctrl", {
                get: function () {
                    if (this._ctrl == null) {
                        this._ctrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
                    }
                    return this._ctrl;
                },
                enumerable: true,
                configurable: true
            });
            return GameObject;
        }(common.objs.objBase));
        objs.GameObject = GameObject;
    })(objs = game.objs || (game.objs = {}));
})(game || (game = {}));
//# sourceMappingURL=GameObject.js.map