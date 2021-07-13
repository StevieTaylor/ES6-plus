/*
 * @Author: your name
 * @Date: 2021-01-17 18:50:07
 * @LastEditTime: 2021-01-18 15:20:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ES6-practice\src\chapter\module\ES6_module_import.js
 */
console.log('returnZero:', returnZero());
/**
 * - 三、import命令 
 * -        1. 用 { } 接收导入的变量名
 * -        2. 可以使用 as 重命名
 * -        3. 只读性
 */
// - 必须使用 { } 包裹变量名
import variable1, { returnZero, variable2 } from './ES6_module'
console.log('variable1:', variable1); // undefined
console.log('variable2:', variable2);

import { add } from './ES6_module'
console.log('3+5=', add(3, 5));

// - 使用 as 关键字重命名导入的变量名
import { Person as ClassPerson } from './ES6_module'
let person1 = new ClassPerson('jack');
console.log('jack:', person1);

import { subtract } from './ES6_module'
console.log('5-3=', subtract(5, 3));

import { variable } from './ES6_module'
console.log('variable:', variable);

setTimeout(() => {
    console.log('0.5秒后，variable:', variable);
}, 500)

setTimeout(() => {
    console.log('1秒后，variable:', variable);
}, 1000)

// - import 命令输入的变量都是只读的，变量本身无法修改，其本质是输入接口
import { string, object } from './ES6_module'
// string = 'change';
console.log('string:', string);
// object = {};
// ! 不过对于引用类型，其属性可以修改
object.key1 = 'value1 changed';
console.log('object:', object);

// ! import是静态执行，无法使用表达式和变量
// if (flag) {
//     import './axx.js'
// } else {
//     import './bxx.js'
// }

/**
 * - 四、模块的整体加载 *
 * -        1. 语法：import * as moduleName from ''
 * -        2. 模块整体加载的对象不允许在运行时发生改变
 */
import * as ES6module from './ES6_module'
console.log('module:', ES6module);

// ES6module.returnZero = function () { }
ES6module.object.key2 = 'value2 changed'
console.log('object:', object);

// - 导入default，可以直接重命名原模块输出的变量名(函数名/类名)，且不需要加{ }
import Login from './ES6_module'
console.log('default:', Login);

// - 也可以对 default 用 as 重命名
import { default as LoginComp } from './ES6_module'
console.log('default:', LoginComp);

import { multiply, numA, numB } from './ES6_module_mixin'
console.log(`${numA}*${numB}=`, multiply(numA, numB));

import { power } from './ES6_module_mixin'
console.log('2^3=', power(2, 3));

import * as module from './ES6_module_mixin'
console.log('module without default:', module);

/**
 * - 七、模块的动态加载 import()
 * -        1. 出现背景：import语句是编译时加载，require是运行时加载，需要一个方案来实现在运行时动态加载模块
 * -        2. import() 返回一个Promise对象，运行时执行
 * -        3. 使用场景：按需加载、条件加载、动态模块路径
 */
let flag = true;
// flag = !flag;
if (flag) {
    import('./ES6_module').then((module) => {
        console.log('module:', module);
        console.log('8/2=', module.divide(8, 2));
        console.log('module.default:', module.default);
    })
}

// - 同时加载多个模块
Promise.all([
    import('./ES6_module'),
    import('./ES6_module_mixin')
]).then(([module1, module2]) => {
    console.log('module:', module1);
    console.log('module without default:', module2);
})




