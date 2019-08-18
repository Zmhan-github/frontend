const path = require("path");

module.exports = () => ({
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 3000
  }
});
