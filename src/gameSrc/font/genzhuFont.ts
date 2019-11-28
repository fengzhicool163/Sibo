


module game.font {
    /*
    * 位图字体 game.font.genzhuFont
    *注意：素材要保持高度一致
    *要设置了text后才能正常获取宽和高
    */
    export class genzhuFont extends common.font.BitmapFont {

        constructor() {
            super(asset.AssetConfig.GenzhuFont);
            this._spacing = 3;
        }

    }
}