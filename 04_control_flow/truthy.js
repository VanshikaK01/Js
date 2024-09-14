const userEmail= "vanshika"

if(userEmail){
    console.log("got user email");

}
else{
    console.log("dont have user email");
}

//falsy values
// false,0, -0, BigInt 0n, "",null,undefined, NaN

//truthy
//"0", 'false'," ",{},[],function(){}

const newEmail=[]
if(newEmail.length===0){
    console.log("array is empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//Nullish coalescing operator(??) : null undefined

let val1;
//val1=5 ?? 10
//val1= null ?? 10
//val1=undefined ?? 15
val1=null ?? 10?? 20
console.log(val1);

//terniary operator

//conditon ? true : false

const price =100
price <=80 ? console.log("less than 80"): console.log("more than 80")