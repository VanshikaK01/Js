const user={
    username:"vanshika",
    age:30,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`),
        console.log(this)
    }
}

//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()

console.log(this)

//IMP browser k andar jo global object hai wo hai window object

//function chai(){
   // let user="vanshika"
    //console.log(this.user)
//}
//chai()

const chai= ()=> {
    let user="vanshika"
    console.log(this)
}

//chai()

const addTwo=(num1,num2) =>{
    return num1+num2
}
console.log(addTwo(3,4))

//implicit return
//const addTwo=(num1,num2) => num1+num2
//const addTwo=(num1,num2) => (num1+num2) curly braces= return keyword


//functions
//function() {}
//()=> {}
//()=>()    