module game.action{
    export class GameOverResultAction extends action.GameActionBase{
         public runActionFunc(roomData: any){
             this.gameCtrl.roomObj.setOpenResult(roomData.data);
             this.roomPanel.showOpenResult();
         }
    }
}