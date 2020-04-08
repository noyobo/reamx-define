const path = require('path');

process.env.REMAX_PLATFORM = 'wechat';

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'app', 'index'),
  watch: false,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolveLoader: {
    modules: ['node_modules', path.join(__dirname, 'loaders')],
  },
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-remax'],
        },
      },
      {
        test: /.jsx?$/,
        loader: 'remax-define',
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  devtool: false,
};
