// 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：
// 合并的属性的类型必须是唯一的
// 类的合并与接口的合并规则一致。
interface Alarm2 {
  price: number;
  alert(s: string): string;
}
interface Alarm2 {
  weight: number;
  alert(s: string, n: number): string;
}

interface Alarm2 {
  price: number;
  weight: number;
  alert(s: string): string;
  alert(s: string, n: number): string;
}
