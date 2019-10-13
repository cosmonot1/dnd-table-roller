const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

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
            presets: [ '@babel/preset-env', '@babel/preset-react' ]
          }
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin( { template: path.resolve( __dirname, 'views', 'index.html' ) } )
  ],
  node: {
    __dirname: true
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};