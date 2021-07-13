console.log('-------------------Promise的异常处理-------------------');

/**
 *  Promise的异常处理：
 *        1. 异常由then参数中第二个回调函数（Promise执行失败的回调）处理，异常信息将作为Promise的值
 *        2. 异常一旦得到处理，then返回的后续Promise对象将恢复正常
 *        3. 使用catch处理异常
 */

let ePromise1 = new Promise((resolve, reject) => {
  foo.func();
  resolve('ePromise1');
});

ePromise1
  .then(
    (value) => {
      console.log('promise1 first then:', value); // 这里不执行
    },
    (error) => {
      console.log('promise1 first error:', error.message); // 执行
    }
  )
  .then(
    (value) => {
      console.log('promise1 second then:', value); // undefined
    },
    (error) => {
      console.log('promise1 second error:', error); // 不执行
    }
  );

let ePromise2 = new Promise((resolve, reject) => {
  resolve('ePromise2');
});

ePromise2
  .then(
    (value) => {
      console.log('promise2 first then:', value); // 这里执行
      foo.func();
    },
    (error) => {
      console.log('promise2 first error:', error); // 不执行
    }
  )
  .then(
    (value) => {
      console.log('promise2 second then:', value); // 不执行
    },
    (error) => {
      console.log('promise2 second error:', error.message); // 执行
      return 'ePromise2';
    }
  )
  .then(
    (value) => {
      console.log('promise2 third then:', value); // 执行
    },
    (error) => {
      console.log('promise2 third error:', error); // 不执行
    }
  );

let ePromise3 = new Promise((resolve, reject) => {
  throw new Error('error');
});

// 使用catch处理异常
ePromise3
  .then((value) => {
    console.log('promise3 then:', value);
  })
  .catch((error) => {
    console.log('promise3 catch:', error.message);
  });
// 功能上等效于
ePromise3.then(null, (error) => {
  console.log('promise3 then:', error.message);
});
