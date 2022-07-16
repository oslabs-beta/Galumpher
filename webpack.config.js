const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Development',
        template: path.resolve(__dirname, 'index.html'),
        })],
    target: "web",
    devServer: {
        static: {
            // publicPath: '/build',
            directory: path.resolve(__dirname, 'build'),
            },
        proxy: {
            '/': 'http://localhost:3333',
        },
            compress: true,
            port: 8080,
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: 'css-loader' },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.m?(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
                }
            },
           
        ]
      }
};