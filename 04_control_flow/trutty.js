// const userEmail = "a@ankit.ai"

// if(userEmail)
// {
//     console.log("Got user email")
// }
// else
// {
//     console.log("Dont have user email")
// }

//falsy values
// false, 0 , -0, BigInt 0n , "" , null , undefinded , NaN

//Trutty values
// true, 1 , "0", "false" , " ", [], {}, function(){}

const userEmail = [];
if(userEmail.length === 0)
{
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0)
{
    console.log("Object is empty");
}

//Nullish Coalescing Opearator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 15;


console.log(val1)

//Terniary Opeator

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80 ") : console.log("more than 80")