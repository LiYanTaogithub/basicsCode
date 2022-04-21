// reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
/**
 * 
 * @param {*} arr 数组
 * @param {*} fn 函数
 * @param {*} accumulate 累加器
 * 
reducer 函数接收 4 个参数:
Accumulator (acc) (累计器)
Current Value (cur) (当前值)
Current Index (idx) (当前索引)
Source Array (src) (源数组)
 */
function myReduce (arr, fn, accumulate) {
  let index = 0
  if(!accumulate) {
    index = 1
    accumulate = arr[0]
  }
  for(; index < arr.length; index++) {
    let res = fn(accumulate, arr[index], index, arr)
    accumulate = res
  }
  return accumulate
}

const arr = [1, 3, 5]
console.log(myReduce(arr, (a, b) => a+b, 2)) // 11