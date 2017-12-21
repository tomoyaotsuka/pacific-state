const webpack = require('webpack');

module.exports = {
  entry: {
    'dist': [ 'babel-polyfill', `${__dirname}/../src/scripts/app.js` ]
  },
  output: {
    path: `${__dirname}/../`,
    filename: '[name]/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true',
            options: {
              presets: [
                [ 'env', {
                  'targets': {
                    'browsers': [
                      'last 2 versions',
                      'ie >= 9',
                      'iOS >= 10.0',
                      'Android >= 5.0'
                    ]
                  },
                  'modules': false
                }]
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      sourceMap: ( process.env.NODE_ENV === 'PRD' ) ? false : true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV )
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
