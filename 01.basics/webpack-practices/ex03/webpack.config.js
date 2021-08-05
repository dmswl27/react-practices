const path = require('path');

module.exports = {
    mode:'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 9999,
        inline: true,    //감시하는 memory를 읽어줌
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback : true
    }
}