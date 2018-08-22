const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {

  const IS_DEVELOPMENT = argv.mode === 'development';

  return {
    entry: {
      'index': './src/scripts/index.js'
    },
    output: {
      path: path.resolve(__dirname, '../dist/scripts'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            }
          ]
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: IS_DEVELOPMENT,
                minimize: true,
                importLoaders: 2
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: IS_DEVELOPMENT,
                plugins: [
                  require('autoprefixer')({grid: true})
                ]
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: IS_DEVELOPMENT,
              }
            }
          ]
        }
      ]
    },
    devtool: IS_DEVELOPMENT ? 'inline-source-map' : 'none',
    devServer: {
      contentBase: [
        path.resolve(__dirname, '../dist/'),
        path.resolve(__dirname, '../dist/images/'),
        path.resolve(__dirname, '../dist/styles/'),
      ],
      publicPath: '/scripts/',
      compress: true,
      open: true,
      openPage: '',
      watchContentBase: true
    },
    // devServer: {
    //   contentBase: path.join(__dirname, '../../../../'),
    //   publicPath: '/gb/assets/countdown/js/',
    //   compress: true,
    //   open: true,
    //   openPage: 'gb',
    //   watchContentBase: true
    // },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'initial',
            enforce: true
          },
          vendorModules: {
            test: /src\/scripts\/modules/,
            name: 'modules',
            chunks: 'initial',
            enforce: true
          }
        }
      },
      minimizer: [
        new UglifyJSPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true,
            }
          }
        })
      ]
    }
  };
};
