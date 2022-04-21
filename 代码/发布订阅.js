class Observer {
  event = {} 
  // 订阅
  on(eventName, eventFn) {
    if(!this.event[eventName]) {
      this.event[eventName] = []
    }
    this.event[eventName].push(eventFn)
  }
  // 发布
  emit(eventName, eventMsg) {
    if(this.event[eventName]) {
      this.event[eventName].forEach(element => {
        element[eventMsg]
      });
    }
  }
  // 取消
  off(eventName, fn) {
    if(this.event[eventName]) {
      // 若fn不传, 直接取消该事件所有订阅信息
      const newEvent = fn ? this.event[eventName].filter( item => item !== fn) : []
      this.event[eventName] = newEvent
    }
  }
}
const eventEmitter = new Observer()
eventEmitter.on('fileSucess', function(eventMsg){
  console.log('1查看数据库数据')
})
eventEmitter.on('fileSucess', function(eventMsg){
  console.log('2查看数据库数据')
})
eventEmitter.on('fileSucess', function(eventMsg){
  console.log('3查看数据库数据')
})