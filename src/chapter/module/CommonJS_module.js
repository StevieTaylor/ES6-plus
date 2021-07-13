/*
 * @Author: your name
 * @Date: 2021-01-17 17:24:19
 * @LastEditTime: 2021-07-13 17:30:34
 * @LastEditors: Stevie
 * @Description: In User Settings Edit
 * @FilePath: \ES6-practice\src\chapter\module\CommonJS_module.js
 */
// - 通过CommonJS方式的加载实质是整体加载了fs整个模块，生成了一个对象
// let { stat, readFile } = require('fs')
// console.log('stat:', stat);
// console.log('readFile:', readFile);

// // 等同于
// let _fs = require('fs')
// let _stat = _fs.stat;
// let _readFile = _fs.readFile;
// console.log('_stat:', _stat);
// console.log('_readFile:', _readFile);
