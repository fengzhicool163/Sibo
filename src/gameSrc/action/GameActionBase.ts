
module game.action {
    /** 房间初始化动作 */
    export abstract class GameActionBase extends common.action.ActionBase {

        protected gameCtrl: ctrl.GameRoomCtrl;
        protected netCtrl: net.GameNetMananger;

        protected get roomPanel(): game.panel.GameRoomPanel {
            return UIManager.getInstance().GetUI(game.panel.GameRoomPanel);
        }

        constructor() {
            super();
            this.gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
            this.netCtrl = UICtrlManager.getInstance().GetCtrl(net.GameNetMananger);
        }

        /** 清空Action */
        public clear() {
            super.clear();
            this.gameCtrl = null;
            this.netCtrl = null;
        }

        /** 阶段时间打印 */
        protected printTime(preStr: string, msgTime: number, stageTime: number, data: any) {
            if (GameMain.DEBUG) {
                var severTime = this.netCtrl.getCurSeverTime();
                var overTime = ((severTime - msgTime) / 1000);
                var severTimeStr = util.StringUtils.getDate(severTime);
                var msgTimeStr = util.StringUtils.getDate(msgTime);
                console.error(preStr + "当前剩余时间[" + (stageTime - overTime) + "s]");
                console.log(preStr + "收到消息时间[" + msgTimeStr + "]" +
                    "当前服务器时间[" + severTimeStr + "]" +
                    "已经经过的服务器时间[" + overTime.toFixed(2) + "s]" +
                    "当前阶段时间[" + stageTime + "s]", data);
            }
        }
    }
}
