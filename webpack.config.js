const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js'
  },

  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter',
      filename: 'index.html',
      template: './src/index.html',
      lang: 'en-US',
      scripts: [
        'http://example.com/somescript.js',
        {
          src: '/myModule.js',
          type: 'module'
        }
      ],
    })
  ]
}