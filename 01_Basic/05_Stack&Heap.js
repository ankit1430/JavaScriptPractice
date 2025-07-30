// *** Stack memory(Primitive DataTypes) -> Here copy come
let myName = "Ankit Thakur"

let myLoveName = myName;
myLoveName = "Shivani Arya";

console.log(myName);
console.log(myLoveName)


// *** Heap memory(Non Primitive DataTypes) -> Here Refernce come
let userOne = {
    email : "ankitThakur1430@gmail.com",
    upi : "ankit@ybl"
}

let userTwo = userOne

userTwo.email = "shivani@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)