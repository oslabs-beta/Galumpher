//we want to add the webpack dev server back in to auto render and we want to add the nodemon 
//to be able to make updates to the server with out restarting 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: process.env.NODE_ENV,
    entry: './main.js',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        test: /\.m?(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },]
    },
    externals: ['fsevents'],
    output: {
      path: __dirname + '/dist',
      filename: 'main.js'
    },
  },
  {
    mode: process.env.NODE_ENV,
    entry: './src/index.tsx',
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        test: /\.m?(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },]
    },
    output: {
      path: __dirname + '/dist',
      filename: 'electron.js'
    },
    externals: ['fsevents'],
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]
  }
];
