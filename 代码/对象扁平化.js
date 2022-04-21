function objectFlat(obj = {}) {
  let res = {}
  function flat(item, preKey = '') {
    // Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组
    Object.entries(item).map( ([key, value]) =>{
      const newKey = preKey ? `${preKey}.${key}` : key
      if(value && typeof value === 'object' ) {
        flat(value, newKey)
      }else {
        res[newKey] = value
      }
    })
  }
  
  flat(obj)
  return res
}
// 测试
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(objectFlat(source));  // 对象扁平化.js:18 {a.b.c: 1, a.b.d: 2, a.e: 3, f.g: 2}