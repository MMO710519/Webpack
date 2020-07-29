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
        //ローダーの処理対象ファイル
        test:/\.scss$/,
        //ローダーの処理対象となるディレクトリ
        include:path.resolve(__dirname,'src/scss'),
        //sass-loader css-loader style-loaderの順で実行される
        use:[
          //HTMLに、style-loaderで変換したCSSのスタイルが記述された<style>タグを追加する
          'style-loader',
          //CSSをモジュールに変換する
          'css-loader',
          //SassをCSSにコンパイルする
          'sass-loader'
        ]
      },
      {
        //ローダーの処理対象ファイル
        test:/\.(png|jpg|gif)$/i,
        //ローダーの処理対象となるディレクトリ
        include:path.resolve(__dirname,'src/images'),
        //利用するローダー
        loader:'url-loader'
      }
    ]
  }
};
