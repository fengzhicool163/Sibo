/**
* name 
*/
module game.component {
	export abstract class GameCountDownBoxBase extends common.component.UIBox {
		

		/** 所用使用该Box脚本的控件请必须遵照以下UI设置 */
		protected bindObj : ui.gameUI.GameCommonBox.GameCountDownBoxUI;

		protected countDownTime : number = 0;

		protected countDownStartTime : number = 0;

		protected isUpdate = false;

		protected isCountDownAnim = false;

		protected actionMap = [
			true,
			true,
			true,
		];

		protected initComponents() {
			//初始化显示
			this.resetBox();
		}

		public destroy(){
			this.resetBox();
			super.destroy();
		}
		
		/************************************** 倒计时逻辑 ****************************************************/

		protected countDownUpdateFunc(){
			var overTime = Date.now() - this.countDownStartTime;
			var leftTime = this.countDownTime - overTime;
			if(leftTime <= 0) {
				this.resetBox();
				return;
			}
			leftTime = Math.ceil(leftTime / 1000);
			//显示
			if(leftTime > 3){
				this.bindObj.countDownNum.value = leftTime.toString();
			}else{
				//动画
				this.bindObj.countDownNum.value = leftTime.toString();
				if(!this.isCountDownAnim){
					this.isCountDownAnim = true;
					//this.bindObj.countDownNum.visible = false;
					//this.bindObj.countDownAnim.visible = true;
					//this.bindObj.countDownAnim.play(0,false,true,3 - leftTime);
					
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

		protected countDownStartFunc(){
			this.countDownStartTime = Date.now();
			this.bindObj.countDownNum.visible = true;
			this.bindObj.visible = true;
			this.countDownUpdateFunc();
			if(!this.isUpdate){
				this.bindObj.timerLoop(100,this,this.countDownUpdateFunc);
			}
		}

		/**************************************************** 子类实现 ***************************************************/

		/** 播放滴滴音方法 */
		protected abstract PlayDi();

		/** 停止播放滴滴音方法 */
		protected abstract StopDi();

		/*********************************** 外部调用接口 ************************************************/
		public resetBox() {
			//
			this.StopDi();
			//
			this.bindObj.countDownNum.value = "0";
			this.bindObj.slabel.text = "";
			//
			this.isCountDownAnim = false;
			//this.bindObj.countDownAnim.stop();
			//this.bindObj.countDownAnim.visible = false;
			//
			for (let index = 0; index < this.actionMap.length; index++) {
				this.actionMap[index] = true;
			}
			//
			this.bindObj.clearTimer(this,this.countDownUpdateFunc);
			this.bindObj.visible = false;
		}

		public clearBox() {
			this.resetBox();
		}

		/**
		 * 倒计时
		 * @param countDownTime 单位秒
		 */
		public setData( countDownTime : number ,state:number) {
			this.resetBox();
			this.setState(state);
			this.countDownTime = countDownTime * 1000;
			this.countDownStartFunc();
		}

		public setState(state:number){
			if(state==1){
				this.bindObj.slabel.text = "准备中";
			}
			else if(state == 2){
				this.bindObj.slabel.text = "下注中";
			}
			else if(state == 3){
				this.bindObj.slabel.text = "开奖中";
			}
			else{
				this.bindObj.slabel.text = "结算中";
			}
		}
	}
}