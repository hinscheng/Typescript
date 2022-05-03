(function () {
    // abstract开头的类是抽象类
    // 抽象类和其他类区别不大 只是不能用来创建对象
    // 专门用来被继承的类 自己是父类
    // 抽象类可以添加抽象方法
    abstract class Animal {
        name: string;
        constructor(name: string) {
            this.name = name
        }

        // 定义一个抽象方法  抽象方法用abstract开头 没有方法体
        // 只能用能用在抽象类中
        abstract sayHello() :void;

    }

    class Dog extends Animal {

        sayHello(): void {
            console.log('汪汪汪');
        }

    }

    class Cat extends Animal{
        sayHello(): void {
            console.log('喵喵喵');
            
        }
    }

    const dog = new Dog('旺财')
    dog.sayHello()
    // const an =new Animal()
})()