function recurtionFlat (arr = []) {
  let res = []
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      res.push(...recurtionFlat(arr[i]))
    }else {
      res.push(arr[i])
    }
  }
  return res
}

function recurtionFlat2 (arr = []) {
  let res= []
  return arr.reduce((res, item) =>{
    return res.concat( Array.isArray(item) ? recurtionFlat2(item) : item)
  }, [])
}

const source = [1, 2, [3, 4, [5, 6]], '7']
console.log(recurtionFlat(source))
console.log(recurtionFlat2(source))