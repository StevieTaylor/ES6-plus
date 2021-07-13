console.log('-------------------Promise的概念-------------------');

/**
 * 一、Promise解决的开发痛点：地狱回调
 */
// 地狱回调的问题：1.代码臃肿 2.可读性差 3.耦合度过高，可维护性差 4.代码复用性差 5.容易产生 bug 6.只能在回调里处理异常
// promise可以支持多个并发的请求，获取并发请求中的数据

/**
 * 二、Promise，异步编程的解决方案之一
 *        从语法上讲，promise是一个对象，从它可以获取异步操作的消息
 *        从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。
 */
var flag = true;
let promise = new Promise((resolve, reject) => {
  if (flag) {
    resolve('成功');
  } else {
    reject('失败');
  }
});
promise.then((v) => v).catch((e) => console.error(e));

/**
 * 用promise加载图片
 * @param {*} imgSrc
 */
const loadImage = (imgSrc) => {
  const promise = new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject('Load image failed');
    };
    img.src = imgSrc;
  });
  return promise;
};

// 用promise.then()完成结果的处理
// 用promise.catch()去捕获所有的异常
let src_right = 'https://angular.cn/assets/images/logos/angular/logo-nav@2x.png';
let src_wrong = 'https://angular.cn/assets/images/logos/angular/logo-nav.png';
let result = loadImage(src_right);
result
  .then((img) => {
    console.log('-------------------Promise的应用-------------------');
    console.log('image width:', img.width);
    return img; // 注意要return
  })
  .then((img) => {
    console.log('image height:', img.height);
  })
  .catch((exception) => {
    console.error(exception);
  });

// promise的串联
let src_react = 'https://www.tslang.cn/assets/images/examples/react.png';
let src_angular = 'https://www.tslang.cn/assets/images/examples/angular.png';
let src_vue = 'https://www.tslang.cn/assets/images/examples/vue.png';
let res_react = loadImage(src_react);
let res_angular = loadImage(src_angular);
let res_vue = loadImage(src_vue);

res_react
  .then((img) => {
    console.log('React logo,width:', img.width);
    return res_angular;
  })
  .then((img) => {
    console.log('Angular logo,height:', img.height);
    return res_vue;
  })
  .then((img) => {
    console.log('Vue logo,width:', img.src);
  })
  .catch((e) => {
    console.exception(e);
  });

// Promise.all()
let src_nodejs = 'https://www.tslang.cn/assets/images/examples/node.png';
let src_reactNative = 'https://www.tslang.cn/assets/images/examples/react-native.png';
let res_nodejs = loadImage(src_nodejs);
let res_reactNative = loadImage(src_reactNative);

Promise.all([res_nodejs, res_reactNative])
  .then((imgs) => {
    console.log('Node.js logo,width:', imgs[0].width, '--all');
    console.log('React Native logo,height:', imgs[1].height, '--all');
  })
  .catch((e) => {
    console.exception(e);
  });

// Promise.race()
Promise.race([res_reactNative, res_nodejs]).then((img) => {
  console.log('Nodejs logo first', img.src, '--race');
});
