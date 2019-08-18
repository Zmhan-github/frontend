const path = require("path");
const { ProgressPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
// const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) =>
  webpackMerge(
    {
      mode,

      entry: {
        main: "./src/js/",
        vendor: "./src/vendor.js"
      },

      externals: {
        jquery: "jQuery",
        "popper.js": "Popper"
      },

      output: {
        path: path.resolve(__dirname, "build"),
        filename: "js/[name].bundle.js",
        chunkFilename: "[name].lazy-chunk.js"
      },

      module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
          {
            test: /\.(gif|png|svg|jpe?g)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 4000,
                  name: "[sha512:hash:base64:7].[ext]",
                  outputPath: "assets/img/"
                }
              }
            ]
          },

          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          }
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({
          title: "Webpack Starter",
          filename: "index.html",
          template: "./src/index.html",
          lang: "en-US",
          scripts: [
            "http://example.com/somescript.js",
            {
              src: "/myModule.js",
              type: "module"
            }
          ]
        }),

        new ProgressPlugin()
      ]
    },

    modeConfig(mode)
    // presetConfig({ mode, presets })
  );
