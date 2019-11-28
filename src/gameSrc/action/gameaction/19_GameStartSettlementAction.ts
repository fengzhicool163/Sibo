
module game.action {

	
    import GamePlayerStage = gameenum.GamePlayerStage;
	
	
    /** 游戏结算开始动作 */
    export class GameStartSettlementAction extends action.GameActionBase {

        public runActionFunc(data: net.protocol.SettlementDataBean) {
            //
			this.printTime("[玩家开始结算]",data.time,5,data);
            // this.gameCtrl.roomObj.state = data.state;
            var roomObj = this.gameCtrl.roomObj;
            var info = data.info;
            //this.gameCtrl.getMainPlayerObj().setLastBonusScore(0);
             var change:number = 0;
              this.gameCtrl.getMainPlayerObj().setLastBonusScore(0);
            for(let i = 0 ; i < info.length; i++){
                var item = info[i];
               
                if(item.uid == UserInfoManger.UserId){
                    change = change + item.change;
                    this.gameCtrl.getMainPlayerObj().setBalance(item.balance+change);
                    this.gameCtrl.getMainPlayerObj().setLastBonusScore(change);
                    UserInfoManger.setUserBalance({balance:item.balance+change});
                }
            }
           
            var num1:number = data.siboTypeScheme["dianshuOne"];
            var num2:number = data.siboTypeScheme["dianshuTwo"];
            var num3:number = data.siboTypeScheme["dianshuTree"];
              var total:number = num1 + num2 + num3;
            var str:string  = ""+ num1 + "_" + num2 + "_" + num3 + "_"+ total + "_";
          
            if((num1 == num2) && (num1 == num3)){
                str = str + "豹子";
            }
            else if(total > 10){
                str = str + "大";
            }
            else{
                str = str + "小";
            }
            if(this.gameCtrl.roomObj.winInfo.length >= 100){
                this.gameCtrl.roomObj.winInfo = [];
            }
            this.gameCtrl.roomObj.winInfo.push(str);
             this.roomPanel.playGameSettlement(data);
             /**  重复投注数据 */
              this.gameCtrl.roomObj.fowardRebetArea = [];
             for(let i = 0; i < this.gameCtrl.roomObj.reBetArea.length ;  i++){
                
                 this.gameCtrl.roomObj.fowardRebetArea.push(this.gameCtrl.roomObj.reBetArea[i]);

             }
             this.gameCtrl.roomObj.reBetArea = [];
           
            //     this.gameCtrl.actionQueue.LockActionQueueTime(1000);
                
            //     this.gameCtrl.actionQueue.addFirstAction( settlementAction );
			// }
        }

        
    }
}
