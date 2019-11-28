/**
* name 
*/
module game.component {
	
	export class GameMenuBox extends GameMenuBoxBase {

		protected ctrl : ctrl.GameRoomCtrl;

		protected initComponents(){
			this.ctrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
			super.initComponents();
		}
		protected exitFunc() {
			this.ctrl.exitGame();
		}

		protected historyFunc() {
			UIManager.getInstance().ShowPopUI( lobby.panel.GameHistoryPanel, lobby.panel.GameHistoryPanel.assets);
		}

		protected ruleFunc() {
			UIManager.getInstance().ShowPopUI(lobby.panel.GameRulePanel, lobby.asset.AssetConfig.GameRulePanel);
		}

		protected settingFunc() {
			UIManager.getInstance().ShowPopUI(lobby.panel.GameSettingPanel, lobby.asset.AssetConfig.GameSettingPanel);
		}

	}
}