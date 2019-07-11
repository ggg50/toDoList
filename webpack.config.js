
const path = require('path');

module.exports = {
  mode: 'development',
  // mode: 'production',
  devServer: {
    contentBase: './dist'
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map'
};
