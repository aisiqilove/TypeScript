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
