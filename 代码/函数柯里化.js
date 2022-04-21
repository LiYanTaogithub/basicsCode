
/**
 * 
 *函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
 并且返回结果是接受余下的参数的新函数的技术，是高阶函数的一种用法。比如求和函数add(1,2,3), 
 经过柯里化后变成add(1)(2)(3)

 * 主要的用途，我这边大致理解是，可以将重复参数服用，将复杂的逻辑提前处理，精简代码。
 * （我们 写的bind函数也是运用了这个逻辑处理，可以接收多个参数或者先接收this，再传递参数）
 */
// 简单实现
function curry (fn, ...arg) {
    const len = fn.length // fn参数个数
    arg = arg || []
    return function (...rest) {
      // 参数收集
      const _arg = [...arg, ...rest]
      if (_arg.length < len) {
        return curry.call(this, fn, ..._arg)
      } else {
        return fn.call(this, ..._arg)
      }
    }
  }