/**
①接收一个 Promise 实例的数组或具有 Iterator 接口的对象作为参数
②这个方法返回一个新的 promise 对象，
③遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
④参数所有回调成功才是成功，返回值数组与参数顺序一致
⑤参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。
 */

 
function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    if(!Array.isArray(promises)){
        throw new TypeError(`argument must be a array`)
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedResult = [];
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value=>{
        resolvedCounter++;
        resolvedResult[i] = value;
        if (resolvedCounter === promiseNum) {
            return resolve(resolvedResult)
        }
      },error=>{
        return reject(error)
      })
    }
  })
}

function promiseAll2(promises){
  return new Promise(function (resolve, reject) {
    if(!Array.isArray(promises)){
      throw new Error('arguments must be a array')
    }
    let resolvedCounter = 0, promiseNum = promises.length, promiseResult = [];
    for(let i = 0; i < promiseNum; i++){
      Promise.resolve(promises[i]).then((res) => {
        resolvedCounter ++,
        promiseResult[i] = res
        if(resolvedCounter === promiseNum){
          return resolve(resolvedResult)
        }
      }, err => {
        reject(err)
      })
    }
  })
  
}

// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})

function allSettled(promises){
  return new Pormise((resolve, reject) =>{
    const result = []
    const length = promises.length;
    let handle = 0
    promises.forEach((promise, index) => {
      promise.resolve(promise).then((value) => {
        result[i] = {
          status: 'fulfilled',
          value,
        }
        handle++
        if(handle === length){
          resolve(result)
        }
      }, err => {
        result[i] = {
          status: 'rejected',
          err,
        }
        handle++
        if(handle === length){
          resolve(result)
        }
      })
    })
  })
}