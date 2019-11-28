module game.panel{
    export class GamePlayerList extends ui.gameUI.GamePanel.GamePlayerListUI{
		protected itemPool : util.PoolUtil<items.PlayerListItem>;
		protected itemList : Array<items.PlayerListItem>;
		protected gameCtrl: ctrl.GameRoomCtrl;
        protected initComponents(){
            //关闭按钮
			EventManager.addTouchScaleListener(this.closeBtn,this,this.closeBtnFunc);
			this.gameCtrl = UICtrlManager.getInstance().GetCtrl(ctrl.GameRoomCtrl);
			this.itemPool = new util.PoolUtil(items.PlayerListItem,11,11);
			this.itemList = [];
        }


			public destroy(){
			this.itemPool.destroy();
			super.destroy();
		}

		public Show(){
			super.Show();
			//请求数据
			//this.reqHistoryData();
			//
			this.updateHistoryView(this.gameCtrl.roomObj.getPlayerList());
			this.openAnim( this.bgFrame );
		}


		public Hide(){
			//清空界面
			for (let index = 0; index < this.itemList.length; index++) {
				const item = this.itemList[index];
				this.itemPool.recover(item);
			}
			this.itemList.length = 0;
			//设置节点缓存
			this.container.reCache();
			super.Hide();
		}



		protected updateHistoryView( datas:Array<any> ):void{
			//如果界面已经销毁了
			if(this.destroyed) return;
			//设置item显示
			for( var i = 0 ; i < 10 ; i++ ){
				var itemData = datas[i];
				itemData.rank = i + 1;
				//
				var item = this.itemPool.getItem();
				item.setData( itemData );
				item.pos( 25  , i * 95 );
				item.visible = true;
				//
				this.container.addChild( item );
				this.itemList.push( item );
			}
			this.updateMyself();
			//重置节点大小
			this.container.size( 971  , datas.length * 95 - 10 );
			this.container.event( "resize" );
			//设置节点缓存
			this.container.reCache();
		}

		public updateMyself(){
			var data:game.objs.PlayerObject = this.gameCtrl.getMainPlayerObj();
			this.myself.setMySelf(data);
		}
        	/******************************************************* 按钮点击事件 *********************************************/
		protected closeBtnFunc(){
			SoundManager.PlayClose();
			UIManager.getInstance().HideUI(GamePlayerList);
		}
    }
}