/*
 * @Author: Stevie
 * @Date: 2021-06-14 22:20:58
 * @LastEditTime: 2021-07-13 17:42:22
 * @LastEditors: Stevie
 * @Description: 主入口文件
 */
import './styles/index.css'
import { chapterMap } from './utils/constant'
import { title } from './utils/constant'

const rootNode = document.getElementById('root')
const titleNode = document.createElement('h1')
titleNode.innerHTML = title
titleNode.style.borderBottom = '1px solid #BBBFCA'
titleNode.style.paddingBottom = '10px'
rootNode.appendChild(titleNode)

/**
 * @description: 加载章节
 * @param {*} chapterMap
 * @return {*}
 */
function loadChapter(chapterMap = {}) {
  for (const key in chapterMap) {
    if (Object.hasOwnProperty.call(chapterMap, key) && chapterMap[key].display) {
      const container = document.createElement('div')
      container.className = key
      const subtitleNode = document.createElement('h2')
      subtitleNode.innerHTML = chapterMap[key].name
      container.appendChild(subtitleNode)
      const ulistNode = document.createElement('ul')
      ulistNode.id = key
      container.appendChild(ulistNode)
      rootNode.appendChild(container)
    }
  }
}

/**
 * @description: 加载模块
 * @param {*} modules
 * @param {*} chapterId
 * @return {*}
 */
function loadModule(modules = {}, chapterId = '') {
  const chapterNode = document.getElementById(`${chapterId}`)
  for (const key in modules) {
    if (Object.hasOwnProperty.call(modules, key)) {
      const liNode = document.createElement('li')
      const anchorNode = document.createElement('a')
      anchorNode.innerHTML = modules[key]
      anchorNode.href = `#${key}`
      anchorNode.rel = 'noopener'
      anchorNode.className = 'module'
      anchorNode.addEventListener('click', () => {
        const moduleName = key.replace(/([A-Z])/g, '-$1').toLowerCase()
        import(`./chapter/${chapterId}/${moduleName}`)
          .then((res) => {
            res && console.log(`%cModule [${moduleName}] load successfully...`, 'color:#28DF99')
          })
          .catch((err) => {
            err && console.error(`%cModule [${moduleName}] load failed...`, 'color:#E8505B')
          })
      })
      liNode.appendChild(anchorNode)
      chapterNode.appendChild(liNode)
    }
  }
}
loadChapter(chapterMap)
loadModule(chapterMap.array.modules, chapterMap.array.chapterId)
loadModule(chapterMap.promise.modules, chapterMap.promise.chapterId)
