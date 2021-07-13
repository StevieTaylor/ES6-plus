console.log('-------------------变量的生命周期和变量提升-------------------');

/**
 *   一、变量的生命周期：
 *          1. declaration声明阶段: 正在其作用域内注册变量（不同于平时所说的变量声明）
 *          2. initialization初始化阶段：正在分配内存并且为作用域内的变量创建绑定，在此阶段变量会被自动地初始化为undefined
 *          3. assignment赋值阶段：将一个值赋给已经初始化的变量
 */

/**
 *   二、var变量的生命周期:
 *          1. 声明+初始化阶段：不管var variable出现在该作用域的任何位置，都直接进入到这2个阶段
 *          2. 初始化状态：variable === undefined
 *          3. 赋值阶段：variable = 'value';
 *          4. 赋值后状态：variable = 'value';
 */
const VarLifecycle = () => {
  // 变量提升严格的说是指变量在函数作用域的开始位置就完成了声明和初始化阶段
  console.log('变量声明前:', variable);
  var variable;
  console.log('变量赋值前:', variable);
  variable = 'variable was assgined';
  console.log('变量赋值后:', variable);
};
VarLifecycle();

/**
 *   三、let变量的生命周期: (const，class和 let 具有相同的生命周期)
 *          1. step1. 声明阶段：进入作用域便立即通过此阶段，注册了变量，变量进入未初始化状态
 *          2.state1. 未初始化状态：此时 variable 处于临时死区中
 *          3. step2. 初始化阶段：let variable，变量进入已初始化状态
 *          4.state2. 已初始化状态：variable === undefined
 *          5. step3. 赋值阶段：variable = 'value'，变量进入已赋值状态
 *          6.state3. 已赋值状态：variable = 'value'
 */
const LetLifecycle = () => {
  // step1
  //   console.log('变量声明前:', variable); Cannot access 'variable' before initialization
  let variable; // step2
  console.log('变量赋值前:', variable);
  variable = 'variable was assgined'; // step3
  console.log('变量赋值后:', variable);
};
LetLifecycle();

/**
 *   四、函数function声明的生命周期：
 *          1. step1. 声明+初始化+赋值阶段：在封闭的函数作用域的开头便立刻进行这3个阶段
 *          2. state1. 已赋值状态
 */
function SumArray(array) {
  return array.reduce(Sum);
  function Sum(a, b) {
    return a + b;
  }
}
console.log(SumArray([3, 5, 8]));

/**
 *   五、总结：为什么var有变量提升而let没有(var是耦合声明，let是解耦声明)
 *          1. 变量提升是一个将 变量 或者 声明函数 提升到作用域起始处的过程
 *          2. 变量提升是变量的"耦合"声明并且在作用域的顶部完成初始化，var满足这一特征
 *          3. let 生命周期中将声明和初始化阶段进行了"解耦"
 *          4. let 的两个阶段之间的间隙创建了临时死区
 */
