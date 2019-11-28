module game.action{
    export class GameStartInitAction extends action.GameActionBase{
         public runActionFunc(roomData: any){
             if(GameMain.DEBUG)console.log("开局推送准备中 GameStartInitAction==============>",roomData.data);
             //清空管理器数据
            //this.gameCtrl.clearData();
            this.gameCtrl.roomObj.state = roomData.data.state;
            this.gameCtrl.roomObj.curRoundUuid = roomData.data.roundId;
            this.gameCtrl.roomObj.totalBetScore = 0;
            this.gameCtrl.roomObj.clearBetMoney();
            this.gameCtrl.roomObj.setPlayerList(roomData.data.sPlayers);
            this.roomPanel.roomPushData(roomData);
            //this.roomPanel.showBetCtrl(false);
            this.gameCtrl.actionQueue.LockActionQueueTime(500);
         }
    }
}