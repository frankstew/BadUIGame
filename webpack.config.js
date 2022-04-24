require("dotenv").config();
const path = require('path');

module.exports = {
  mode: "development",
  // use index.jsx as entry pt
  entry: ["@babel/polyfill", "./frontend/src/index.tsx"],
  // our whole react app will be compiled into one file, ./dist/bundle.js
  output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/"
  },
  // configuring loaders
  module: {
      rules: [
          {
              //test: /\.(js|jsx)$/,
              test: /\.tsx?$/,
              exclude: /node_modules/,
              use: {
                loader: 'ts-loader',
                //options: {
                 // presets: ["@babel/preset-env", '@babel/preset-react']
                //}
              },
              exclude: /node_modules/,
          }
      ]
  },

  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true
  },
  watch: false,
  resolve: {
      extensions: [".js",  ".jsx", ".tsx", ".ts"]
  }
};
