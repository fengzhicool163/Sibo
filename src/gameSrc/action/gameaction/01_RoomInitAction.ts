
module game.action {

    /** 房间初始化动作 4000*/
    export class RoomInitAction extends action.GameActionBase {

        public runActionFunc(roomData: net.protocol.RoomDataBean) {
            //清空管理器数据
            this.gameCtrl.clearData();
            //设置房间配置对象
            if (!this.gameCtrl.roomObj.setData(roomData)) {
                //
                lobby.panel.MatchPanel.Hide();
                common.panel.PopInfoPanel.Show("服务器快照座位数据错误！！");
                console.error(JSON.stringify(roomData));
                //
                this.gameCtrl.goBackGameLobby();
                return;
            }
            // //初始化玩家对象
            // for (let index = 0; index < roomData.players.length; ++index) {
            //     const playerData = roomData.players[index];
            //     //对象绑定座位
            //     let playerObj = this.gameCtrl.addPlayerObj(playerData);
            //     //对象初始化数据
            //     playerObj.setData(playerData);

            // }
            //恢复或开始新一局游戏
            this.roomPanel.roomInit(this.gameCtrl.roomObj);
          
            this.gameCtrl.actionQueue.LockActionQueueTime(500);
        }

    }

}
