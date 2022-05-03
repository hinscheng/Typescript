//声明一个变量a 同时指定它的类型为number
let a:number;
a=10;
// a='hello'; 此行代码报错

let b:string;
b='hello';


//如果变量声明和赋值同时进行 Ts可以自动对变量进行类型检测
let c=10
// c= 'hi'

//js中的函数是不考虑参数的类型和个数的
function sum(a:number,b:number):number{ //可以给return返回值规定类型
    return a+b
}
// console.log(sum(123,123));
// console.log(sum(123,'123'));

let res = sum(123,456)
console.log(res);
