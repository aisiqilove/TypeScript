// 数组的项中不允许出现其他的类型：
let fibonacci: number[] = [1, 1, 2, 3, 5];

// 使用数组泛型（Array Generic） Array<elemType> 来表示数组：
let array: Array<number> = [1, 2, 3, 4]

// fibonacci.push('8');

interface NumberArray {
  [index: number]: number;
}

let array2: NumberArray = [1, 2]

let array3: NumberArray = {}

// 类数组（Array-like Object）不是数组类型，比如 arguments：
function sumA() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}

// 常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum2() {
  let args: IArguments = arguments;
}

// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ['hello', 28, { website: 'http://licz.com' }];