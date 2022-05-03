//object表示一个js对象
let a : object
a={}
a=function(){}

//{} 用来指定对象中可以包含哪些属性
// 语法 :{属性名：属性值，属性名：属性值}
// 在属性名后边加上? ,表示属性是可选的
let b :{name:string,age?:number}
b={name:'孙悟空',age:  18}

// [propName:string]:any 表示任意类型的属性
let c:{name:string,[propName:string]:any}
c={name:'猪八戒',age:18,gender:'男'}

/* 
    设置函数结构的类型声明：
    语法：（形参:类型,形参:类型...）=>返回值
*/
//定义箭头函数参数类型 返回值类型
let d:(a:number,b:number)=>number
// d=function(n1:string,n2:string):number{
//     return n1+n2
// }

/* 
    数组两种类型声明：
    类型[]  或者 Array<类型>
*/
//string[] 表示字符串数组
let e:string[] 
e=['a','b','c'] 

//number[] 表示数值数组
let f:number[] 
f=[1,2,3]
let g:Array<number>
g=[1,2,3]

/* 
    元组，元组就是固定长度的数组
    语法: [类型，类型]
*/
let h:[string,string]
h=['hello','world']

/*
    enum 枚举
*/
enum Gender{
    male=0,
    female=1
}

let i:{name:string,gender:Gender}
i={
    name:'孙悟空',
    gender:Gender.male // 'male'
}
console.log(i.gender=== Gender.male);

// &表示同时  且  连接对象属性
let j:{name:string} & {age:number}
j={name:'孙悟空',age:19}

//类型的别名
type myType =1|2|3|4|5
let k:myType
let l:myType
let m:myType
k=5

export{}