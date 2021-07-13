var class2type = {};

'Boolean Number String Symbol Function Array Date RegExp Math Object Error'.split(' ').map(function(item, index) {
  class2type['[object ' + item + ']'] = item.toLowerCase();
});

function type(obj) {
  if (obj == null) {
    return obj + '';
  }
  return typeof obj === 'object' || typeof obj === 'function' ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj;
}

export function JudgeType(type) {
  if (type == null) {
    return type + '';
  }
  if (typeof type === 'object' || typeof type === 'function') {
    return class2type[Object.prototype.toString.call(type)] || 'object';
  } else {
    return typeof type;
  }
}

export function isNull(n) {
  return type(n) === 'null';
}

export function isUndefined(u) {
  return type(n) === 'undefined';
}

export function isNumber(num) {
  return type(num) === 'number';
}

export function isString(str) {
  return type(str) === 'string';
}

export function isBoolean(b) {
  return type(b) === 'boolean';
}

export function isSymbol(sym) {
  return type(sym) === 'symbol';
}

export function isArray(array) {
  return type(array) === 'array';
}

export function isDate(date) {
  return type(date) === 'date';
}

export function isRegExp(regexp) {
  return type(regexp) === 'regexp';
}

export function isMath(math) {
  return type(math) === 'math';
}

export function isObject(object) {
  return type(object) === 'object';
}

export function isFunction(func) {
  return type(func) === 'function';
}

export function isError(error) {
  return type(error) === 'error';
}
