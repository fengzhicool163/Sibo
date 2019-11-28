

module lobby.panel {

	export class GameHistoryPanel extends GameHistoryPanelBase {


		public static assets: string[] = asset.AssetConfig.GameHistoryPanel;

		protected sendReq() {
			//请求数据
			net.protocol.GameRequest.reqGameRec();
			//发送消息
			
		}

	}

}