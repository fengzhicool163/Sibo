module common.panel {
    export class LoadingMask extends ui.commonUI.Panels.LoadingMaskUI {

        public static readonly assets = asset.AssetConfig.LoadingMask;
        //private isDone: boolean = true;
        private isTimeEnd: boolean = false;
        private m_percent: number = 0;
        protected initComponents() {

        }
        public Show() {
            if (GameMain) console.log("LoadingMask Show");
            this.loadNode.visible = false;
            this.showLabel(false);
            this.isTimeEnd = false;
            this.m_percent = 0;
            Laya.timer.once(1000, this, this.showLoading);
            this.visible = true;

        }

        public Hide() {
            //if (GameMain) console.log("LoadingMask Hide");
            Laya.timer.clear(this, this.showLoading);
            this.loadNode.visible = false;
            this.showLabel(false);
            this.visible = false;
            this.m_percent = 0;
            this.isTimeEnd = false;

        }

        public onProgress(num: any) {
            //if (GameMain.DEBUG) console.log("Loadingmask onProgress=============>", num);
            //this.labelNode.visible = true;
            if (!this.isTimeEnd) return;
            //this.isDone = false;
            this.m_percent = num;
            if (num >= 1) {
                //this.isDone = true;
                this.showLabel(false);
            }
            this.showLabel(true);
            //if (GameMain.DEBUG) console.log("LoadingMash showLoading================333>", this.labelNode.visible);
            var n: any = num.toFixed(2);
            this.progress.text = n * 100 + "%";
        }

        /**
       * 显示Loading遮罩
       * @param showMask 
       */
        public static Show(showMask: boolean = true) {
            UIManager.getInstance().ShowMaskUI(LoadingMask, LoadingMask.assets, this, (ui) => {
                //ui.showLabel(showMask, false);

            })
        }

        /**
         * 隐藏Loading遮罩
         * @param destroy 
         */
        public static Hide(destroy: boolean = false) {
            UIManager.getInstance().HideUI(LoadingMask, destroy);
        }

        public showLabel(show: boolean = true) {
            this.labelNode.visible = show;
        }

        public showLoadNode(show: boolean = false) {
            this.loadNode.visible = show;
        }
        /** 1.2秒后展示*/
        protected showLoading() {
            this.loadNode.visible = true;
            this.isTimeEnd = true;
            //console.log("LoadingMash showLoading================4444", this.m_percent);
            if (this.m_percent >= 1) {

                this.showLabel(false);
                //if (GameMain.DEBUG) console.log("LoadingMash showLoading================1111>", this.labelNode.visible);
            }
            /* else {
                 this.showLabel(true);
                 if (GameMain.DEBUG) console.log("LoadingMash showLoading================222>", this.labelNode.visible);
             }*/

        }
    }
}