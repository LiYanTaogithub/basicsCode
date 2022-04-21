/**
 * 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，
 * 然后写一个 myClear，停止上面的 mySetInterVal
 */
// function mySetInterVal(fn, a, b) {
//   this.a = a
//   this.b = b
//   this.time = 1
//   this.handle = -1
//   this.start = () => {
//     this.handle = setTimeout(() => {
//       fn
//       this.time++
//       this.start()
//       console.log(this.a + this.time * this.b)
//     }, this.a + this.time * this.b);
//   }
//   this.stop = () => {
//     clearInterval(this.handle)
//     this.time = 0
//   }
// }
// let a = new mySetInterVal(console.log('123'), 100, 200)
// a.start()
// a.stop()

function mySetInterVal(fn, a, b) {
  let time = 1
  let timer = null
  const loop = () => {
    timer = setTimeout(() => {
      fn()
      time++
      console.log(a+time*b)
      loop()
    }, a + time * b);
  }
  loop()
  return () => {
    clearTimeout(timer)
  }
}
const myClear = mySetInterVal(() => {console.log('abc')}, 100, 200)
setTimeout( () => {
  myClear()
},10000)