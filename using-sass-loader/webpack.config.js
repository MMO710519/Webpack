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
        //利用するローダー
        //sasss-loader css-loader style-loaderの順で実行される
        use:[
          //HTMLに、style-loaderで変換したtCSSのスタイルが記述された<style>タグを追加する
          'style-loader',
          //CSSをモジュールに変換する
          'css-loader',
          //SassをCSSにコンパイルする
          'sass-loader'
        ]
      }
    ]
  }
};
