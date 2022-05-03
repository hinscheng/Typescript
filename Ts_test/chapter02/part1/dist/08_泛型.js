"use strict";
// function fn(a:any):number{
//     return a
// }
/**
 * 在定义函数或是类时，遇到类型不明确就可以使用泛型
 */
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
let res1 = fn(19); // 不指定泛型，TS可以自动对类型进行推断
let res2 = fn('hello'); // 指定类型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
// T extends Inter 表示泛型T必须使Inter实现类（子类）
function fn3(a) {
    return a.length;
}
fn3('1234');
class myclass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new myclass('孙悟空');
