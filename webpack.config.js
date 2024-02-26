const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "entry": "./src/index.ts",
    mode: "development",
    devServer: {
        port: 3000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./public/index.html"
            }
        )],
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
}