const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  process.env.NODE_ENV = (env && env.NODE_ENV) || "development";
  return {
    entry: path.resolve(__dirname, "asset_src/index.js"),
    devtool: "source-map",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "public/assets"),
      publicPath: "/assets/",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                plugins: ["transform-class-properties"],
              },
            },
          ],
        },
        {
          test: /\.((s[ac]ss)|(css))$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: "css-loader" },
            { loader: "postcss-loader" },
            { loader: "sass-loader" },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve("asset_src/images"),
            to: path.resolve("./public/assets/images"),
          },
        ],
      }),
    ],
  };
};
