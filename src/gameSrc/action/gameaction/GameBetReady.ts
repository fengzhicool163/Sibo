module game.action{
    export class GameBetReady extends action.GameActionBase{
        public runActionFunc(roomData: any){
               var data = roomData.data;
                this.gameCtrl.roomObj.state = roomData.data.state;
                 //恢复或开始新一局游戏
            if(this.gameCtrl.roomObj.fowardRebetArea.length > 0){
                EventManager.dispath(game.event.GameEvent.UPDATE_REBET , [false]);
            }
            this.roomPanel.pushBetEvent(roomData);
            this.gameCtrl.actionQueue.LockActionQueueTime(1500);
        }

        
    }
}