const path=require('path');
const HtmlWebpackPlugin=require("html-webpack-plugin");
const CleanWebpackPlugin=require("clean-webpack-plugin");

module.exports={
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    devServer:{
        contentBase:'./dist'
    },
    devtool:'inline-source-map',
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({title:'开发环境'})
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    }
};