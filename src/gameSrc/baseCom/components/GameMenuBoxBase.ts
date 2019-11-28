/**
* name 
*/
module game.component {
	
	export abstract class GameMenuBoxBase extends common.component.UIComponent {

		/** 所用使用该Box脚本的控件请必须遵照以下UI设置 */
		protected bindObj: ui.gameUI.GameCommonBox.GameMenuBoxUI;

		protected isMenuOpen: boolean = false;

		protected initComponents() {
			//注册点击事件
			EventManager.addTouchScaleListener(this.bindObj.bgMask, this, this.menuBtnFunc, null, 1);
			EventManager.addTouchScaleListener(this.bindObj.menuBtn, this, this.menuBtnFunc);
			EventManager.addTouchScaleListener(this.bindObj.exitBtn, this, this.exitBtnFunc);
			EventManager.addTouchScaleListener(this.bindObj.historyBtn, this, this.historyBtnFunc);
			EventManager.addTouchScaleListener(this.bindObj.ruleBtn, this, this.ruleBtnFunc);
			EventManager.addTouchScaleListener(this.bindObj.settingBtn, this, this.settingBtnFunc);
			//
			this.closeMenu();
			//
			this.resize();
		}

		/** 注册监听 */
		public initlistener() {
			//
			Laya.stage.on(Laya.Event.RESIZE, this, this.resize);
		}
		/** 注销监听 */
		public unInitlistener() {
			Laya.stage.off(Laya.Event.RESIZE, this, this.resize);
		}

		public resize() {
			var wh = 16 / 9 + 0.01;
			if (Laya.stage.width / Laya.stage.height > wh) { //宽屏
				this.bindObj.resizeNode.left = 10;
			} else {
				this.bindObj.resizeNode.left = 10;
			}
		}

		protected menuOpenFunc() {
			SoundManager.PlayClick();
			this.bindObj.menuOpenAnim.play(0, false);
		}

		protected menuCloseFunc() {
			SoundManager.PlayClose();
			this.bindObj.menuCloseAnim.play(0, false);
		}

		/************************************************** 点击事件 ********************************************/
		protected menuBtnFunc() {
			this.isMenuOpen = !this.isMenuOpen;
			if (this.isMenuOpen) {
				this.menuOpenFunc();
			} else {
				this.menuCloseFunc();
			}
		}

		protected exitBtnFunc() {
			SoundManager.PlayClick();
			this.closeMenu();
			this.exitFunc();
		}

		protected historyBtnFunc() {
			SoundManager.PlayClick();
			this.historyFunc();
			this.closeMenu();
		}

		protected ruleBtnFunc() {
			SoundManager.PlayClick();
			this.ruleFunc();
			this.closeMenu();
		}

		protected settingBtnFunc() {
			SoundManager.PlayClick();
			this.settingFunc();
			this.closeMenu();
		}

		/************************************** 外部调用接口 ********************************/
		public closeMenu() {
			if (this.bindObj.bgMask.visible) {
				this.isMenuOpen = false;
				this.bindObj.menuCloseAnim.play(0, false);
			}
		}

		/*************************************** 子类实现接口 ********************************/
		protected abstract exitFunc();
		protected abstract historyFunc();
		protected abstract ruleFunc();
		protected abstract settingFunc();
	}
}