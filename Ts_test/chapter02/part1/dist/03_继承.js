"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物叫~~');
        }
    }
    // Dog extends Animal
    // 此时Animal被称为父类 Dog被称为子类 使用继承后 子类拥有父类所有的方法和属性
    // 通过继承可以讲多个类中共有的代码写在一个父类中
    // 子类覆盖父类里方法 称为重写
    //定义个表示狗的类 使Dog类继承Animal类
    class Dog extends Animal {
        // 子类可以自己添加方法属性
        run() {
            console.log(`${this.name}在跑`);
        }
        sayHello() {
            console.log('汪汪汪');
        }
    }
    // 定一个猫的类
    class Cat extends Animal {
    }
    const dog = new Dog('旺财', 3);
    const cat = new Cat('咪咪', 3);
    // const animal = new Animal()
    console.log(dog);
    console.log(cat);
    dog.sayHello();
    dog.run();
})();
