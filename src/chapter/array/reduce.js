import { isArray } from '../../utils/type/type'
/**
 *  一、array.reduce(callback(acc, cur, index?, array?), initialValue?)
 *       callback -> reducer(accumulator, currentValue, currentIndex?, sourceArray?)，参数的含义：
 *       1. initialValue?：初始值
 *       2. accumulator：累积器，用于累积每次回调的返回值
 *       3. currentValue：当前值，数组正在处理的某个元素
 *       4. currentIndex?：当前索引
 *       5. sourceArray?：源数组
 */

/**
 *  二、有initialValue和没有initialValue的情况：
 *         1.有initialValue时，accumulator的初始取值为initialValue，currentValue为array[0]
 *         2.无initialValue时，accumulator的初始取值为array[0]，currentValue为array[1]
 */
const array = [1, 2, 3, 4]
const reducer = (accumulator, curValue, curIndex, array) => {
  return accumulator + curValue
}
console.log('无initialValue:', array.reduce(reducer)) // 10
console.log('有initialValue:', array.reduce(reducer, 10)) // 20

/**
 *  三、reduce的使用场景
 */
// 1. 求数组里所有元素的和
const ArraySum = (array) => {
  if (isArray(array)) {
    return array.reduce(function (acc, cur) {
      return acc + cur
    }, 0)
  }
}
const arr_sum = [5, 6, 7, 8, 9]
console.log(ArraySum(arr_sum)) // 35

// 2. 二维数组转化为一维数组
const Flatten = (array) => {
  return array.reduce((acc, value) => {
    return acc.concat(isArray(value) ? Flatten(value) : value)
  }, [])
}
const arr_flat = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
]
const arr_flat2 = [1, [2, 3], [4, 5, [6, 7, 8]]]
console.log(Flatten(arr_flat))
console.log(Flatten(arr_flat2))

// 3. 统计数组中每个元素出现的次数
const CountTimes = (array) => {
  return array.reduce((acc, item) => {
    if (item in acc) {
      acc[item]++
    } else {
      acc[item] = 1
    }
    return acc
  }, {})
}
let arr_names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bruce', 'Bruce']
console.log(CountTimes(arr_names))

// 4. reduce数组去重
const ArrayUnique = (array) => {
  return array.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item)
    }
    return acc
  }, [])
}
let arr_unique = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
console.log(ArrayUnique(arr_unique))

/**
 *  四、实现一个reduce
 */
Array.prototype._reduce = function (func, initialValue) {
  var array = Array.prototype.slice.call(this)
  var result
  var startIndex
  result = initialValue ? initialValue : array[0]
  startIndex = initialValue ? 0 : 1
  for (var i = startIndex; i < array.length; i++) {
    result = func.call(null, result, array[i], i, this)
  }
  return result
}
