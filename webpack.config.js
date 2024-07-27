const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { readFileSync } = require('fs');

// Function to handle HTML template inclusion
function includeHtmlParts(filePath) {
    const html = readFileSync(filePath, 'utf8');
    return html.replace(/<include src="(.+?)"><\/include>/g, (match, p1) => {
        const partPath = path.resolve(__dirname, 'src', p1);
        return readFileSync(partPath, 'utf8');
    });
}

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        filename: 'js/main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            sources: {
                                list: [
                                    {
                                        tag: 'img',
                                        attribute: 'src',
                                        type: 'src',
                                    },
                                    {
                                        tag: 'use',
                                        attribute: 'href',
                                        type: 'src',
                                    },
                                ],
                            },
                        },
                    }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img',
                            name: '[name].[ext]',
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: includeHtmlParts('./src/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css',
        }),
        new WebpackAssetsManifest({
            output: path.resolve(__dirname, 'dist/manifest.json'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/img', to: 'img' }
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,
        hot: true,
    },
};

