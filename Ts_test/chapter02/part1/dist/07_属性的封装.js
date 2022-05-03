"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        //定义方法 用来获取name属性
        // getName(){
        //     return this.name
        // }
        // getAge(){
        //     return this.age
        // }
        // //定义方法 用来设置name属性
        // setName(value:string){
        //     this.name =value
        // }
        // setAge(value:number){
        //     if(value>=0){
        //         this.age =value
        //     }else{
        //         throw new Error('年龄不能为负')
        //     }
        // }
        // TS中设置getter方法的方式
        get gname() {
            console.log('执行getname');
            return this.name;
        }
        set sname(value) {
            this.name = value;
        }
        get gage() {
            console.log('执行getage');
            return this.age;
        }
        set sage(value) {
            if (value >= this.age) {
                this.age = value;
            }
        }
    }
    /**
     * 现在属性是在对象中设置的。属性可以任意的被修改
     *   属性可以任意被修改 会导致对象中的数据变得非常不安全
     */
    const per = new Person('孙悟空', 17);
    // per.getName()
    // per.setName('猪八戒')
    // per.setAge(-12)
    per.sname = '猪八戒';
    per.sage = 78;
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // b.num = 44
    // 修饰属性可以写在构造函数里
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
})();
