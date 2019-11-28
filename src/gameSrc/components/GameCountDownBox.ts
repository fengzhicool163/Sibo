/**
* name 
*/
module game.component {

	export class GameCountDownBox extends GameCountDownBoxBase {

		protected PlayDi() {
			SoundManager.PlayDi();
		}		
		
		protected StopDi() {
			SoundManager.StopDi();
		}

	}
}