function deepClone (obj) {
  // 简单类型直接返回
  if(! obj instanceof Object) return obj
  // 函数类型
  if(obj instanceof Function) {
    return function () {
      return obj.apply(this, arguments)
    }
  }
  // 日期类型
  if(obj instanceof Date) return new Date(obj)
  // 正则
  if(obj instanceof RegExp) return new RegExp(obj.source, obj.flags)
  //数组或对象
  const res = Array.isArray(obj) ? [] : {}
  Object.keys(obj).map( key => {
    if(obj[key] instanceof Object) { // 如果里面的属性还是对象就递归clone
      res[key] = deepClone(obj[key])
    }else {
      res[key] = obj[key]
    }
  })
  return res
}
let obj1 = {
  a: {
      c: /a/,
      d: undefined,
      b: null
  },
  b: function () {
      console.log(this.a)
  },
  c: [
      {
          a: 'c',
          b: /b/,
          c: undefined
      },
      'a',
      3
  ]
}
let obj2 = deepClone(obj1);
// console.log(obj2)
// obj2.c[0].a='aaaa'
console.log(obj1,obj2);
const testObj = {
  name: 'Jack',
  meta: {
    age: 12,
    birth: new Date('1997-10-10'),
    ary: [1, 2, { a: 1 }],
    say() {
      console.log('Hello');
    }
  }
}
const newCloneObj = deepClone(testObj)
console.log(newCloneObj)
// console.log(newCloneObj.meta.ary[2] === testObj.meta.ary[2]); // false
// console.log(newCloneObj.meta.birth === testObj.meta.birth); // false


// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上


function deepClone(){
  let hashMap = {}
  let instanceof Object 

  // 简单类型直接返回
  if(! obj instanceof Object) return obj
  // 函数类型
  if(obj instanceof Function) {
    return function () {
      // return function
      return obj.apply(this, arguments)
    }
  }
  // 日期类型
  if(obj instanceof Date) return new Date(obj)
  // 正则
  if(obj instanceof RegExp) return new RegExp(obj.source, obj.flags)
  //数组或对象
  const res = Array.isArray(obj) ? [] : {}
  Object.keys(obj).map( key => {
    if(obj[key] instanceof Object) { // 如果里面的属性还是对象就递归clone
      if(hashMap[obj[key]]) return false
      res[key] = deepClone(obj[key])
    }else {
      res[key] = obj[key]
    }
  })
  return res
}
// 解决循环引用问题
function isObject(obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}
function cloneDeep(source, hash = new WeakMap()) {
if (!isObject(source)) return source;
if (hash.has(source)) return hash.get(source); // 新增代码，查哈希表

var target = Array.isArray(source) ? [] : {};
hash.set(source, target); // 新增代码，哈希表设值

for (var key in source) {
  if (Object.prototype.hasOwnProperty.call(source, key)) {
    if (isObject(source[key])) {
      target[key] = cloneDeep(source[key], hash); // 新增代码，传入哈希表
    } else {
      target[key] = source[key];
    }
  }
}
return target;
}
