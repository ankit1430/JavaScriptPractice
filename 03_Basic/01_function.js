// function sayMyname()
// {
//     console.log("A")
//     console.log("N")
//     console.log("K")
//     console.log("I")
//     console.log("T")
// }
// // sayMyname()
// function addTwoNumber(num1,num2)
// {
//     console.log(Number(num1)+Number(num2))
// }
// addTwoNumber(10,"10")

function addTwoNumber(num1,num2)
{
    return num1 + num2;
}
let result = addTwoNumber(10,11)
// console.log(result)

function loginUsername(str)
{
    return `${str} just loggined in`
}
let result1 = loginUsername()
// console.log(result1)

function loginUsername1(str)
{
    if(str == undefined)
    {
        console.log("Pls enter the username")
        return
    }
    return `${str} just loggined in`
}
let result2 = loginUsername1()
// console.log(result2)


function loginUsername1(str = "Ankit")
{
    if(!str)
    {
        console.log("Pls enter the username")
        return
    }
    return `${str} just loggined in`
}
let result3 = loginUsername1("Shivani")
// console.log(result3)

function calcCartPrice(...num1)
{
    return num1
}
// console.log(calcCartPrice(100,100,200,300))

const user = {
    name : "Shivani",
    age : 21,
}
function handleObject(myObj)
{
    console.log(`Username is ${myObj.name} and her age is ${myObj.age}`)
} 
handleObject(user)
function handleArr(arr)
{
    return arr[1]
}
console.log(handleArr([1,2,3,4,5]))