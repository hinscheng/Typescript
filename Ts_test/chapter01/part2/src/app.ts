import {hi} from './m.js'
let a=10;
// 注释
console.log(hi);
console.log(a);


function fn(this:any){
    alert(this)
}

let box = document.getElementById('box')
box?.addEventListener('click',function(){
    alert('hello')
})