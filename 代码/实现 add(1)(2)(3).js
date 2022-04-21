const add = (a, b, c) => a + b + c;

const adding = (...args) => args.reduce((pre, cur) => pre + cur, 0);

//参数确定
const curry = (fn) => {
  let args = [];

  return function temp(...newArgs) {
    args.push(...newArgs);
    if (args.length === fn.length) {
      const val = fn.apply(this, args);
      args = [];
      return val;
    } else {
      return temp;
    }
  };
};

//参数不确定
const currying = (fn) => {
  let args = [];

  return function temp(...newArgs) {
    if (newArgs.length) {
      args.push(...newArgs);
      return temp;
    } else {
      const val = fn.apply(this, args);
      args = [];
      return val;
    }
  };
};

const curryAdd = curry(add);
console.log(curryAdd(1)(2)(3)); // 6
console.log(curryAdd(1, 2)(3)); // 6
console.log(curryAdd(1)(2, 3)); // 6

let addCurry = currying(adding);
console.log(addCurry(1)(2)(3)(4, 5)()); //15
console.log(addCurry(1)(2)(3, 4, 5)()); //15
console.log(addCurry(1)(2, 3, 4, 5)()); //15