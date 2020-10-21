// 实现（implements）是面向对象中的一个重要概念。
// 一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），
// 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。
interface Alarm {
  alert(): void;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

// 接口与接口之间可以是继承关系
interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}

class Car implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car light on');
  }
  lightOff() {
    console.log('Car light off');
  }
}

// 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的
// 当声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）。
// 在接口继承类的时候，也只会继承它的实例属性和实例方法
class Point {
  /** 静态属性，坐标系原点 */
  static origin = new Point(0, 0);
  /** 静态方法，计算与原点距离 */
  static distanceToOrigin(p: Point) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
  }
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  /** 实例方法，打印此点 */
  printPoint() {
    console.log(this.x, this.y);
  }
}

interface PointInstanceType2 {
  x: number;
  y: number;
  printPoint(): void;
}

// 声明的 PointInstanceType 类型，与声明 class Point 时创建的 Point 类型是等价的。
interface PointInstanceType {
  x: number;
  y: number;
}

// 等价于 interface Point3d extends PointInstanceType2
interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3, printPoint: () => {} };

function printPoint(p: PointInstanceType) {
  console.log(p.x, p.y);
}

printPoint(new Point(1, 2));