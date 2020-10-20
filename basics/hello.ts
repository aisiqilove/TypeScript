let isDone: boolean = false;
let isString: string = 'string';
let number: number = 1
let symbol: symbol;
let u: undefined = undefined;
let n: null = null;

function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

// TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。

function alertName(): void {
  alert('My name is Tom');
  // return 1  // 不能将类型“number”分配给类型“void”
}

let unusable: void = undefined;

// 这样不会报错
let num: number = undefined;