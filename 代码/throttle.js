function throttle(func, time) {
  let flag = true
  return function (...arg) {
    if(!flag) return
    flag = false
    setTimeout(() => {
      func.apply(this, arg)
      flag = true
    }, time);
  }
}