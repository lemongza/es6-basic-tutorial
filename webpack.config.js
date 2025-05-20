const path = require("path");

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
  stats: {
    colors: true,
  },
  devtool: "source-map",
  mode: "development",
};
