let UnionNumber: string | number;
UnionNumber = 'seven';
UnionNumber = 7;

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something: string | Array<any> | number): number {
  return something.length;
}

function getString(something: string | number): string {
  return something.toString();
}