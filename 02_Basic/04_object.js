// const tinderUser = new Object(); singleTon way to define object
const tinderUser = {};
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLogged = false

// console.log(tinderUser)

const regularUser = {
    email:"ankit@gmail.com",
    fullname : {
        userFullname : {
            firstName : "ankit",
            lastName : "thakur"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstName)

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {1 : "a" , 2 : "b"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLogged"))

const course = {
    courseName : "AI and ML",
    price : 999,
    courseInstructor : "Harkirat"
}
const {courseInstructor : Instructor} = course;
console.log(Instructor)