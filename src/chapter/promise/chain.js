console.log('-------------------Promise的链式调用与then方法-------------------');

/**
 *  Promise的链式调用基于then方法：
 *        1. then()方法返回1个新的promise对象，因此可以进行链式调用
 *        2. then(onfulfilled,onrejected): 接收2个参数，第一个参数是Promise执行成功时的回调，第二个参数是Promise执行失败时的回调
 *        3. then()方法中的2个参数只会执行其中一个函数
 *        4. 回调的返回值return可以是3种情况之一:
 *            4.1.  return 同步值 或者 undefined
 *            4.2.  return 另一个promise对象
 *            4.3.  throw 同步异常
 *        5. promise链的重要特征是链中的 promise 能够向下一个 promise 传递数据
 */
let cPromise = new Promise((resolve, reject) => {
  resolve(1);
});
cPromise
  .then((value) => {
    console.log('value:', value); // 1
    return value * 2; // 当return同步值时，then方法返回一个resolved状态的promise对象，且resolve(value)的value等于被return的同步值
  })
  .then((value) => {
    console.log('value:', value); // 2
    // return undefined;
  })
  .then((value) => {
    console.log('value:', value); // undefined，因为上个then没有返回值，等效于return undefined
    return Promise.resolve('success'); // return另一个 Promise，then方法将根据这个Promise的状态和值创建一个新的Promise对象返回
  })
  .then((value) => {
    console.log('resolve:', value); // resolve,
    return Promise.reject('failed');
  })
  .then(
    (value) => {
      console.log('resolve: ', value); // 这里不会走，因为上一个return的是一个rejected状态的Promise对象
    },
    (value) => {
      console.log('reject: ', value); // failed
    }
  );
console.log(Promise.resolve('resolved status'));
console.log(Promise.reject('rejected status'));

let cPromise2 = new Promise((resolve, reject) => {
  reject(8);
});
cPromise2
  .catch((v) => {
    console.log('rejected value:', v);
    return v + 1;
  })
  .then((v) => {
    console.log('fulfilled value:', v);
  });
