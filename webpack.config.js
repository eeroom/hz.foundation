const path = require('path')

module.exports = {
    mode: "development",
    entry: './index.js'
    , output: {
        filename: 'bundle.js'
        , path: path.resolve(__dirname, 'dist')
    }
    ,devtool: 'inline-source-map'
    , devServer: {
        contentBase: './dist',
        historyApiFallback: true
    }
    , module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
            , { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
            , {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    }
}
