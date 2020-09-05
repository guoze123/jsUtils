const path = require("path");
// 压缩 js
let UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
let webpack = require("webpack");
module.exports = {
  mode: "production",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "utils.js",
    libraryTarget: "umd",
    library: "library",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  optimization: {
    // 压缩优化
    minimizer: [
      new UglifyjsWebpackPlugin({
        cache: true, // 是否缓存
        parallel: true, // 并发编译
        sourceMap: true, // 启动源码映射
      }),
    ],
  },
};
