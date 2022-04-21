/**
 * 原型链继承
 * 优点：1、子类实例可继承的属性有：子类实例的构造函数的属性，父类构造函数属性，父类原型的属性。（子类实例不会继承父类实例的属性！）

缺点：1、子类实例无法向父类构造函数传参。
　　　2、继承单一。
　　　3、所有子类实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）
 */
// 1.定义父类构造函数
function Father () {
  this.property = true
}
// 2.给父类原型添加方法
Father.prototype.getFatherProperty = function () {
  return this.property
}
// 3.定义字类构造函数
function Child () {
  this.property = false
}
// 4.字类的原型等于父类的一个实例对象
Child.prototype = new Father()
//5.字类的构造器指向字类
Child.prototype.constructor = Child
// 6.给字类原型添加方法
Child.prototype.getChildProperty = function () {
  return this.property
}

let child = new Child()
console.log(child.property)

/**
 * 借用构造函数
 * 通过call()方法借用了父类的属性。call方法可以将父类中通过this指定的属性和方法复制到子类的实例中
 * call()方法借用了父类的属性，而方法都定义在构造函数中，
 * 并没有从原型上继承到夫类的属性和方法，因此没有可复用性。
 */
function FatherFn(name, age) {
  this.name = name
  this.age = age
}
function ChildFn(name,age, height) { // 传参
  FatherFn.call(this, name, age)
  this.height = height
}
let child2 = new ChildFn('tom', 18, 180) // 传参
console.log(child2.name)
/**
 * 组合继承：是一种将原型链和构造函数组合使用的方法。
 * 本质：是通过call()方法借用了父类中通过this指定的属性，而原型链继承实现了对父类原型上属性和方法的继承

  优点：融合两种模式的优点，既可以传参和复用

  缺点：会调用两次父类型的构造函数，分别是在创建子类原型的时候和在子类构造函数内部。（对应上面的4，5步）。
 * 
 */

 function Person(name,age) {
   this.name = name
   this.age = age
 }

 Person.prototype.setName = function (name) {
   this.name = name
 }

 function Student(name, age, height) { // 实现了传参
  // 借用构造函数
   Person.call(this, name, age)
   this.height = height
 }

 // 原型链继承
 Student.prototype = new Person()
 Student.prototype.constructor = Student
 Student.prototype.setHeight = function (height) {
   this.height = height
 }