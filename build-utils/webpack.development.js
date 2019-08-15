const path = require('path');

module.exports = () => ({
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
 
          },
          {
            loader: 'css-loader'
       
          },
          {
            loader: 'sass-loader'
       
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000
  }
}); 