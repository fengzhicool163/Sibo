
module game.action {

    
    /** 通用报错协议 */
    export class CommonErrorAction extends action.GameActionBase {

        public runActionFunc(data : net.protocol.CommonErrorBean) {
            //
            if(data.userId != UserInfoManger.UserId) return;
            //
            var self = this.gameCtrl;
            //换桌失败
			if(data.clientCode == 1002){
				lobby.panel.MatchPanel.Hide();
				common.panel.PopInfoPanel.Show(data.reason,()=>{
					self.goBackGameLobby()
				});
				return;
            }
            //退出失败
			if(data.clientCode == 1008){
				common.panel.PopInfoPanel.Show(data.reason);
				return;
			}
        }
    }
}
