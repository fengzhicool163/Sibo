module game.action{
    export class GameEndBetAction extends action.GameActionBase{
         public runActionFunc(roomData: any){
              //var data = roomData.data;
               this.gameCtrl.roomObj.state = roomData.data.state;
              //恢复或开始新一局游戏
              this.roomPanel.stopBet(roomData);
            //this.roomPanel.gameCountDown(data.remainingTime,data.state);
            //this.roomPanel.showBetCtrl(false);
             this.gameCtrl.actionQueue.LockActionQueueTime(1500);
         }
    }
}