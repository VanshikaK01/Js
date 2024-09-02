//function  addTwoNumbers(number1,number2){
    //console.log(number1+number2)
//}


//addTwoNumbers(3,4)
function addTwoNumbers(number1 , number2){
    //let result=number1+number2
    //return result
    return number1+number2
}

const result=addTwoNumbers(3,4)
console.log("result",result)

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200,400,500,2000))

function calculateCartPrice1(val1,val2, ...num1){
    return num1
}

console.log(calculateCartPrice1(200,400,500,2000))

const user={
    username: "vnashika",
    prices:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
    
}
//handleObject(user)
handleObject({
    username: "sam",
    prices:399
})

const myNewArray=[200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1]
}

//console.log(returnSecondvalue(myNewArray))
console.log(returnSecondvalue([200,600,500,1000]))