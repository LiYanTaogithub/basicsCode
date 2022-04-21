Function.prototype.myApply = function (obj, arr) {
  //判断是否为null或者undefined
  let object = obj || window
  // 将fn设置成obj对象的一个属性，并让它等于this。
  object.fn = this
  // 判断参数并执行
  if(!arr) {
    object.fn()
  }else {
    object.fn(...arr)
  }
}

var name = 'leah'
    var obj = {
        name: 'lihhh'
    }
    function test1 (a,b,c) {
        console.log(a + b + c + this.name);
    }
 //将函数test1变成了obj里面的一个方法，然后再执行这个函数，这个函数里的this就指向了obj对象
test1.myApply(obj,["我的", "名字", "是"]) //lihhh this指向obj
test1.myApply(null,["我的", "名字", "是"]) //leah this指向window
test1.myApply(undefined,["我的", "名字", "是"]) //leah this指向window