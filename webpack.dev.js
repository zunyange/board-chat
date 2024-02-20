const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  // devtool: "eval",
  devServer: {
    historyApiFallback: true,
    // port: 3000,
    hot: true,
    static: "./dist",
    proxy: {
      "/api/": {
        target: "http://192.168.0.76:8000",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api": "/api" },
      },
      "/chat/": {
        target: "http://192.168.0.76:8000",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/chat": "/chat" },
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // This plugin is optional if using Webpack Dev Server >= v4 where HMR is automatically enabled
  ],
  devtool: "inline-source-map",
});
