/**
* name 
*/
module game.component {

	export abstract class GamePlayerCountDownBase extends common.component.UIBox {

		/** 所用使用该Box脚本的控件请必须遵照以下UI设置 */
		protected bindObj : ui.gameUI.GamePlayerSit.GamePlayerCDBoxUI;

		//
		private proBarStartR = 133;
		private proBarEndR = 360;
		private proDis: number = null;
		private proMaskChangeR = 240;
		private proMaskStartR = 120;
		private proMaskState0 = 240;
		private proMaskState1 = 360;
		//
		private allTime: number = 20;
		private startTime: number = null;
		//
		private isCountDownUpdate = false;
		private curProState = -1;
		private CountOverFunc: Function = null;

		//
		protected isCountDownAnim = false;
		protected actionMap = [
			true,
			true,
			true,
		];

		protected initComponents() {
			//进度条数据
			this.proDis = this.proBarEndR - this.proBarStartR;
			//
			this.resetBox();
		}

		public destroy() {
			this.resetBox();
			super.destroy();
		}

		/** 倒计时进度条刷新方法 */
		private updateCountDownRotation() {
			//刷新进度条
			var overTime = Date.now() - this.startTime;
			var proV = Math.min(1, overTime / this.allTime);
			var proR = proV * this.proDis + this.proBarStartR;
			this.bindObj.coutDownProBar.rotation = proR;
			this.updateCountDownState();
			//刷新倒计时
			var leftTime = Math.ceil((this.allTime - overTime) / 1000);
			//倒计时结束
			if (leftTime <= 0) {
				this.resetBox();
				if (this.CountOverFunc) {
					this.CountOverFunc();
				}
				return;
			}
			//显示
			if(leftTime > 3){
				this.bindObj.coutDownFont.value = leftTime.toString();
			}else{
				//动画
				if(!this.isCountDownAnim){
					this.isCountDownAnim = true;
					this.bindObj.coutDownFont.visible = false;
					this.bindObj.countDownAnim.visible = true;
					this.bindObj.countDownAnim.play(0,false,true,3 - leftTime);
				}
				//音效
				var index = leftTime % 3;
				var canAction = this.actionMap[index];
				if(canAction){
					this.actionMap[index] = false;
					this.PlayDi();
				}
			}
			
		}

		/** 更新遮罩 */
		private updateCountDownState() {
			var curProState = this.bindObj.coutDownProBar.rotation >= this.proMaskChangeR ? 1 : 0;
			if (curProState == this.curProState) return;
			this.curProState = curProState;
			var maskEndR = this["proMaskState" + curProState];
			this.bindObj.coutDownMaskSprite.graphics.clear();
			this.bindObj.coutDownMaskSprite.graphics.drawPie(0, 0, 110, this.proMaskStartR, maskEndR, "#ff0000");
		}

		/**************************************************** 子类实现 ***************************************************/

		/** 播放滴滴音方法 */
		protected abstract PlayDi();

		/** 停止播放滴滴音方法 */
		protected abstract StopDi();

		/**************************************************** 外部调用倒计时模块 ***************************************************/

		/** 关闭玩家倒计时 */
		public resetBox() {
			//
			this.isCountDownAnim = false;
			for (let index = 0; index < this.actionMap.length; index++) {
				this.actionMap[index] = true;
			}
			//
			this.isCountDownAnim = false;
			this.bindObj.countDownAnim.stop();
			this.bindObj.countDownAnim.visible = false;
			//
			this.isCountDownUpdate = false;
			this.bindObj.timer.clear(this, this.updateCountDownRotation);
			this.bindObj.coutDownProNode.visible = false;
			this.bindObj.coutDownFontNode.visible = false;
			this.bindObj.countDownProBG.visible = false;
			//
			this.StopDi();
		}

		/** 关闭玩家倒计时 */
		public clearBox() {
			this.resetBox();
		}

		/**
		 * 开始玩家倒计时
		 * @param leftTime 倒计时剩余时间
		 * @param allTime  倒计时总时间
		 */
		public setData(leftTime: number, allTime: number = 20, callBack: Function = null) {
			//
			this.allTime = allTime * 1000;
			var overTime = this.allTime - leftTime * 1000;
			this.startTime = Date.now() - overTime;
			this.CountOverFunc = callBack;
			//
			this.bindObj.coutDownFont.visible = true;
			this.bindObj.coutDownProNode.visible = true;
			this.bindObj.coutDownProBar.rotation = this.proBarStartR;
			this.bindObj.coutDownFontNode.visible = true;
			this.bindObj.countDownProBG.visible = true;
			//
			if (!this.isCountDownUpdate) {
				this.isCountDownUpdate = true;
				this.bindObj.timer.frameLoop(1, this, this.updateCountDownRotation);
			}
		}

	}

}