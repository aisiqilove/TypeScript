function sum(x: number, y: number): number {
  return x + y;
}
// sum(1, 2, 3); 输入多余的（或者少于要求的）参数，是不被允许的：

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}

// 用 ? 表示可选的参数, 可选参数后面不允许再出现必需参数了, TypeScript 会将添加了默认值的参数识别为可选参数：此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName(firstName: string, lastName?: string, name: string = 'name') {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
function buildName2(firstName: string = 'name', lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tomF = buildName2('Tom');

// 剩余参数 ...rest参数
function push(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);

// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}