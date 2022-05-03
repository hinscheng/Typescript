"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物再叫~');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类写了构造函数 必须写父类该有的参数 super里引入
            super(name);
            this.age = age;
        }
        sayHello() {
            // 在类的方法中 super就表示当前类的父类
            // super.sayHello() ;
            console.log('汪汪汪');
        }
    }
    const dog = new Dog('旺财', 4);
    console.log(dog);
    dog.sayHello();
})();
