/*
 * @Author: Stevie
 * @Date: 2021-06-15 15:11:56
 * @LastEditTime: 2021-07-14 14:43:04
 * @LastEditors: Stevie
 * @Description: 章节和模块配置
 */
export const title = 'ES6+'

export const chapterMap = {
  array: {
    chapterId: 'array',
    name: '数组',
    modules: {
      arrayEs5: '数组ES5',
      reduce: 'reduce',
      flat: 'flat',
    },
    display: true,
  },
  promise: {
    chapterId: 'promise',
    name: 'Promise',
    modules: {
      promise: 'promise',
    },
    display: true,
  },
  symbol: {
    chapterId: 'symbol',
    name: 'Symbol',
    modules: {
      baseConcepts: '基本概念',
      internalSymbol: '内置的Symbol值',
    },
    display: true,
  },
  iterator: {
    chapterId: 'iterator',
    name: 'Iterator',
    modules: {
      iteratorInterface: '迭代器接口',
    },
    display: true,
  },
}
