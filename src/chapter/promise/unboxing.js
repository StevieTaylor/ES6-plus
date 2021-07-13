console.log('-------------------Promise的拆箱-------------------');

/**
 *  一、Promise回调函数中的第一个参数resolve(arg)，会对Promise执行"拆箱"动作:
 *        1. 当参数arg是普通值(比如12)时，参数的值会传到then()的第一个回调函数onfulfilled中
 *        2. 当参数arg是一个Promise对象时，resolve会"拆箱"获取这个Promise对象的状态和值，这个过程是异步的
 */

let uPromise1 = new Promise((resolve, reject) => {
  resolve(Promise.resolve('success')); // "拆箱"获取到一个fulfilled状态的promise对象
});

let uPromise2 = new Promise((resolve, reject) => {
  resolve(Promise.reject('fail')); // "拆箱"获取到一个rejected状态的promise对象
});

/**
 *  二、Promise回调函数中的第二个参数reject(arg)不具备"拆箱"的能力,
 *         reject的参数arg会直接传递给then方法中的onrejected回调
 */
let uPromise3 = new Promise((resolve, reject) => {
  reject(Promise.resolve('succeed'));
});

let uPromise4 = new Promise((resolve, reject) => {
  reject(Promise.reject('failed'));
});

uPromise1.then(
  (value) => {
    console.log('promise1 fulfilled:', value); // 执行, success
  },
  (error) => {
    console.log('promise1 rejected:', error); // 不执行
  }
);

uPromise2.then(
  (value) => {
    console.log('promise2 fulfilled:', value); // 不执行
  },
  (error) => {
    console.log('promise2 rejected:', error); // 执行, fail
  }
);

uPromise3.then(
  (value) => {
    console.log('promise3 fulfilled:', value); // 不执行
  },
  (error) => {
    console.log('promise3 rejected:', error); // 执行, Promise {<resolved>: "succeed"}
  }
);

uPromise4.then(
  (value) => {
    console.log('promise4 fulfilled:', value); // 不执行
  },
  (error) => {
    console.log('promise4 rejected:', error); // 执行, Promise {<rejected>: "failed"}
  }
);
