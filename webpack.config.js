const path = require("path");

module.exports = {
  mode: "development",
  devtool: "none",
  entry: ["./src/entry.m.ts"],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {                            
              configFile: "tsconfig.module.json" // Use the module project config!
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  }
};
