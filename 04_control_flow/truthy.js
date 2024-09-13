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