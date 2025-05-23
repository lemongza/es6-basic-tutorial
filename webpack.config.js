const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { plugin } = require("mongoose");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { app: "./js/main.js", ratefinder: "./js/ratefinder.js" },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js", //[] 안에 변수 동적으로 변환 위의 entry name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["app"],
    }),
  ],
  stats: {
    colors: true,
  },
  stats: {
    colors: true,
  },
  devServer: {
    port: 9000,
    open: true,
  },
  devtool: "source-map",
  mode: "development",
};
