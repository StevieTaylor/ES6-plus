/*
 * @Author: Stevie
 * @Date: 2021-07-13 21:13:26
 * @LastEditTime: 2021-07-14 14:32:26
 * @LastEditors: Stevie
 * @Description: 内置Symbol值
 */
console.log('Symbol.iterator :>> ', Symbol.iterator)

// ! 对象没有部署iterator接口, 因为对象是无序的
const obj = {
  prop1: '属性1',
  prop2: '属性2',
  prop3: '属性3',
}
// const obj_iterator = obj[Symbol.iterator]
// console.log(obj_iterator.next())

/**
 * @description: 目前已经部署iterator接口的有 数组、字符串、类数组、Set、Map
 * @param {*}
 * @return {*}
 */

// - 1.数组
const arr = [1, 'str', true]
const arr_iterator = arr[Symbol.iterator]()
for (let i = 0; i < arr.length; i++) {
  console.log('array :>> ', arr_iterator.next())
}

// - 2.字符串
const str = 'str'
const str_iterator = str[Symbol.iterator]()
for (let i = 0; i < str.length; i++) {
  console.log('string :>> ', str_iterator.next())
}

// - 3.arguments类数组
function getArguments() {
  const args_iterator = arguments[Symbol.iterator]()
  for (let i = 0; i < arguments.length; i++) {
    console.log('arguments :>> ', args_iterator.next())
  }
}
getArguments(1, 2, 3)

// - 4. Set, value是key的值
const set_city = new Set()
set_city.add('suzhou', '苏州')
set_city.add('hangzhou', '杭州')
set_city.add('yangzhou', '扬州')
const set_iterator = set_city[Symbol.iterator]()
for (let i = 0; i < set_city.size; i++) {
  console.log('set :>> ', set_iterator.next())
}

// - 5. Map, value是数组 [k,v]
const job_map = new Map()
job_map.set('sale', '销售')
job_map.set('technology', '技术')
job_map.set('design', '设计')
const map_iterator = job_map[Symbol.iterator]()
for (let i = 0; i < job_map.size; i++) {
  console.log('map :>> ', map_iterator.next())
}
