module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [ 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [ 'sass-loader'],
      },

    ]
  }
};