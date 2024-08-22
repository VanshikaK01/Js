let score="33abc"
console.log(typeof score)
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

let newScore=null
console.log(typeof newScore)

let ValueInNumber=Number(newScore)
console.log(typeof ValueInNumber);
console.log(ValueInNumber)

//"33" =>33
//"33abc"=>NaN
//true=>1; false=>0

let isLoggedIn=1

let booleanisLoggedIn= Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

//in Boolean 1=true; 0=false
//""= false
//"vanshi"=true

let someNumber=33

let stringNumber= String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//*************operations*********** */

let value=3
let negValue= -value
console.log(negValue)

console.log(2**3) //2 to the power 3
console.log(2/3);
console.log(2%3)

str1="hello"
str2=" vanshika"
let str3=str1+str2
console.log(str3)

console.log("1"+2+2) //pehla number string h toh sab string jaise treat honge 122
console.log(1+2+"2") // pehla number so 32

console.log(+true) //+ for conversion to number

let x=3;
const y=x++;
console.log(`x:${x}, y:${y}`)

let a=3;
const b=++a;

console.log(`a:${a}, b${b}`)

