console.log('-------------------Promise的立即执行性-------------------');

/**
 * 三、Promise的立即执行性：当Promise对象被创建时就立即执行被当作promise参数传入的函数
 *        1. Promise的构造函数是同步执行的
 *        2. promise.then()是异步执行的
 */
// 以下console.log()执行顺序是 1->2->3
let flag_execute = true;
const executor = (resolve, reject) => {
  console.log('create a new promise'); // 1
  if (flag_execute) {
    resolve('success');
  } else {
    reject('error');
  }
};
let execute = new Promise(executor); // 1.promise对象创建时, executor()方法被立即执行
execute.then((value) => console.log('status:', value)); // 3.异步方法后执行
console.log('execute synchronized function'); // 2.同步方法

// 以下代码的打印顺序是: 1->2->4->3
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
