//array

const myArray=[1,2,3,4,5,6]
console.log(myArray[0])

const myHeros=["shaktiman","nagraj"]

const myArr2= new Array(1,2,3,4)
console.log(myArr2[1])

//Array methods

myArray.push(6)
myArray.push(7)
console.log(myArray);
myArray.pop() //removes last value
console.log(myArray);

myArray.unshift(9) //adds value at the start of array
myArray.shift() //removes element from the start of array

console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

const newArray= myArray.join()
console.log(newArray) //join converts array into string
console.log(typeof newArray);

//slice,splice
console.log("A", myArray)
const myn1=myArray.slice(2,4)
console.log(myn1);
console.log("B", myArray)

const myn2=myArray.splice(2,4)
console.log(myn2)
console.log("C", myArray)



