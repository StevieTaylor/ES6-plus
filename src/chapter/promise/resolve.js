console.log('-------------------Promise.resolve()-------------------');

/**
 *  Promise.resolve(arg)：可以接收一个值或者是一个Promise对象作为参数，并返回一个 fulfilled 状态的 promise对象
 *        1. 当参数arg是普通值时，它返回一个resolved状态的Promise对象，对象的值就是这个参数
 *        2. 当参数arg是一个Promise对象时，它直接返回这个Promise参数
 */

// 通过Promise.resolve()方式创建promise对象
let rPromise1 = Promise.resolve(1);
console.log(rPromise1); // resolved态
let rPromise2 = Promise.resolve(rPromise1); // 直接返回rPromise1
console.log(rPromise2); // resolved态
// 通过new的方式创建promise对象，会分配新的内存空间
let rPromise3 = new Promise((resolve, reject) => {
  resolve(1);
});
console.log(rPromise3); // resolved态
let rPromise4 = new Promise((resolve, reject) => {
  resolve(rPromise1);
});
console.log(rPromise4); // pending态

// 比较各个promise对象
console.log('rPromise1 === rPromise2 =>', rPromise1 === rPromise2); // true
console.log('rPromise1 === rPromise3 =>', rPromise1 === rPromise3); // false
console.log('rPromise1 === rPromise4 =>', rPromise1 === rPromise4); // false
console.log('rPromise3 === rPromise4 =>', rPromise3 === rPromise4); // false

rPromise4.then((value) => {
  console.log('promise4:', value);
});
rPromise2.then((value) => {
  console.log('promise2:', value);
});
rPromise1.then((value) => {
  console.log('promise1:', value);
});
rPromise3.then((value) => {
  console.log('promise3:', value);
});
