const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {main: path.resolve(__dirname, "./app/src/index.js")},
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: production ? '[name].[contenthash].js' : '[name].js',
    publicPath: '/'
  },
  module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                  production ? MiniCssExtractPlugin.loader : 'style-loader',
                  {
                      loader: 'css-loader',
                      options: {
                          modules: true,
                          sourceMap: !production
                      }
                  },
                  {
                      loader: 'sass-loader',
                      options: {
                          sourceMap: !production
                      }
                  }
              ]
            },
            {   
              exclude: "/node_modules/",
              test: '/\.css$/',
              use: ['style-loader','css-loader'],
            },
            {
                exclude: "/node_modules/",
                test: /\.svg$/,
                use: ['file-loader'],
            },
        ],
    },
    devServer: {
      historyApiFallback: true,
    },
  resolve: {
    extensions: ["*", ".js", ".jsx",".scss"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack & React",
      template: "./app/Views/index.php",
      favicon: "./public/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  mode: 'development'
}
