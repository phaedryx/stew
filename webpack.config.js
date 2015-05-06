var path    = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  contentBase: __dirname + "/assets/",
  entry: {
    head: "./assets/javascripts/head",
    application: "./assets/javascripts/application"
  },
  output: {
    path: path.join(__dirname, "public/js"),
    publicPath: "public/js/",
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
  },
  alias: {
    foundation: "../node_modules/foundation-sites"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.scss$/, loader: "style!css!sass?includePaths[]=./node_modules/foundation-sites/scss/" },
      { test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
}
