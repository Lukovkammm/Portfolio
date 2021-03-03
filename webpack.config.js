const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './src/index.js'       
    },

    output: {
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },

    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            ]
          },

          {
            test: /\.(png|svg|jpe?g)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },
            ],
          },
        ],
  },

    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './index.html'), 
          filename: 'index.html', 
        }),

        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),

        new CopyPlugin({
          patterns: [
              {
                  from: 'src/img',
                  to: 'src/img',
              },
          ],
      }),
    ] 
}