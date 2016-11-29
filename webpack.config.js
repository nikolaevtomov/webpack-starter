var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {

  devtool: "eval",
  context: __dirname + "/app",

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index.js'
  ],

  output: {
    filename: "/bundle.js",
    publicPath: "/",
    path: __dirname + "/dist"
  },

  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: "babel?cacheDirectory=true",
        include: __dirname + "/app",
        exclude: /(node_modules)/
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style!css") },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("css!postcss!sass") },
      { test: /\.html$/, loader: "html" }
    ]
  },

  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ],

  devServer: {
    contentBase: __dirname + "/app",
    historyApiFallback: true
  }

};
