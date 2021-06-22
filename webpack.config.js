const path = require('path');

const html = require('html-webpack-plugin');
const mini = require('mini-css-extract-plugin');
const terser = require('terser-webpack-plugin');

const webpack = (environment) => {
  return {
    entry: './resources/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      clean: true,
      filename: '[name].[fullhash:8].js',
      publicPath: 'http://127.0.0.1' + environment.publicPathPort
    },
    module: {
      rules: [
        {
          use: [
            'babel-loader'
          ],
          test: /^.*\.jsx?$/,
          exclude: /node_modules/
        },
        {
          use: [
            mini.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ],
          test: /^.*\.sass$/,
          exclude: /node_modules/
        },
        {
          test: /^.*\.pug$/,
          use: 'pug-loader'
        }
      ]
    },
    plugins: [
      new html({
        template: './application/views/index.pug'
      }),
      new mini({
        filename: '[name].[fullhash:8].css'
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new terser({
          terserOptions: {
            format: {
              comments: false
            }
          },
          extractComments: false
        })
      ],
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}

module.exports = webpack;