const path = require('path')
let htmlwebpackplugin=require('html-webpack-plugin')
console.log("正在执行生产环境打包")
module.exports = {
    entry: './index.js'
    , output: {
        filename: '[name].[contenthash].js'
        , path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 20*1024,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              // cacheGroupKey here is `commons` as the key of the cacheGroup
              name(module, chunks, cacheGroupKey) {
                const moduleFileName = module
                  .identifier()
                  .split('\\')
                  .reduceRight((item) => item);
                  console.log("moduleFileName",moduleFileName)
                  console.log("--------------------------------------")
                const allChunksNames = chunks.map((item) => item.name).join('~');
                console.log("allChunksNames",allChunksNames)
                return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
              },
              chunks: 'all',
            },
          },
        },
      }
    , devServer: {
        contentBase: './dist',//告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        port: 802,
        historyApiFallback: true,//当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
        host: "localhost",//默认localhost
        //host: "192.138.56.101",//默认localhost
        //host: "192.168.1.109",//默认localhost
        inline: true,//在 dev-server 的两种不同模式之间切换
        noInfo: false,// webpack 包(bundle)信息的消息将被隐藏。错误和警告仍然会显示。
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
    },
    plugins:[
      new htmlwebpackplugin({
        template:'./index.html',
        inject:true,
        publicPath:'/',
        templateParameters:{publicDate:new Date().toLocaleString()}
      })
    ]
}
