const path = require("path");
const nodeWebExternals = require("webpack-node-externals");

module.exports = {
  entry: ["regenerator-runtime/runtime", "./src/index.ts"],
  target: "node",
  watch: true,
  output: { filename: "bundle.js", path: path.join(__dirname, "build") },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: [nodeWebExternals()],
  resolve: {
    extensions: [".ts", ".js", ".json"],
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },
};
