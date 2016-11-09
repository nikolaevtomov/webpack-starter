var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style!css") },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("css!postcss!sass") },
      { test: /\.html$/, loader: 'html' }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true
  }
};
