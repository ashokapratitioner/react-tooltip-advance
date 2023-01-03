const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require("./package.json");

const libraryName = pkg.name;

module.exports = {
  entry: path.join(__dirname, "./index.js"),
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./dist"),
    library: libraryName,
    libraryTarget: "umd",
    publicPath: "/dist/",
    umdNamedDefine: true,
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      assets: path.resolve(__dirname, "assets"),
    },
  },
  devtool: "inline-source-map",
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "react-tooltip.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
