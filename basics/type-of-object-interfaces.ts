
// Interfaces 赋值的时候，变量的形状必须和接口的形状保持一致。
// 定义的变量比接口少了一些属性是不允许的：

// 多一些属性也是不允许的：

// 可选属性 ？

// [propName: string]一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
// 可以用 readonly 定义只读属性：
interface Person {
  readonly id: number
  name: string;
  age?: number;
  gender?: string;
  // [propName: string]: any;
  [propName: string]: string | number;
}

let tom: Person = {
  id: 1,
  name: 'Tom'
};
let tom2: Person = {
  id: 1,
  name: 'Tom',
  age: 25
};
let tom3: Person = {
  id: 1,
  name: 'Tom',
  age: 25,
  gender: 'male'
};