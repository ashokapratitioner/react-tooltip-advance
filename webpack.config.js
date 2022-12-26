const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
