var gameenum;
(function (gameenum) {
    var ServerErrorCode = /** @class */ (function () {
        function ServerErrorCode() {
        }
        ServerErrorCode.PARAMS_ERROR = 4001;
        ServerErrorCode.RELOGIN = 4009;
        ServerErrorCode.SERVER_CLOSE = 4013;
        ServerErrorCode.REMOTE_LANDING = 4015;
        return ServerErrorCode;
    }());
    gameenum.ServerErrorCode = ServerErrorCode;
})(gameenum || (gameenum = {}));
//# sourceMappingURL=ServerErrorCode.js.map