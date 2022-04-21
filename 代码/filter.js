// 用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：
function myFilter(arr, fn){
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    // 执行过滤函数，返回 true 表示该元素通过测试，保留该元素
    if(fn(arr[i], i, arr)) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const arr = [1, 3, 5, 7, 9]
let newarr = myFilter(arr , (item) => item > 5)
console.log(newarr)