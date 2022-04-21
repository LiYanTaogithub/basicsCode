// class myPromise {
//   constructor(executorfn) {
//     this.status = 'pending'
//     this.value = ''
//     this.onFullfilledCallback = []
//     this.onRejectedCallback = []
//     this._resove = this._resove.bind(this)
//     this._reject = this._reject.bind(this)
//     try{
//       executorfn(this._resove,this._reject)
//     }catch(err){
//       this._reject(err)
//     }
//   }

//   _resove(value){
//     setTimeout( () => {
//       if(this.status === 'pending') {
//         this.status = 'fullfilled'
//         this.value = value
//         this.onFullfilledCallback.forEach(item => item(value));
//       }
//     })
//   }
//   _reject(error) {
//     setTimeout( () => {
//       if(this.status === 'pending') {
//         this.status = 'rejected'
//         this.value = error
//         this.onRejectedCallback.forEach(item => item(error))
//       }
//     })
//   }

//   then(onFullfilled, onRejected){
//     return new myPromise( (resovele, reject) => {
//       this.onFullfilledCallback.push((value) => {
//         try{
//           const res = onFullfilled(value)
//           if(res instanceof myPromise) {
//             res.then(resovele, reject)
//           }else {
//             resovele(res)
//           }
//         }catch(err) {
//           reject(err)
//         }
        
//       }) 
//       this.onRejectedCallback.push( (error) => {
//         try{
//           const reason = onRejected(error) 
//           if(reason instanceof myPromise) {
//             reason.then(resovele, reject)
//           }else {
//             reject(reason)
//           }
//         }catch(err){
//           reject(err)
//         }
//       })
//     })
//   }
//   catch(onRejected) {
//     this.then(null, onRejected)
//   }
// }

// new myPromise( resovele => {
//   setTimeout( () => {
//     resovele(1)
//   })
// }).then(res => {
//   console.log(res)
//   return new myPromise(resovele => {
//     setTimeout( () => {
//       resovele(2)
//     })
//   }).then(res => {
//     console.log(res)
//     throw new Error('a Error')
//   }).catch( err => {
//     console.log(err)
//   })
// }) 

// new
// function myNew(fn, ...args) {
//   let obj = {} 
//   obj.__proto__ = fn.prototype
//   let res = fn.apply(obj, arg)
//   if(typeof res === 'funtion' || (typeof res === 'object' && typeof res !== null)) {
//     return res
//   }else {
//     return obj
//   }
// }

// let testFn = function (name) {
//   this.name = name
//   this.sex = 'male'
// }

// let newFn = myNew(testFn, 'leah')
// console.log(newFn.name, newFn.sex)

// call
// Function.prototype.myCall = function (obj) {
//   object = obj || window
//   let arr = []
//   for(let i = 1; i < arguments.length; i++) {
//     arr.push(arguments[i])
//   }
//   object.fn = this
//   object.fn(...arr)
//   delete object.fn
// }

// let name = 'leah'

// let obj = {
//   name: 'lihh'
// }
// function test (a, b, c) {
//   console.log(a+b+c+this.name)
// }
// test.myCall(obj, '我的', '名字', '是')

// apply
// 和 call 的区别是传入的参数是一个数组 ，不用再取参数
// Function.prototype.myApply = function(obj, args) {
//   let object = obj || window
//   object.fn = this
//   if(!args) {
//     object.fn()
//   }else {
//     object.fn(...args)
//   }
// }
// let name = 'leah'
// let obj = {
//   name: 'lihh'
// }
// function test (a, b, c) {
//   console.log(a+b+c+this.name)
// }
// test.myApply(obj, ['我的', '名字', '是'])

// 防抖
// function debounce(fn, time){
//   let timer = null
//   return function(...args) {
//     if(timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout ( () => {
//       fn.apply(this, args)
//     }, time)
//   }
// }

// function test () {
//   console.log('123')
// }

// const debounceTest = debounce(test, 1000)

// window.addEventListener('scroll', debounceTest)

// 节流
// function throttle(fn, time) {
//   let flag = true
//   return function (...args) {
//     if(!flag) return 
//     flag = false
//     setTimeout( () => {
//       fn.apply(this, args)
//       flag = true
//     }, time)
//   }
// }

// function test() {
//   console.log('abc')
// }

// let throttletest = throttle(test, 1000)

// throttletest()

// function myMap(arr, fn) {
//   let newArr = []
//   for(let i = 0; i < arr.length; i ++) {
//     newArr.push(fn(arr[i]), i, arr)
//   }
//   return newArr
// }

// const arr = [1, 3, 5]
// let newarr = myMap(arr, (item) => item = item+3)
// console.log(newarr)

// 