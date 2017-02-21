var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/app.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, "app"),
      "node_modules" 
      ],
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
         query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        use: [
        {
            loader: "style-loader" // creates style nodes from JS strings
        }, 
        {
            loader: "css-loader" // translates CSS into CommonJS
        }, 
        {
            loader: "sass-loader" // compiles Sass to CSS
        },
        ]
      },
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
