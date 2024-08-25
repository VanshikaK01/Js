let myDate= new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())

//interview What is date? an object
console.log(typeof myDate)

let myCreatedDate= new Date(2023, 0,23)
console.log(myCreatedDate.toDateString()) //months start with 0 in js

let myNewDate= new Date(2023, 0,23,5,3,4)
console.log(myNewDate.toLocaleString()) 

let NewDate= new Date("2023-01-14")
console.log(NewDate.toDateString())

let myTimestamp= Date.now()
console.log(myTimestamp) //1970 se aajtak ka time in ms
console.log(NewDate.getTime()) 

//converting to sec
console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)

console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))
