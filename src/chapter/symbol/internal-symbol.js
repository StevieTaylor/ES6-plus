/*
 * @Author: Stevie
 * @Date: 2021-07-13 21:13:26
 * @LastEditTime: 2021-07-13 21:32:14
 * @LastEditors: Stevie
 * @Description: 内置Symbol值
 */
console.log('Symbol.iterator :>> ', Symbol.iterator)

const obj = {
  prop1: '属性1',
  prop2: '属性2',
  prop3: '属性3',
}
// const obj_iterator = obj[Symbol.iterator]
// console.log(obj_iterator.next())

const arr = [1, 'str', true, undefined, null, Symbol('symbol')]
const arr_iterator = arr[Symbol.iterator]()
for (let i = 0; i <= arr.length; i++) {
  console.log(arr_iterator.next())
}
