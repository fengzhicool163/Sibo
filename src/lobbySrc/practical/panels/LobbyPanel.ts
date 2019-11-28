

module lobby.panel {

	import GameRequest = net.protocol.GameRequest;
	export class LobbyPanel extends LobbyPanelBase {

		public static readonly assets = asset.AssetConfig.LobbyPanel;
		private lobbyRoomBox:component.LobbyRoomBox;
		protected isFirst: boolean = true;
		protected initComponents() {
			super.initComponents();
			this.lobbyRoomBox = this.bindScript(component.LobbyRoomBox , this.lobbyRoomBoxObj);
		}

		/** 根据数据初始化显示 设置房间信息 */
		protected checkData() {
			//
			var rooms = this.ctrl.roomDatas;
			//
			if (!super.checkData() || !rooms ) return false;
			//
			return true;
		}

		public updateView(){
			//
			// if(!super.updateView()){
			// 	return false;
			// }
			if( !this.checkData()) {
				return false;
			}
			//
			if(!this.isUpdate){
				super.updateView();
				this.lobbyRoomBox.Show();
			}
			else{
				this.lobbyRoomBox.UpdateData();
			}
			
			if (this.isFirst) {
				//初始化房间大厅音乐
				SoundManager.PlayBGM();
				SoundManager.PlayWelcomeGame();
				//
				this.exitBtns.showAnim.play(0, false);
				var msg = JSON.stringify({ action: "game_start", gameId: AppInfoManager.GameId });
				window.top.postMessage(msg, "*");
				this.isFirst = false;
				//
				Laya.timer.once(500, this, () => {
					UIManager.getInstance().PreLoadUI(game.panel.GameRoomPanel, game.panel.GameRoomPanel.assets);
				})
			}
			// try {
			// 	//window['loadJsOver']();
				
			// }
			// catch (e) {
			// 	if (GameMain.DEBUG) console.log(e);
			// }
			return true;
		}

		/************************************************** 点击事件 *******************************************/
		protected exitBtnFunc() {
			super.exitBtnFunc();
			this.ctrl.gotoLobby();
			//this.Hide();
		}


		public resize(){
			super.resize();
			var wh = 16 / 9 + 0.01;
			if (Laya.stage.width / Laya.stage.height > wh) { //宽屏
				this.supermodel.left = 118;
			} else {
				this.supermodel.left = 16;
			}
		}


		public Show(){
			this.ctrl.addListener(this.ctrl.EVENT_SHOWROOMBOX,this,this.updateView);
			Laya.timer.loop(20000,this,this.loopReqRoomData);
			this.loopReqRoomData();
			super.Show();
		}

		public Hide(){
			this.ctrl.removeListener(this.ctrl.EVENT_SHOWROOMBOX,this,this.updateView);
			Laya.timer.clear(this,this.loopReqRoomData);
			super.Hide();
		}

		protected loopReqRoomData(){
			GameRequest.reqRoomInfo();
		}
	}
}