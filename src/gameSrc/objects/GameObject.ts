module game.objs {


    /** 游戏对象基类 */
    export abstract class GameObject extends common.objs.objBase{

        private _ctrl : ctrl.GameRoomCtrl = null;
        protected get ctrl(){
            if(this._ctrl == null){
                this._ctrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
            }
            return this._ctrl;
        }

        public abstract resetObj();         

    }





}
