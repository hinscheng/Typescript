//也可以直接使用字面量进行类型声明
let a:10;
// a=11
a=10

//  | 表示可以多个值 联合值
let b:'male'| 'female'
b='male'
b='female'
// b='abc'

let c: boolean|string
c= true
c='hello'

//any表示是任意类型 一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// let d:any
//声明变量如果不指定类型，TS解析器会自动判断变量的类型 隐式的any
let d
d=10
d='hello'
d=true

//unknown 表示未知类型的值
let e:unknown
e=10
e='hello'
e=true
e={}

let s:string
//d的类型是any 他可以赋值给任意变量
s=d

//unknown 实际上就是一个类型安全的any
//unknown类型的变量 不能直接赋值给其他变量
// e='hello'
// s=e
if(typeof e === 'string'){
    s=e
}

//类型断言 可以用来告诉解析器变量的实际类型
// 变量 as 类型
// <类型>变量
s=e as string
s=<string>e

//void 用来表示空 以函数为例 表示没有返回值的函数
function fn():void{ 
    return null
}

//never 表示永远不会返回结果
function fn1():never{
    throw new Error('报错了！')
}


export{} //屏蔽ts重复声明报错