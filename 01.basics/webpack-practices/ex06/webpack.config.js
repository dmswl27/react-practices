const path = require('path');

module.exports = {
    mode:'none',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename:'assets/images/[hash][ext]'    // [hash][ext] hash이름의 ext 확장자 
    },
    module: {
        rules: [{
            test: /\.(png|gif|jpe?g|ico|tiff?|bmp|svg)$/i,
            type: 'asset/resource'
        },{
            test: /\.(sa|sc|c)ss$/i,
            use:['style-loader', 'css-loader','sass-loader']
        }]
    },
    devtool:"eval-source-map",
    devServer: {
        contentBase: path.resolve('public'),
        watchContentBase: true,
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}

/**
 * file-loader는 5버전에 없어짐
 * {
            test: /\.svg$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/images',
                name: '[name].[ext]'
            }
        }
 */