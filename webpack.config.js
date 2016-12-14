//module.exports = require('./config/webpack.dev.js');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./config/helpers');


module.exports = {
  entry: {
    'app': ['./src/polyfills.ts', './src/vendor.ts', './src/main.ts'],
    'webworker': ['./src/workerLoader.ts']
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js'
  },

  devtool: 'eval-source-map',

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader?tsconfig=./src/tsconfig.json', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      excludeChunks: ['webworker']
    }),

    new ExtractTextPlugin('[name].css')
  ]
};