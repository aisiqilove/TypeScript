// # 原始数据类型
let tsNum: number = 123
let tsStr: string = 'AAA'
let tsFlag: boolean = true
let tsNull: null = null
let tsUndefined: undefined = undefined

// # void空值

function tsVoid(): void {
    console.log('void')
}

let tsVoid2: void = undefined
// let tsVoid3: void = null
// tsVoid2 = null

// void、null和undefined
// 1. void类型的变量只能赋值为undefined和null？
// 2. null和undefined是所有类型的子类型，可以赋值给任意类型

// # 任意值 Any
let tsAny: any = 123
tsAny = '123'

// 不指定类型，ts会自动推断类型为any
let tsValue
tsValue = 123
tsValue = '123'

// # 类型注解和类型推断
// 1. 类型注解：我们来告诉TS变量是什么类型
// 2. 类型推断：TS会自动的去尝试分析变量的类型

let tsNum1 = 123
// tsNum1 = '123'
let tsNum2 = 456
let tsSum = tsNum1 + tsNum2
// 推断出tsSum 为number类型
// tsSum = '123'

function tsSum1(a: number, b: number): number {
    return a + b
}

function tsSum2(a: number, b: number) {
    return a + b
}

// 建议：尽量不要使用类型推断，因为TS无法分析函数返回值的类型
// 如果需要定义函数结构，最好加上类型注解
// 如果函数没有返回值，最好设置void类型
// 始终为函数的参数和返回值设置类型

// # 联合类型
// 联合类型（Union Types）表示取值可以为多种类型中的一种

let tsUnion: string | number
tsUnion = 123
tsUnion = '123'


// 联合类型的时候，只能访问此联合类型的所有类型里共有的属性或方法
function tsGetString(str: string | number): string {
    return str.toString()
}

function tsGetLength(str: string | number): number {
    // return str.length
    return str.toString().length
}

// console.log(tsGetLength(123));

// # 接口
// interface是一个对行为的抽象

interface IPerson {
    name: string
    age: number
}

// 多了属性或少了属性都会报错
let tsPerson: IPerson = {
    name: 'ts-base',
    age: 18,
    // sex: '男'
}

// ## 接口中的任意属性
// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式
interface IPerson1 {
    name: string
    age: number
    [propName: string]: any
}
let tsPerson1: IPerson1 = {
    name: 'ts-base',
    age: 18,
    desc: 'desc',
    sex: '男'
}
// ## 接口中的可选属性

interface IPerson2 {
    name: string
    age?: number
}

let tsPerson2: IPerson2 = {
    name: 'ts-base-2'
}

// ## 接口中的只读属性

interface IPerson3 {
    name: string
    readonly age: number
}

let tsPerson3: IPerson3 = {
    name: 'ts-base-3',
    age: 18
}
// tsPerson3.age = 20

// # 函数类型
// 定义三种函数类型
// 1. 函数声明
function tsSearch1(source: string, subString: string): boolean {
    return source.search(subString) !== -1
}
// 2. 函数表达式
let tsSearch2: (source: string, subString: string) => boolean = function (source: string, subString: string): boolean {
    return source.search(subString) !== -1
}
// 3. 箭头函数
let tsSearch3: (source: string, subString: string) => boolean = (source: string, subString: string): boolean => {
    return source.search(subString) !== -1
}

// ## 函数类型接口
interface addFunc {
    (a: number, b: number): number
}
let tsAdd: addFunc = function (a: number, b: number): number {
    return a + b
}

// ## 可选参数
// 可选参数必须接在必需参数后面
function tsBuildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}
// ## 参数默认值
function tsBuildName1(firstName: string, lastName: string = 'base') {
    return firstName + ' ' + lastName
}
// ## 剩余参数
function tsPush(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item)
    })
}
let tsA: any[] = []
tsPush(tsA, 1, 2, 3)

// ## 函数重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
// 1. 重载的定义
// 2. 重载的实现
// 3. 重载的调用

function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

// # 类型断言
// 类型断言（Type Assertion）可以用来手动指定一个值的类型
// 1. 尖括号语法
// 2. as语法
class Student {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sayHi() {
        console.log('hi');
    }
}
class Teacher {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sayBye() {
        console.log('bye');
    }
}
function tsGetPersonName(person: Student | Teacher) {
    // return person.name
    if (person instanceof Student) {
        (person as Student).sayHi()
    } else {
        (person as Teacher).sayBye()
    }
}

// # 类型别名
// 类型别名用来给一个类型起个新名字
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

// # 字符串字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个
type EventNames = 'click' | 'scroll' | 'mousemove'
function tsHandleEvent(event: EventNames) {
    // do something
    console.log(event);
}
tsHandleEvent('click')
// tsHandleEvent('event')

// # 数组
// 1. 类型 + 方括号
let tsFibonacci: number[] = [1, 1, 2, 3, 5]
// 2. 数组泛型
let tsFibonacci1: Array<number> = [1, 1, 2, 3, 5]
// 3. 用接口表示数组
interface NumberArray {
    [index: number]: number
}
let tsFibonacci2: NumberArray = [1, 1, 2, 3, 5]

// # 元组
// 元组（Tuple）合并了不同类型的对象
let tsXcatliu: [string, number] = ['Xcat Liu', 25]
tsXcatliu[0] = 'Xcat Liu'
tsXcatliu[1] = 25
// tsXcatliu[0] = 25
// tsXcatliu[1] = 'Xcat Liu'

// # 枚举
// 枚举（Enum）类型用于取值被限定在一定范围内的场景
// 1. 数字枚举
enum tsDirection {
    Up,
    Down,
    Left,
    Right
}
console.log(tsDirection.Up);
console.log(tsDirection[0]);
// 2. 字符串枚举
enum tsDirection1 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
console.log(tsDirection1.Up);
// console.log(tsDirection1[0]);
// 3. 异构枚举
// enum tsDirection2 {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left,
//     Right
// }
// 4. 常量枚举
const enum tsDirection3 {
    Up,
    Down,
    Left,
    Right
}
let tsDirections = [tsDirection3.Up, tsDirection3.Down, tsDirection3.Left, tsDirection3.Right]
// 5. 枚举成员
enum tsDirection4 {
    Up,
    Down,
    Left,
    Right
}
enum tsDirection5 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
enum tsDirection6 {
    Up = 1,
    Down,
    Left,
    Right
}

// # 类
// 1. 类的定义
class tsAnimal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sayHi() {
        return `My name is ${this.name}`
    }
}
let tsCat = new tsAnimal('Tom')
console.log(tsCat.sayHi());
// 2. 继承
class tsCat1 extends tsAnimal {
    constructor(name: string) {
        super(name)
        console.log(this.name);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi()
    }
}
let tsCat2 = new tsCat1('Tom')
console.log(tsCat2.sayHi());
// 3. 公共、私有与受保护的修饰符
// 4. readonly修饰符
// 5. 参数属性
class tsAnimal1 {
    constructor(public name: string) {
        this.name = name
    }
}
// 6. 存取器
class tsAnimal2 {
    private _name: string
    constructor(_name: string) {
        this._name = _name
    }
    get name() {
        return 'Jack' + this._name
    }
    set name(value) {
        console.log('setter: ' + value);
        this._name = value
    }
}
let tsCat3 = new tsAnimal2('Tom')
tsCat3.name = 'Tom'
console.log(tsCat3.name);
// 7. 静态属性
class tsAnimal3 {
    static isAnimal(a: object) {
        return a instanceof tsAnimal3
    }
}
let tsCat4 = new tsAnimal3()
tsAnimal3.isAnimal(tsCat4)

// 8. 抽象类
abstract class tsAnimal4 {
    public name: string
    public constructor(name: string) {
        this.name = name
    }
    public abstract sayHi(): void
}
class tsCat5 extends tsAnimal4 {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}
let tsCat6 = new tsCat5('Tom')
tsCat6.sayHi()

// 9. 类与接口

// 9.1 类实现接口
interface tsAlarm1 {
    alert(): void
}
class tsDoor1 implements tsAlarm1 {
    alert() {
        console.log('Door alert');
    }
}
class tsPoliceDoor extends tsDoor1 implements tsAlarm1 {
    alert() {
        super.alert()
        console.log('Police door alert');
    }
}

// 9.2 接口继承接口
interface tsAlarm2 {
    alert(): void
}
interface tsLightableAlarm extends tsAlarm2 {
    lightOn(): void
    lightOff(): void
}
class tsDoor2 implements tsLightableAlarm {
    alert() {
        console.log('Door alert');
    }
    lightOn() {
        console.log('Door light on');
    }
    lightOff() {
        console.log('Door light off');
    }
}

// 9.3 接口继承类
class tsPoint {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
interface tsPoint3d extends tsPoint {
    z: number
}
let tsPoint3d: tsPoint3d = { x: 1, y: 2, z: 3 }

// # 泛型
// 1. 泛型函数
function tsCreateArray1(length: number, value: any): Array<any> {
    let result: any[] = []
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}
tsCreateArray1(3, 'x')
// 2. 泛型函数
function tsCreateArray2<T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}
tsCreateArray2<string>(3, 'x')
// 3. 泛型类
class tsGenericNumber<T = number> {
    zeroValue: T
    add: (x: T, y: T) => T
    constructor(zeroValue?: T, add?: (x: T, y: T) => T) {
        this.zeroValue = zeroValue || 0 as T;
        this.add = add || ((x: any, y: any) => x + y) as any;
    }
}
let tsMyGenericNumber = new tsGenericNumber<number>()
tsMyGenericNumber.zeroValue = 0
tsMyGenericNumber.add = function (x, y) {
    return x + y
}
// 4. 泛型约束
interface tsLengthwise {
    length: number
}
function tsLoggingIdentity<T extends tsLengthwise>(arg: T): T {
    console.log(arg.length);
    return arg
}
tsLoggingIdentity({ length: 10, value: 3 })

// # 声明合并
// 1. 接口合并
interface tsAlarm {
    price: number
}
interface tsAlarm {
    weight: number
}
let tsAlarm: tsAlarm = {
    price: 1,
    weight: 2
}
// 2. 命名空间合并
namespace tsA {
    export interface tsAlarm {
        price: number
    }
}
namespace tsA {
    export interface tsAlarm {
        weight: number
    }
}
let tsAlarm1: tsA.tsAlarm = {
    price: 1,
    weight: 2
}
// 3. 函数合并
function tsLib1(config: { a: string }): void
function tsLib1(config: { b: number }): void
function tsLib1(config: { a: string, b: number }): void
function tsLib1(config: any): void {

}


// # 命名空间
// 1. 命名空间
namespace tsA {
    export interface tsAlarm {
        price: number
    }
}
let tsAlarm2: tsA.tsAlarm = {
    price: 1,
    weight: 2
}
// 2. 命名空间嵌套
namespace tsA {
    export namespace tsB {
        export interface tsAlarm {
            price: number
        }
    }
}
let tsAlarm3: tsA.tsB.tsAlarm = {
    price: 1
}