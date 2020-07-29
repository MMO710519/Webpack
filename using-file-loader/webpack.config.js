const path=require('path');

module.exports={
  mode:'development',
  entry:'./src/js/app.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'public/js')
  },
  module:{
    rules:[
      {
        test:/\.scss$/,
        include:path.resolve(__dirname,'src/scss'),
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        //ローダーの処理対象ファイル
        test:/\.(png|jpg|gif)$/i,
        //ローダーの処理対象となるディレクトリ
        include:path.resolve(__dirname,'src/images'),
        //利用するローダー
        loader:'url-loader',
        options:{
          //画像のファイルサイズが8KB(8*1024=8192)以上だったらDataURLに変換せずに出力
          limit:8192,
          //出力するDataURLに変換しなかった画像の名前
          //[name].[ext]は[バンドル前のファイル名].[[バンドル前のファイルの拡張子]]なので
          //今回はbackground.jpgが出力される
          name:'[name].[ext]',
          //DataURLに変換しなかった画像の出力先
          //デフォルトではoutput.pathに指定したパス(今回はpublic/js)に出力される
          //今回はpublic/imagesに出力させたいため、public/jsからの相対パスを
          //指定する
          outputPath:'../images/',
          //出力されるファイルからの画像の読み込み先
        　//今回public/index.htmlかrpublic/imagesの画像を読み込みたいため、
          //以下の指定になる
          publicPath:path=>'./images/'+path
        }
      }
    ]
  }
};
