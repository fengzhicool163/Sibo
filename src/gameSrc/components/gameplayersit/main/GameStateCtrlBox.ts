/**
* name 
*/
module game.component {

	import GamePlayerStage = gameenum.GamePlayerStage;
	import PlayerAllowActions = gameenum.PlayerAllowActions;
	import GameRequest = net.protocol.GameRequest;

	export class GameStateCtrlBox extends common.component.UIComponent {

		/** 按钮顺序List */
		protected static btnSortList: string[] = [
			PlayerAllowActions.GZYZ,
			PlayerAllowActions.CHANGE_TABLE,
			PlayerAllowActions.START_PLAY,
			PlayerAllowActions.LOOK,
			PlayerAllowActions.COMPARE,
			PlayerAllowActions.ABANDON,
		];

		protected bindObj: ui.gameUI.GameCtrlBox.GameStateCtrlBoxUI;

		protected playerObj: game.objs.PlayerObject;

		protected spaceX = 5;
		protected sortList: Laya.Image[];
		protected btnMap: any = {};

		protected initComponents() {
			//初始化控件
			this.sortList = [];
			//点击事件
			EventManager.addTouchScaleListener(this.bindObj.reMatchBtn, this, this.reMatchBtnFunc);
			EventManager.addTouchScaleListener(this.bindObj.foldBtn, this, this.foldBtnFunc);
			EventManager.addTouchScaleListener(this.bindObj.oneBtn, this, this.oneBtnFunc);
			EventManager.addTouchScaleListener(this.bindObj.lookCardBtn, this, this.lookCardBtnFunc);
			EventManager.addTouchScaleListener(this.bindObj.readyBtn, this, this.readyBtnFunc);
			EventManager.addTouchScaleListener(this.bindObj.compareBtn, this, this.compareBtnFunc);
			//按钮映射
			this.btnMap[PlayerAllowActions.START_PLAY] = this.bindObj.readyBtn;
			this.btnMap[PlayerAllowActions.CHANGE_TABLE] = this.bindObj.reMatchBtn;
			this.btnMap[PlayerAllowActions.LOOK] = this.bindObj.lookCardBtn;
			this.btnMap[PlayerAllowActions.ABANDON] = this.bindObj.foldBtn;
			this.btnMap[PlayerAllowActions.GZYZ] = this.bindObj.oneBtn;
			this.btnMap[PlayerAllowActions.COMPARE] = this.bindObj.compareBtn;
			//

		}


		/** 隐藏所有按钮 */
		protected hideAllbtn() {
			for (const key in this.btnMap) {
				this.btnMap[key].visible = false;
				this.btnMap[key].disabled = true;
			}
		}

		/** 更新操作按钮状态 */
		public updateGameStateCtrlBox(playerObj: game.objs.PlayerObject) {
			this.hideAllbtn();
			this.sortList.length = 0;
			this.playerObj = playerObj;
			//刷新按钮显示
			if (!playerObj || !playerObj.allowActionsMap) return;
			//刷新按钮显示
			for (let index = 0; index < GameStateCtrlBox.btnSortList.length; index++) {
				const allowName = GameStateCtrlBox.btnSortList[index];
				var btn = this.btnMap[allowName];
				var openKey = playerObj.allowActionsMap[allowName];
				var touchKey = !playerObj.allowActionsMap[allowName];
				btn.visible = openKey;
				btn.disabled = touchKey;
				if (openKey) this.sortList.push(btn);
			}
			//按钮排序
			if (this.sortList.length == 0) return;
			var orX = 0;
			for (let index = 0; index < this.sortList.length; index++) {
				const btn = this.sortList[index];
				orX += btn.width / 2;
				btn.x = orX;
				orX += btn.width / 2 + this.spaceX;
			}
			//
			this.bindObj.visible = true;
		}


		public resetBox() {
			for (let index = 0; index < GameStateCtrlBox.btnSortList.length; index++) {
				const allowName = GameStateCtrlBox.btnSortList[index];
				var btn = this.btnMap[allowName];
				btn.visible = false;
			}
			this.bindObj.visible = false;
		}


		public TimeEndUpdate() {
			this.bindObj.lookCardBtn.disabled = true;
			this.bindObj.compareBtn.disabled = true;
			this.bindObj.foldBtn.disabled = true;
			this.bindObj.oneBtn.disabled = true;
			this.bindObj.readyBtn.disabled = true;
			this.bindObj.reMatchBtn.disabled = true;
		}
		/************************************************** 操作按钮点击事件 ***************************************************/

		protected reMatchBtnFunc() {
			SoundManager.PlayClick();
			GameRequest.reqChangeTable();
			//
			var action = new game.action.ForceChangtable();
			action.doActionWithData();
		}

		protected foldBtnFunc() {
			SoundManager.PlayClick();
			GameRequest.reqAbandon();
		}

		public oneBtnFunc() {
			SoundManager.PlayClick();
			GameRequest.reqLastFight();
			if (!this.playerObj) return;
			this.playerObj.localStage = GamePlayerStage.Compared;
		}

		protected lookCardBtnFunc() {
			SoundManager.PlayClick();
			GameRequest.reqLookCard();
		}

		protected readyBtnFunc() {
			SoundManager.PlayClick();
			GameRequest.reqReadyGame();
		}

		protected compareBtnFunc() {
			SoundManager.PlayClick();
			//
			var action = new game.action.SelectComparePlayer();
			action.doActionWithData();
		}
	}
}