
module game.action {

    /** 玩家离开动作*/
    export class PlayerLeaveAction extends action.GameActionBase {

        public runActionFunc(data: net.protocol.PlayerDataBean) {
            var myUserId = UserInfoManger.UserId;
			//判断是否是主玩家
			if (data.userId == myUserId) {
				this.gameCtrl.goBackGameLobby();
			} 
			
        }

    }

}
