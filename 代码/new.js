function myNew (fn, ...arg) {
  // 创建一个空的实例对象
  let obj = {} 
  // 空的实例对象的_proto 属性指向构造函数的prototype属性
  obj._proto = fn.prototype
  // 通过apply call 改变this指向，并调用
  let res = fn.apply(obj, arg) 
  // 判断返回值如果是function或者object就直接返回
  if(typeof res === 'function' || (typeof res === 'object' && res !== null )) {
    return res
  }else { // 否则返回对象本身
    return obj
  }
}

var Fun=function(sex){
  this.name='hty';
  this.sex=sex;
}
const fun=myNew(Fun,'123');
console.log(fun.name);//hty
console.log(fun.sex);//123