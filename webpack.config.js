const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: {
    javascript: './index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      { 
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          { 
          loader: 'file-loader',
        // options: {
        //   //name: '[path][name].[ext]',
        //   outputPath: 'images',
        // }, 
          },
        ],
      },
    ],
  },
};
