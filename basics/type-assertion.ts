// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish) {
  // if (typeof animal.swim === 'function') {
  //   return true;
  // }
  // return false;
  return animal.name
}

// index.ts:11:23 - error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.
//   Property 'swim' does not exist on type 'Cat'.

// 需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：

function isFish2(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    return true;
  }
  return false;
}
let run = function () {
  console.log(123)
}
function swim(animal: Cat | Fish) {
  (animal as Fish).swim();
}

swim({ name: '123', run })


class ApiError extends Error {
  code: number = 0;
}
class HttpError extends Error {
  statusCode: number = 200;
}

function isApiError(error: Error) {
  if (error instanceof ApiError) {
    return true;
  }
  return false;
}

// 上面的例子中，确实使用 instanceof 更加合适，因为 ApiError 是一个 JavaScript 的类，能够通过 instanceof 来判断 error 是否是它的实例。


// 此时就只能用类型断言，通过判断是否存在 code 属性，来判断传入的参数是不是 ApiError 了：
interface ApiError extends Error {
  code: number;
}
interface HttpError extends Error {
  statusCode: number;
}

function isApiError2(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true;
  }
  return false;
}


function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tomas = getCacheData('tom') as Cat;
tomas.run();

// 类型断言的限制
// 从上面的例子中，我们可以总结出：

// 联合类型可以被断言为其中一个类型
// 父类可以被断言为子类
// 任何类型都可以被断言为 any
// any 可以被断言为任何类型

{
  // 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
  interface Animal {
    name: string;
  }
  interface Cat {
    name: string;
    run(): void;
  }

  function testAnimal(animal: Animal) {
    return (animal as Cat);
  }
  function testCat(cat: Cat) {
    return (cat as Animal);
  }
}

// 双重断言
// 使用双重断言，则可以打破「要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可」的限制，将任何一个类型断言为任何另一个类型。
// 除非迫不得已，千万别用双重断言。

{
  interface Cat {
    run(): void;
  }
  interface Fish {
    swim(): void;
  }

  function testCat2(cat: Cat) {
    return (cat as any as Fish);
  }
}

// 类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除：

// 类型断言 vs 类型声明 核心区别
// animal 断言为 Cat，只需要满足 Animal 兼容 Cat 或 Cat 兼容 Animal 即可
// animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行

