// 将可变部分放在参数中传递
function remind_v1(callback) {
    callback();
    setTimeout(() => callback(), 2000)
}
remind_v1(() => console.log('excute callback function'));

// 处理各种情况
function remind_v2(cb) {
    cb.next('Angular');
    cb.error('type error');
    cb.complete();
}
remind_v2({
    next: (data) => console.log('It is time to learn', data),
    error: (error) => console.log('error:', error),
    complete: () => console.log('subscribe complete')
})

// 使用类来实例化
class Reminder {
    constructor(behavior) {
        this.behavior = behavior;
    }
    remind(callback) {
        this.behavior(callback);
    }
}
const reminder = new Reminder((callback) => {
    callback.next();
    callback.complete();
});
reminder.remind({
    next: () => console.log('It is time to sleep'),
    error: () => console.log('error:'),
    complete: () => console.log('subscribe complete')
})

// observable的基本定义
class Observable {
    constructor(behavior) {
        this.behavior = behavior;
    }
    subscribe(observer) {
        this.behavior(observer);
    }
}
// observable的行为逻辑
const observable$ = new Observable((callback) => {
    callback.next('Rxjs');
    callback.complete();
});
// observer的定义，接收到数据后的行为逻辑
const observer = {
    next: (data) => console.log('It is time to study', data),
    error: (error) => console.log('error:', error),
    complete: () => console.log('subscribe complete')
}
// 从observable对象中订阅数据
observable$.subscribe(observer);
