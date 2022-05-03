"use strict";
(function () {
    // abstract开头的类是抽象类
    // 抽象类和其他类区别不大 只是不能用来创建对象
    // 专门用来被继承的类 自己是父类
    // 抽象类可以添加抽象方法
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
    // const an =new Animal()
})();
