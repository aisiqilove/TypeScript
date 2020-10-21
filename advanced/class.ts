// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

class Animal {
  // protected name;
  // 构造函数修饰为 private 时，该类不允许被继承或者实例化
  // 当构造函数修饰为 protected 时，该类只允许被继承
  public constructor(public readonly name) {
    this.name = name;
  }
}

let aa = new Animal('Jack');
// console.log(aa.name); // private name 类型“any[]”上不存在属性“name”

class Dog extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}

// abstract 用于定义抽象类和其中的抽象方法。
// 抽象类中的抽象方法必须被子类实现
abstract class Animal2 {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}
// let a2 = new Animal2('Jack'); // 无法创建抽象类的实例

class Cat2 extends Animal2 {   // 非抽象类“Cat2”不会实现继承自“Animal2”类的抽象成员“sayHi”。
  public eat() {
    console.log(`${this.name} is eating.`);
  }
  sayHi() {
    console.log(`${this.name} hi`)
  }
}

// 给类加上 TypeScript 的类型很简单，与接口类似
let cat: Animal2 = new Cat2('Tom');

cat.sayHi()