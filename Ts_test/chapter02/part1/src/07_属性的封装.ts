(function (){
    // 定义一个表示人的类
    class Person{
        // TS可以在属性前添加属性的修饰符
        /**
         *  public 修饰的属性可以在任意位置访问（修改） 默认值
         *  private 私有属性，只能在类内部进行访问（修改）
         *       - 通过在类中添加方法使得私有属性可以被外部访问
         *  protected 受保护的属性 只能在当前类或者当前类的子类中使用
         */
        private name:string;
        private age:number;

        constructor(name:string,age:number){
            this.name=name
            this.age =age
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
        get gname(){
            console.log('执行getname');
            
            return this.name
        }
        set sname(value:string){
            this.name=value
        }

        get gage(){
            console.log('执行getage');
            
            return this.age
        }
        set sage(value:number){
            if(value>=this.age){
                this.age =value
            }
        }
    }
    /**
     * 现在属性是在对象中设置的。属性可以任意的被修改
     *   属性可以任意被修改 会导致对象中的数据变得非常不安全
     */
    const per = new Person('孙悟空',17)
    // per.getName()
    // per.setName('猪八戒')
    // per.setAge(-12)
    per.sname = '猪八戒'
    per.sage = 78
    console.log(per);
    
    class A{
        protected num:number ;
        constructor(num:number) {
            this.num =num
        }
    }
    class B extends A{
        test(){
            console.log(this.num);
        }
    }
    const b = new B(123)
    // b.num = 44

    // 修饰属性可以写在构造函数里
    class C{
        constructor(public name:string,public age:number,){

        }
    }
})()