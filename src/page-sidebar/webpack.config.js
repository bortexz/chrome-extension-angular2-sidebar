var webpack = require("webpack");
var isProdBuild = process.env.npm_lifecycle_event === 'build-prod';
module.exports = {
  entry: {
    "vendor": "./src/vendor",
    "app": "./src/boot"
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.ts/,
        loaders: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loader: 'raw'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=./dist/images/[name].[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "./dist/vendor.bundle.js"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': isProdBuild ?
        JSON.stringify('production') :
        JSON.stringify('development')
      }
    })
  ]
};
