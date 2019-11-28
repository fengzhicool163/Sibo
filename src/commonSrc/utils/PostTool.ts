module util {

    export enum AppPostAction {
        account = "game_account",
        custom = "game_custom",
        recharge = "game_recharge",
        redraw = "game_redraw",
    }

    export class PostTool {

        /** 跳转到扩展模块 */
        public static jump2module(type: AppPostAction): void {
            try {
                //
                var data = {
                    "token": AppInfoManager.Token,
                    "httpUrl": "../api/v1",
                    "clientId": AppInfoManager.ClientId,
                    "backUrl": "../gamethree/index.html?jumpData=" + AppInfoManager.jumpDataStr //,
                };
                //

                window.top.postMessage(JSON.stringify({ action: type, ...data }), "*");
            } catch (e) {
                if (GameMain.DEBUG) console.log(e);
            }
        }

        /** 跳转充值 */
        public static jumpToRecharge() {
            //充值 
            this.jump2module(AppPostAction.recharge);
        }

    }
}