import { JudgeType } from './type';

const a = 1;
const b = 'str';
const c = false;
const d = null;
const e = undefined;
const f = Symbol('symbol');
const g = 2 ** 64;
const h = () => {};
const x = new Date();
const y = new RegExp();
const z = Math;
const o = new Error();
const p = [1, 2, 3];
const q = new Object();

console.log(a, JudgeType(a));
console.log(b, JudgeType(b));
console.log(c, JudgeType(c));
console.log(d, JudgeType(d));
console.log(e, JudgeType(e));
console.log(f, JudgeType(f));
console.log(g, JudgeType(g));
console.log(h, JudgeType(h));
console.log(x, JudgeType(x));
console.log(y, JudgeType(y));
console.log(z, JudgeType(z));
console.log(o, JudgeType(o));
console.log(p, JudgeType(p));
console.log(q, JudgeType(q));

// 以下是13种：
var number = 1; // [object Number]
var string = '123'; // [object String]
var boolean = true; // [object Boolean]
var und = undefined; // [object Undefined]
var nul = null; // [object Null]
var symbol = Symbol('symbol'); // [object Symbol]
var obj = { a: 1 }; // [object Object]
var array = [1, 2, 3]; // [object Array]
var date = new Date(); // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g; // [object RegExp]
var math = Math; // [object Math]
var func = function a() {}; // [object Function]

function checkType() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(Object.prototype.toString.call(arguments[i]));
  }
}

checkType(number, string, boolean, und, nul, symbol, obj, array, date, error, reg, math, func);
