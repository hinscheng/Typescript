"use strict";
class Dog {
    // 构造函数会在对象创建时调用
    constructor(name, age) {
        // 在实例方法中，this就表示当前的实例
        // 可以通过this向新建的对象中添加属性
        // console.log(this);
        this.name = name;
        this.age = age;
    }
    bark() {
        //alert('222')
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this);
        console.log(this.name);
    }
}
const dog = new Dog('小白', 4);
const dog2 = new Dog('小黑', 5);
dog.bark();
console.log(dog);
console.log(dog2);
