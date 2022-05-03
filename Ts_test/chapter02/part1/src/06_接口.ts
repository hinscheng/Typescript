(function (){

    // 描述一个对象的类型
    type myType ={
        name : string;
        age:number
    }

    /* 接口用来定义一个类结构,用来定义一个类包含哪些属性
        同时接口也可以当成类型声明去使用
    */
    interface myInterface{
        name:string,
        age:number
    }
    interface myInterface{
        gender:string
    }

    // const obj : myInterface={
    //     name:'sss',
    //     age:18,
    //     gender:'男'
    // }

    /* 
        接口中的所有的属性都不能有实际的值
        接口只定义对象的结构，而不考虑实际值
    */
    interface myInter{
        name:string,
        sayhello():void
    }

    /* 
        定义类时，可以使类去实现一个接口
        实现接口就是使类满足接口的要求
    */
    class myclass implements myInter{
        name: string;
        constructor(name:string){
            this.name = name
        }
        sayhello(): void {
            // throw new Error("Method not implemented.");
            console.log('你好');
        }
    }

})()