const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');


const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: mode,

  entry: {
    app: './src/index.js',
    //react: './src/React/index.js'
    //'admin-panel': './src/admin-panel-css.css', // (another css file)
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].bundle.js'
  },

  plugins: [

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img/", to: "img" },
        // { from: "src/fonts/", to: "fonts" },
      ]
    }),

    new ImageminPlugin({
      disable: (mode !== 'production'),
      externalImages: {
        context: '.',
        sources: glob.sync('src/images/**/*.{png,jpg,jpeg,gif,svg}'),
        destination: './images',
        fileName: '[name].[ext]'
      }
    }),

    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: ('production' === mode),
    }),

    /**
     * Enable if you are creating a single page app
     */
    // new HtmlWebpackPlugin({
    //   template: 'src/index.html'
    // }),

  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.[s]?css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
          }
        ]
      },

      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }




    ]
  },
  devtool: 'source-map',

  // devServer: {
  //   contentBase: path.join(__dirname, 'bulid'),
  //   compress: true,
  //   port: 3000,
  // },

}
