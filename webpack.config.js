const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Main JavaScript entry point
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,     // Delete old files
    publicPath: '/', // Important for routing
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Handles CSS imports
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Points to main HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    // Routes fallback to index.html.
    // Must add fallback configs on
    // Apache and Nginx.
    historyApiFallback: true,
  },
  mode: 'production',
  performance: {
    // Show warning when code + assets exeeds 512 kB
    maxAssetSize: 512000, // Max js bundle size
    maxEntrypointSize: 512000,
  }
};
