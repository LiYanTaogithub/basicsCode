function debounce(func, time) {
  let timer = null
  return function(...arg) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, arg)
    }, time);
  }
}

const test = () =>{
  console.log('123')
}
const debounceTest = debounce(test,2000)
window.addEventListener('scroll', debounceTest)