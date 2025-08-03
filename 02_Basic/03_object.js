//Object's Literals
const mySym = Symbol("key1");

const JsUser = {
    name:"Ankit",
    "Full name":"Ankit Thakur",
    [mySym] : "mykey1",
    age: 18,
    location: "Madubani",
    email: "ankit@meta.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(typeof JsUser[mySym])

JsUser.email = "ankit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ankit@amex.com"
// console.log(JsUser)

JsUser.greeting = function()
{
    console.log("Hello Js user")
}
JsUser.greeting2 = function()
{
    console.log(`Hello Js user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())