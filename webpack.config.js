var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  context: __dirname + "/app",
  entry: "./index.js",
  output: {
    filename: "/bundle.js",
    publicPath: '/',
    path: __dirname + "/dist"
  },

  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: "babel?cacheDirectory=true",
        exclude: /(node_modules)/
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style!css") },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("css!postcss!sass") },
      { test: /\.html$/, loader: "html" }
    ]
  },

  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],

  devServer: {
    contentBase: __dirname + "/app",
    historyApiFallback: true
  }

};
