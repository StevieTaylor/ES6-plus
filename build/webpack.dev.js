/*
 * @Author: Stevie
 * @Date: 2021-06-14 23:10:50
 * @LastEditTime: 2021-07-08 17:23:20
 * @LastEditors: Stevie
 * @Description: 
 */
const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const base = require('./webpack.base')

const devConfig = {
  mode: 'development',
  devServer:{
    contentBase: path.resolve(__dirname,'../dist'),
    port: 8000,
    host: 'localhost',
    compress:false,
    open: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(base,devConfig);