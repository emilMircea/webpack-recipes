// load webpack
const webpack = require('webpack');
// helps making a production build smaller than dev
const nodeEnv  = process.env.NODE_ENV || 'production'
module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './scripts/app.js'
    },
    output: {
        filename: '_build/bundle.js'
    },
    module: {
        // how to handle specific types of files
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        // uglify js
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true
        }),
        // env plugin
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
        })
    ]
}
