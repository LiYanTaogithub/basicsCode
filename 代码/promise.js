// 建议阅读 [Promises/A+ 标准](https://promisesaplus.com/)
class MyPromise {
  constructor(func) {
    this.status = 'pending'
    this.value = null //  成功的结果或者失败的原因
    this.resolvedTasks = [] //成功的回调
    this.rejectedTasks = [] //失败的回调
    this._resolve = this._resolve.bind(this)
    this._reject = this._reject.bind(this)
    try {
      func(this._resolve, this._reject)     // 在Promise中构造函数立马执行，同时将resolve函数和reject函数作为参数传入
    } catch (error) {
      this._reject(error)
    }
  }

  // 这里为什么要用setTimeout将它变为异步执行呢？因为如果不用setTimeou这种方式的话，若Promise里面的代码是同步代码，
  // 在执行到reject或者resolve的时候，还没有执行then，所以数组里还没有值，这个时候调用的话不会报错但是不会输出任何结果，
  // 用setTimeout转为异步的话，会先去执行then方法，将回调收集到数组里，然后再去执行异步任务，这个时候就有值了

  _resolve(value) {
    // 实践中要确保 onFulfilled 和 onRejected ⽅方法异步执⾏行行，
    //且应该在 then ⽅方法被调⽤用的那⼀一轮事件循环之后的新执⾏行行栈中执⾏行行。
    // 只能是pending状态的时候才能更改状态
    if(this.status === 'pending'){
      setTimeout(() => {
        this.status = 'fulfilled'
        this.value = value
        this.resolvedTasks.forEach(t => t(value))
      })
    }
    
  }

  _reject(reason) {
    // 只能是pending状态的时候才能更改状态
    if(this.status === 'pending'){
      setTimeout(() => {
        this.status = 'reject'
        this.value = reason
        this.rejectedTasks.forEach(t => t(reason))
      })
    }
    
  }

  // 当Promise的状态改变之后，不管成功还是失败，都会触发then回调函数。
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.resolvedTasks.push((value) => {
        try {
          const res = onFulfilled(value)
          if (res instanceof MyPromise) {
            res.then(resolve, reject)
          } else {
            resolve(res)
          }
        } catch (error) {
          reject(error)
        }
      })
      this.rejectedTasks.push((value) => {
        try {
          const res = onRejected(value)
          if (res instanceof MyPromise) {
            res.then(resolve, reject)
          } else {
            reject(res)
          }
        } catch (error) {
          reject(error)
        }
      })
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// 测试
new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 500);
}).then((res) => {
    console.log(res);
    return new MyPromise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, 500);
    });
  }).then((res) => {
    console.log(res);
    throw new Error('a error')
  }).catch((err) => {
    console.log('==>', err);
  })
