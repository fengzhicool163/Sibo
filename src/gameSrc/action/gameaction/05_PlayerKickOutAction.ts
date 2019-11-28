
module game.action {

	/** 玩家被踢出房间动作*/
	export class PlayerKickOutAction extends action.GameActionBase {

		public runActionFunc(data: net.protocol.PlayerKickOutBean) {
			var myUserId = UserInfoManger.UserId;
			gameenum.ServerErrorCode.errorStatus = data;
			if (GameMain.DEBUG) {
				console.warn("玩家被提出runAction=============>", this.gameCtrl.getCurTime());
			}
			//判断是否是主玩家
			if (data.userId == myUserId) {
				if (GameMain.DEBUG) {
					console.warn("玩家被提出runAction=============111>", this.gameCtrl.getCurTime());
				}
				var closeCode = data.closeCode;
				if (closeCode == 4009) {
					common.panel.PopInfoPanel.Show(data.reason, () => {

						//this.gameCtrl.closeGameSocket();
						var roomCtl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
						roomCtl.gotoLobby();
					})
					this.gameCtrl.goBackGameLobby();
				}
				else if (closeCode == 4013) {
					// common.panel.PopInfoPanel.Show(data.reason, () => {
					// 	this.gameCtrl.closeGameSocket();
					// 	var roomCtl = UICtrlManager.getInstance().GetCtrl(ctrl.RoomLobbyCtrl);
					// 	roomCtl.gotoLobby();
					// });
					common.panel.PopInfoPanel.Show(data.reason);
					this.gameCtrl.goBackGameLobby();
				}
				else {
					common.panel.PopInfoPanel.Show(data.reason);
					this.gameCtrl.goBackGameLobby();
				}

			} else {
				var localSit = this.gameCtrl.delPlayerObj(data.userId);
				if (localSit) {
					this.roomPanel.playerLeave(localSit);
				}
			}
		}

	}
}
