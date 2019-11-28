
/** 主玩家信息管理器 */
class UserInfoManger {

    /************ 玩家数据 *****************/
    /** 玩家头像 */
    protected static avatar: string;
    /** 玩家名称 */
    protected static userName: string;
    /** 玩家id */
    protected static userId: string;
    /** 玩家金币 */
    protected static balance: number;

    /** 是否获取到balance 不能用非零来判断，*/
    protected static isGetBalance: boolean = false;
    public static clearData() {
        this.avatar = null;
        this.userName = null;
        this.userId = null;
        this.balance = null;
        this.isGetBalance = false;
    }

    /** 设置玩家数据 */
    public static setUserData(userData: any) {
        this.userName = userData.username;
        this.userId = userData.userId.toString();
    }

    /** 设置玩家头像 */
    public static setUserHeadData(userData: any) {
        this.avatar = userData.avatar || "05";
    }

    /** 设置玩家金币数 */
    public static setUserBalance(userData: httpBean.UserBalanceInfoBean) {
        this.balance = userData.balance;
        this.isGetBalance = true;
    }

    public static get Avatar(): string {
        return this.avatar;
    }

    public static get UserName(): string {
        return this.userName;
    }

    public static get UserId(): string {
        return this.userId;
    }

    public static get Balance(): number {
        return this.balance;
    }

    public static get IsGetBalance(): boolean {
        return this.isGetBalance;
    }
}