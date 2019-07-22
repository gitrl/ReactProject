var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app/main.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  devServer: {
    inline: true,
    historyApiFallback:true,
    disableHostCheck: true,
    port: 3000,
    // proxy: {
    //   '/data/*': {      //"/data/*"代表 localhost:3000/data/ 的请求会代理到target配置的网址
    //     target: 'http://www.weather.com.cn/',
    //     secure: false,
    //     changeOrigin: true
    //   }
    // }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test:/\.css$/,
          use:[
              'style-loader',
              'css-loader',
          ],
      },
      {
        test:/\.jpg|.png|ttf|otf|eot|woff|svg|woff2/,
        loader:'file-loader?limit=8000&name=./public/img/[hash:5].[name].[ext]'
      },
    ],
  },
  plugins: [
    //移除打包后的警告
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
