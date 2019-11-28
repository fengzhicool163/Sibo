
module game.action {

    /** 游戏开始倒计时动作*/
    export class GameCountDownAction extends action.GameActionBase {

        public runActionFunc(data: net.protocol.GameStartCountDownBean) {
            //
            this.printTime("[游戏倒计时]",data.time,data.remainingTime,data);
            //
			var remainingTime = this.gameCtrl.getRealRemainingTime(data.time,data.remainingTime);
            if(remainingTime >= 1.5){
				//开始倒计时
				this.roomPanel.gameCountDown( remainingTime );
			}else{
				if(GameMain.DEBUG) console.error("时间不足抛弃倒计时动画");
			}
        }
    }
}
