/*
 * @Author: your name
 * @Date: 2021-01-17 16:29:32
 * @LastEditTime: 2021-01-17 23:02:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ES6-practice\src\chapter\module\es6module.js
 */
console.log('-------------------模块系统-------------------');

/**
 * - 一、ES6 模块系统
 * -        1. 出现原因：早先只有 CommonJS 用于服务器端，AMD用于浏览器
 * -        2. 设计思想：尽量静态化，编译时就能确定模块的依赖关系，以及输入和输出的变量
 * -                             而CommonJS和AMD只能在运行时确定
 *
 */
// ! 由于ES模块遵循JS严格模式，在严格模式中禁止this指向全局对象，所以在ES6模块中this指向undefined
console.log('this指向:', this); // undefined

/**
 * - 二、export命令
 * -        1. 一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取。
 * -        2. export 可以导出变量、函数、类，可以使用 as 重命名对外接口
 * -        3. export必须在文件的顶层，不能出现在块级作用域内
 */
// - 导出变量
export let variable1 = "变量1"
export let variable2 = "变量2"

// - 导出函数和类
let add = function (x, y) {
    return x + y;
}
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
// - 使用 export { } 统一导出
export { add, Person }

// - 使用 as 关键字可以重命名对外接口
function func1(x, y) {
    return x - y;
}
export { func1 as subtract }

// ! 注意：export命令规定的是对外的接口，必须与模块内部的变量建立一 一对应的关系
// export 1 ，无法直接导出值
const num1 = 1
// export num1，无法直接导出值
// * 正确写法
// * 写法一
export let num2 = 2
// * 写法二
let num3 = 3
export { num3 }
// * 写法三
let d = 4
export { d as num4 }

export function func2() { }
function func3() { }
export { func3 }

// - 输出接口与对应值是动态绑定关系
export var variable = "原始变量"
setTimeout(() => {
    variable = "改变后的变量"
}, 1000)

// ! error: 'export' may only appear at the top level
// function inside() {
//     export let a = '1'
// }

// - export 基本类型和引用类型的区别
export let string = "basic type"
export let object = {
    key1: "value1",
    key2: "value2",
}

export function returnZero() {
    return 0;
}

/**
 * - 五、export default 命令
 * -        1. 一个模块只能存在一个默认输出
 * -        2. 导入default的时候不用加 { }，也可以对default重命名
 */
// - export default 本质上输出一个叫 default 的变量/方法
export default class LoginComponent {
    constructor() { }
}

class RegisterComponent {
    constructor() { }
}
// - export default 用在非匿名类/函数前
// export default RegisterComponent

// - export default 后面不能跟变量声明语句
// export default let a = 1

export function multiply(x, y) {
    return x * y;
}
export let numA = 16
export let numB = 64

export function pow(x, y) {
    return Math.pow(x, y);
}

export function divide(x, y) {
    return x / y;
}






