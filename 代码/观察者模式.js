// 一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。
class Subject {
  constructor() {
    this.observers = []
  }
  add(observer) {
    this.observers.push(observer)
  }
  notify(...arg) {
    this.observers.forEach(observer => observer.updata(arg))
  }
}

class Observer{
  updata(...arg) {
    console.log(arg)  // do somothing
  }
}

const sub = new Subject()  /* 系统 */
sub.add(new Observer())    /* 张三点了预约 */
sub.add(new Observer())    /* 李四点了预约 */
sub.notify()       /* 双十一了，通知所有点了预约的人来抢货了 */