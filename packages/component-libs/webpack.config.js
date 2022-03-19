const path = require('path');
// const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/i,
        type: 'asset',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlPlugin],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
};
