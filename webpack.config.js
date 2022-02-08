const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'production',
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml|wav)$/i,
        use: "file-loader"
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../")
    }),
    new webpack.DefinePlugin({
      PROD: JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      flash: path.resolve(__dirname, 'src/flash/'),
      Animations: path.resolve(__dirname, 'src/animations/')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
