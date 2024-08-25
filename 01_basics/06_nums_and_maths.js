const score=400
const balance= new Number(100) //dedicatedly we defined it as a number
console.log(balance)

console.log(balance.toFixed(2))

const Nno= 123.78
console.log(Nno.toPrecision(3))

const Mno=23.898

console.log(Mno.toPrecision(3))

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))

// **************MATHS********************

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2)) //for upper vLUE 5
console.log(Math.floor(4.3)) //FOR LOwe vLUE 
console.log(Math.min(4,3,5,6))
console.log(Math.max(4,5,6,7))

console.log(Math.random()) //gives value between 0 and 1
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min+1))+min)