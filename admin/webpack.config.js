const webpack = require('webpack');
const webpackHtmlPlugin = require('webpack-html-plugin');

const port = process.env.PORT || 3000;

module.exports = {
mode: 'development',
entry: './src/index.js',
output: {
filename: "master.[hash].js"
}, //end;
devtool: 'inline-source-map',
module: {
rules: [
// js rule
{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
//css rule
{ test: /\.(css)$/, use: [
{ loader: 'style-loader' }, // use style loader
{ loader: 'css-loader',
options: {
modules: true,
localsConvention: 'camelCase',
sourceMap: true
} } // use css loader

] },//end
]
}, //end;
plugins: [
new webpackHtmlPlugin({
template: 'public/index.html',
favicon: 'public/favicon.ico'
})
], //end;
devServer: {
host: 'localhost',
port: port,
historyApiFallback: true,
open: true
} //end;
};//end;