
module game.action {

	
    import GamePlayerStage = gameenum.GamePlayerStage;
	
	
    /** 游戏结束亮牌动作 */
    export class GameSettlementingAction extends action.GameActionBase {

        public runActionFunc(data: net.protocol.SettlementDataBean) {
            //
            this.printTime("[游戏结算中]",data.time,5,data);
            //
            var settlementPlayerObjs: game.objs.PlayerObject[] = [];
            //
            for (const userId in data.i) {
                let playerObj = this.gameCtrl.getPlayerObjByUUID(userId);
                if ( !playerObj || playerObj.isOverGame ) continue;
                var settlementStrs = data.i[userId].split("_");
                var settlementNum = parseFloat(settlementStrs[0]);
                var balanceScore = settlementStrs[1];
                playerObj.balanceScore = parseFloat(balanceScore);
                //只有赢的时候计算总的变账筹码
                if(settlementNum > 0){
                    playerObj.addBetNum = playerObj.totalBetScore + settlementNum;
                    settlementPlayerObjs.unshift(playerObj);
                }else{
                    playerObj.addBetNum = settlementNum;
                    settlementPlayerObjs.push(playerObj);
                }
            }
            //
            if(settlementPlayerObjs.length < 1) {
                if(GameMain.DEBUG) console.error("服务器结算数据错误！！",data);
                return;
            }
            //
            this.roomPanel.gameSettlement(settlementPlayerObjs);
            //
            this.gameCtrl.actionQueue.LockActionQueueTime(1000);
            //
            var overSettlement = new GameOverSettlementAction();
            overSettlement.setActionData();
            this.gameCtrl.actionQueue.addFirstAction(overSettlement);
        }

        
    }
}
