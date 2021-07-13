console.log('-------------------Promise的生命周期-------------------');

/**
 * 四、Promise的生命周期：有3种状态：
 *        1. pending：初始态
 *        2. fulfilled： 成功态，异步操作成功
 *        3. rejected：失败态，异步操作失败
 */
// 当Promise刚创建完成时，处于pending状态
let promise1 = new Promise((resolve, reject) => resolve(1));
// 当Promise中的函数参数执行了resolve后，Promise由pending状态变成resolved状态
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 1000);
});
// 当Promise中的函数参数执行了reject后，Promise由pending状态变成reject状态
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(3), 2000);
});
console.log(promise1); // resolved
console.log(promise2); // pending
console.log(promise3); // pending
setTimeout(() => console.log(promise2), 3000); // 3s后，变成resolved
setTimeout(() => console.log(promise3), 3000); // 3s后，变成rejected
promise1.then((v) => {
  console.log('promise1:', v);
});
promise2.then((v) => {
  console.log('promise2:', v); // 1s后执行
});
promise3.catch((v) => {
  console.log('promise3:', v); // 2s后执行
});

// // 题目
// const promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// });
// const promiseB = promiseA.then(()=>{
//   throw new Error('promise error');
// })
// console.log('promiseA', promiseA) // pending
// console.log('promiseB', promiseB)  // pending

// setTimeout(() => {
//   console.log('promiseA', promiseA) // resolved
//   console.log('promiseB', promiseB)  // rejected
// }, 2000)
