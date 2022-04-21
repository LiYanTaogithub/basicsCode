// 对数组中的每一个元素执行这个函数，返回执行后的结果
function myMap (arr, fn) {
  let newArr = []  // 要返回一个执行后新的数组
  for(let i = 0; i < arr.length; i ++) {
    newArr.push(fn(arr[i], i, arr))
  }
  return newArr
}

const arr = [1, 3, 5]
let newarr = myMap(arr , (item) => item=item+5)
console.log(newarr)


function myMap(arr, fn){
  let newArr = []
  for(let i = 0; i < arr.length; i++ ){
    newArr.push(fn(arr[i]), i, arr)
  }
  return newarr
}

Array.prototype.myMap = (fn, context) {
  let newArr = []
  for(let i = 0; i < arr.length; i++ ){
    newArr.push(fn(arr[i]), i, arr)
  }
  return newarr 
}
arr.myMap = () => {

}


