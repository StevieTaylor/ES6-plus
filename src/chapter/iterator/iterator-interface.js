/*
 * @Author: Stevie
 * @Date: 2021-07-13 20:07:32
 * @LastEditTime: 2021-07-14 14:58:56
 * @LastEditors: Stevie
 * @Description:
 */

function Iterator(iterable) {
  let i = 0
  return {
    next: function () {
      const done = i >= iterable.length
      const value = !done ? iterable[i++] : undefined
      return {
        value,
        done,
      }
    },
  }
}

const array = [1, 2, 3, 4, 5]
const iterator_arr = Iterator(array)
for (let i = 0; i < array.length; i++) {
  console.log(iterator_arr.next())
}

const str = 'string'
const iterator_str = Iterator(str)
for (let i = 0; i < str.length; i++) {
  console.log(iterator_str.next())
}
