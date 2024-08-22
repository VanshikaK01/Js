//Primitive
// 7types: string, number, boolean, null, undefined, symbol,BigInt

//symbol= unique

const id=Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId)

//refrence(non primitive)
//array,objects,functions

const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"hitesh",
    age: 22,
}

const myFunction= function(){
    console.log("hello world")
}
/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/
