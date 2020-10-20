
// Interfaces 赋值的时候，变量的形状必须和接口的形状保持一致。
// 定义的变量比接口少了一些属性是不允许的：

// 多一些属性也是不允许的：
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom'
};
let tom2: Person = {
  name: 'Tom',
  age: 25
};
let tom3: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};