const path = require( 'path' );
module.exports = {
  target: 'node',
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve( __dirname, 'build' ),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'babel-preset-env' ]
          }
        },
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};