// 归并排序的思路
function mergeSort(arr){
  let length = arr.length
  if(length === 0) return [] 
  while(arr.length > 1) {
    console.log('length:',length)
    let arrayItem1 = arr.shift()
    let arrayItem2 = arr.shift()
    let mergeArr = merge(arrayItem1, arrayItem2)
    console.log('mergeArr:',mergeArr)
    arr.push(mergeArr)
    console.log('arr:',arr)
  }
  return arr[0]
}

function merge (arr1, arr2){
  let result = []
  console.log(arr1)
  console.log(arr2)
  while(arr1.length > 0 && arr2.length > 0) {
    if(arr1[0] < arr2[0]) {
      result.push(arr1.shift())
    }else {
      result.push(arr2.shift())
    }
  }
  return result.concat(arr1).concat(arr2)
}
let arr1 = [[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]];
// let arr2 = [[1,4,6],[7,8,10],[2,6,9],[3,7,13],[1,5,12]];
mergeSort(arr1);
// mergeSort(arr2);