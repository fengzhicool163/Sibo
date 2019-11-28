
module game.action {

    /** 玩家强制切换牌桌动作*/
    export class SelectComparePlayer extends action.GameActionBase {

        public runActionFunc() {
            //
            var mainObj = this.gameCtrl.getMainPlayerObj();
            mainObj.localStage = gameenum.GamePlayerStage.Compared;
            //清空房间数据
            var comparePlayerObjs = this.gameCtrl.getCanComparePlayer();
            //更新玩家显示界面
            this.roomPanel.showSelectCompare( comparePlayerObjs , comparePlayerObjs.length > 1 );
            //当只有一个玩家时默认直接比牌
            if(comparePlayerObjs.length == 1){
                net.protocol.GameRequest.reqCompare( comparePlayerObjs[0].userId );
            }
        }

    }

}
