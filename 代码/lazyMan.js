/**
 * 实现一个LazyMan，可以按照以下方式调用:
    LazyMan("Hank")输出:
    Hi! This is Hank!
    
    LazyMan("Hank").sleep(10).eat("dinner")输出
    Hi! This is Hank!
    //等待10秒..
    Wake up after 10
    Eat dinner~
    
    LazyMan("Hank").eat("dinner").eat("supper")输出
    Hi This is Hank!
    Eat dinner~
    Eat supper~
    
    LazyMan("Hank").sleepFirst(5).eat("supper")输出
    //等待5秒
    Wake up after 5
    Hi This is Hank!
    Eat supper
    
    以此类推。


    首先定义一个Lazy类，它可以接收一个名称参数，可以执行一系列动作
    我们可以通过观察者模式，来向这个类订阅需要执行的事件。这个类需要统一收集起来。
    有sleepFirst功能，所以我们需要用到setTimeout的在事件队列中属于宏任务的机制。
 */


class Lazy {
    constructor(name) {
      this.name = name
      // 任务列表
      this.taskList = []
      // 将输出名称推入任务列表
      this.taskList.push(this.sayName)
      this.do()
    }
    do () {
      // 每一个任务通过setTimeout执行，这样就让sleepFirst在执行前做操作
      setTimeout(() => {
        let fn = this.taskList.shift()
        fn && fn.call(this)
      }, 0)
    }
    sayName () {
      console.log(this)
      console.log(`Hi! This is ${this.name}!`)
      this.do()
    }
    sleep (time) {
      // 插入一个睡眠任务
      this.taskList.push(() => {
        setTimeout(() => {
          console.log(`Wake up after ${time}`)
          this.do()
        }, time)
      })
      return this
    }
    sleepFirst (time) {
      // 将提前睡眠任务插入任务列表首位
      this.taskList.unshift(() => {
        setTimeout(() => {
          console.log(`Wake up after ${time}`)
          this.do()
        }, time)
      })
      return this
    }
    eat (thing) {
      this.taskList.push(() => {
        console.log(`Eat ${thing}`)
        this.do()
      })
      return this
    }
  }
  function lazyMan (name) {
    return new Lazy(name)
  }