Function.prototype.myCall = function (obj) {
  console.log('obj', obj);
  //判断是否为null或者undefined
  object = obj || window
  // 取出参数 从 i = 1 开始就是参数
  let arr = []  
  for(let i = 1; i < arguments.length; i++ ) {
    arr.push(arguments[i])
  }
  // 也可以用这种方式取参数
  // const args = Array.from(arguments).slice(1)
  console.log('this',this);
  object.fn = this // 将fn设置成obj对象的一个属性，并让它等于this。
  object.fn(...arr)  // 执行fn
  console.log('object',object)
  delete object.fn  // 最后删除。不然会导致obj上的属性越来越多。
}

var name = 'leah'
var obj = {
    name: 'lihhh'
}
function test1 (a,b,c) {
    console.log(a + b + c + this.name);
}
//将函数test1变成了obj里面的一个方法，然后再执行这个函数，这个函数里的this就指向了obj对象
test1.myCall(obj,"我的", "名字", "是") //lihhh this指向obj
// test1.myCall(null,"我的", "名字", "是") //leah this指向window
// test1.myCall(undefined,"我的", "名字", "是") //leah this指向window