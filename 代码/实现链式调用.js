// 链式调用的核心就在于调用完的方法将自身实例返回
class Person {
  handle() {
    console.log('先洗手')
    return this
  }
  eat() {
    console.log('再吃饭')
    return this
  }
  drink() {
    console.log('喝点水')
    return this
  }
  sleep() {
    console.log('睡觉')
  }
}

const myDay = new Person() 
myDay.handle().eat().drink().sleep()