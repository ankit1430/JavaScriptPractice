const user = {
    userName : "Ankit",
    age : 18,
    greeting : function()
    {
        console.log(`${this.userName}, welcome to our website`)
        // console.log(this)
    }
}
// user.greeting();
// user.userName = "Shivani"
// user.greeting();
// console.log(this)

// function chai()
// {
//     console.log(this)
// }
// chai()


// const chai= function()
// {
    // console.log(this)
// }
// chai()

const chai = ()=>{
    const name = "Ankit"
    console.log(this.name)
}
// chai()


// const addTwo = (num1 , num2)=>{
//     return num1 + num2;
// }

// const addTwo = (num1,num2)=> num1 + num2;
// const addTwo = (num1,num2)=> (num1 + num2)

const addTwo = (num1,num2)=> ({userName : "ANkit"})


console.log(addTwo(2,5))