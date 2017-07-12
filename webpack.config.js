var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.ts',

    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js'
    },

    module: {
        loaders:
        [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true']
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.join(process.cwd(), 'app')
        ),
        new CopyWebpackPlugin([    
            { from: 'node_modules/core-js/client/shim.min.js' },
            { from: 'node_modules/zone.js/dist/zone.min.js' }
        ])
    ],

    resolve: {
        extensions: ['.ts', '.js']
    }
};
