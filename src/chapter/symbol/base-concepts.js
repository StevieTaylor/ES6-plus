/*
 * @Author: Stevie
 * @Date: 2021-07-13 20:22:34
 * @LastEditTime: 2021-07-13 21:11:24
 * @LastEditors: Stevie
 * @Description:
 */
/**
 * - 一、 背景: ES5 的对象属性名都是字符串，这容易造成属性名的冲突
 * -      Symbol的作用: 保证独一无二的属性名, 防止属性名冲突
 */

// - 字符串Symbol
const sym_str = Symbol('string')
console.log(sym_str)

// - 对象Symbol
const obj = {
  func: () => {
    return 'function'
  },
}
const sym_obj = Symbol(obj)
console.log(sym_obj)

console.log(sym_obj.toString())

const sym1 = Symbol()
const sym2 = Symbol()
console.log('sym1 === sym2 :', sym1 === sym2)

console.log('Symbol.iterator:', Symbol.iterator)
