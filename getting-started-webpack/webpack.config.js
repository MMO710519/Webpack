//output.pathに指定するパスがOSによって異なることを
//防ぐためにpathモジュールを読み込んでおく
const path=require('path');

module.exports={
  //モードの設定(モードを指定しないとwebpack実行時に警告が出る)
  mode:'development',//開発用モード
  //エントリーポイントの設定(モジュール間の依存関係の解析を開始するファイルのこと)
  entry:'./src/js/app.js',
  //出力の設定
  output:{
    //出力するファイル名
    filename:'bundle.js',
    //出力先のパス(絶対ペスを指定しないとエラーが出るので注意)
    path: path.resolve(__dirname,'public/js')
  }
};
