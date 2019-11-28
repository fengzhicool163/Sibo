module game.action{
    export class GameTipAction extends action.GameActionBase{
         public runActionFunc(roomData: any){
             this.roomPanel.gameTipMsg(roomData.content);
         }
    }
}