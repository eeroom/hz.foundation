const path = require('path')

module.exports = {
    //mode: "production",
    mode: "development",
    entry: './index.js'
    , output: {
        filename: 'bundle.js'
        , path: path.resolve(__dirname, 'dist')
    }
    , devtool: 'inline-source-map'
    //, devtool: false
    , devServer: {
        contentBase: './dist',//告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        port: 8080,
        historyApiFallback: true,//当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
        //host: "localhost",//默认localhost
        host: "192.138.56.101",//默认localhost
        //host: "192.168.1.109",//默认localhost
        inline: true,//在 dev-server 的两种不同模式之间切换
        noInfo: false,// webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。
        open: true,//打开浏览器
        https: false,
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}
