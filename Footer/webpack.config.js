const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: "development",
    devServer: {
        port: 3002
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'footer',
            filename: 'remoteEntry.js',
            exposes: {
                './FooterIndex': './src/index'
            }
        })
    ]
}