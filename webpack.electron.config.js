const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/electron/electron.ts',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, 'out/electron')
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  // tell webpack that we're building for electron
  target: 'electron-main',
  node: {
    // tell webpack that we actually want a working __dirname value
    // (ref: https://webpack.js.org/configuration/node/#node-__dirname)
    __dirname: false
  }
};