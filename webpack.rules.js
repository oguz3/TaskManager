module.exports = [
  // ... existing loader config ...
  {
    test: /\.jsx?$/,
    use: {
      loader: "babel-loader",
      options: {
        exclude: /node_modules/,
        presets: ["@babel/preset-react"],
      },
    },
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  },
];
