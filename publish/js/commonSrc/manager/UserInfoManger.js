/** 主玩家信息管理器 */
var UserInfoManger = /** @class */ (function () {
    function UserInfoManger() {
    }
    UserInfoManger.clearData = function () {
        this.avatar = null;
        this.userName = null;
        this.userId = null;
        this.balance = null;
        this.isGetBalance = false;
    };
    /** 设置玩家数据 */
    UserInfoManger.setUserData = function (userData) {
        this.userName = userData.username;
        this.userId = userData.userId.toString();
    };
    /** 设置玩家头像 */
    UserInfoManger.setUserHeadData = function (userData) {
        this.avatar = userData.avatar || "05";
    };
    /** 设置玩家金币数 */
    UserInfoManger.setUserBalance = function (userData) {
        this.balance = userData.balance;
        this.isGetBalance = true;
    };
    Object.defineProperty(UserInfoManger, "Avatar", {
        get: function () {
            return this.avatar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfoManger, "UserName", {
        get: function () {
            return this.userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfoManger, "UserId", {
        get: function () {
            return this.userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfoManger, "Balance", {
        get: function () {
            return this.balance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfoManger, "IsGetBalance", {
        get: function () {
            return this.isGetBalance;
        },
        enumerable: true,
        configurable: true
    });
    /** 是否获取到balance 不能用非零来判断，*/
    UserInfoManger.isGetBalance = false;
    return UserInfoManger;
}());
//# sourceMappingURL=UserInfoManger.js.map