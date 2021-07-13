/*
 * @Author: your name
 * @Date: 2021-01-17 22:00:02
 * @LastEditTime: 2021-01-17 22:42:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ES6-practice\src\chapter\module\ES6_module_mixin.js
 */
/**
 * - 六、import 和 export 的复合
 * -        1. 复合后，无法引用，只是转发
 * -        2. 可以改名接口，整体输出
 */
export { multiply, numA, numB } from './ES6_module'
// - 简单理解为
// - 先导入import { multiply, numA, numB } from './ES6_module'; ，
// - 再导出export { multiply, numA, numB } 

// ! multiply,numA,numB 并没有导入当前模块，只是相当于对外转发这3个接口
// console.log(multiply); // multiply is not defined

// - 接口改名
export { pow as power } from './ES6_module'

// - 整体导出
// ! 通过 export * 导出的模块不包含 default
export * from './ES6_module'