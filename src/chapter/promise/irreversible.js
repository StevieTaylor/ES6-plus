console.log('-------------------Promise的不可逆性-------------------');

/**
 *  Promise的不可逆性：Promise状态的一旦变成fulfilled或rejected时，Promise的状态和值就固定下来了
 *        1. pending初始态->fulfilled成功态
 *        2. pending初始态->rejected失败态
 */
let iPromise1 = new Promise((resolve, reject) => {
  resolve('success');
  reject('failed');
});
let iPromise2 = new Promise((resolve, reject) => {
  reject('failed');
  resolve('success');
});
let iPromise3 = new Promise((resolve, reject) => {
  resolve('step1 success');
  resolve('step2 success');
});
iPromise1.then((v) => {
  console.log(v); // success
});
iPromise2.catch((v) => {
  console.log(v); // failed
});
iPromise3.then((v) => {
  console.log(v); // step1 success
});
