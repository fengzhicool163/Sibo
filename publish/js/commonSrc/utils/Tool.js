var util;
(function (util) {
    var Tool = /** @class */ (function () {
        function Tool() {
        }
        Tool.size = function (obj) {
            var size = 0;
            for (var key in obj) {
                size = size + 1;
            }
            return size;
        };
        return Tool;
    }());
    util.Tool = Tool;
})(util || (util = {}));
//# sourceMappingURL=Tool.js.map