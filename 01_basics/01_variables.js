const accountId=144553
let accountEmail="vanshika@gmail.com"
var accountPassword= "12345"
accoutntCity="Pune"
let accountState;
// accountId=2 // not allowed as it is already declared in const

accountEmail="new@gmail.com"
accountPassword="2345"
accoutntCity="nagpur"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accoutntCity,accountState])
/* prefer not to use var because of 
issue in block scope and functional scope*/