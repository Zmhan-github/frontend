const path = require('path');
const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({ mode, presets } = { mode: 'production', presets: []}) =>
  webpackMerge(
    {
      mode,

      entry: './src/js/',

      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js'
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
        }),
    
        new ProgressPlugin()
      ]

    },

    modeConfig(mode)

    )

