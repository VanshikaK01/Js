//singleton
//object.create

//object literals
const mySym=Symbol("key1")
 
const JsUser={
    name: "vanshika",
    "full name":"vanshika Khiyani",
    [mySym]:"mykey1",
    age: 18,
    location:"pune",
    email:"vanshika@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email="new@gmail.com"
//Object.freeze(JsUser)
JsUser.email="mks@gmail.com"
//console.log(JsUser)

JsUser.greeting=function(){
    console.log("hello Js user ");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())