const name= "vanshika"
const age=20
// console.log(name+" "+ age+ " khiyani")

console.log(`hello my name is ${name} and my age is ${age}`);

const gameName= new String('vanshi')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString=gameName.substring(0,4)
console.log(newString)
const anotherString=gameName.slice(-5,3)
console.log(anotherString)
//slice allows for negative values and starts from backside then

const newStringOne="    vanshika  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https;//vanshika.com/%20"
console.log(url.replace('20','-'));
console.log(url.includes('vanshi'))

const NewNAme= String("vanshika-20-20")
console.log(NewNAme.split('-'))
