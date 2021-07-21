const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "async" // Todo
    },
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin({
        cache: true
      })
    ]
  },
  devtool: false,
});