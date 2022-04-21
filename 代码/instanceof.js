/**
 * 
 * @param {*} instance 实例对象
 * @param {*} constructor 构造函数
 */
function isInstanceOf (instance, constructor) {
  let proto = instance.__proto__
  let prototype = constructor.prototype
  while(true ) {
    if(proto === null) return false
    if(proto === prototype ) return true
    proto = proto.__proto__
  }
}

class Parent {}
class Child extends Parent {}
const child = new Child()
console.log(isInstanceOf(child, Parent), isInstanceOf(child, Child), isInstanceOf(child, Array));
