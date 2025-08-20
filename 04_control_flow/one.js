//if
const isUserLoggedIn = true
const temperature = 41;

// if(temperature===40)
// {
//     console.log("less than 50")
// }
// else
// {
//     console.log("temp is greater than 50")
// }

// < , > , <= , => , == , !=, ===


// const score = 200

// if(score>100)
// {
//     const power = "fly"
//     console.log(`User power : ${power}`)
// }

const balance = 1000
 
// if(balance>500) console.log("test");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard)
{
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("User Logged in")
}