"use strict";
// 使用class关键字来定义一个类
/*
    对象中主要包含了两个部分：
    1、属性
    2、方法
*/
class Person {
    constructor() {
        // 定义实例属性 readonly开头(只读属性)
        //readonly name:string='孙悟空';
        this.name = '孙悟空';
        //在属性前使用static关键字可以定义类属性（静态属性）
        //static age:number=18;
        this.age = 18;
    }
    // 定义方法
    sayHi() {
        console.log('hello!!');
    }
}
const per = new Person();
console.log(per);
console.log(per.age);
console.log(per.sayHi());
