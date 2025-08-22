//For of
//["","",""]
//[{},{},{}]
const arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(`Element of arr is ${num}`)
}

const greeting = "Hello World!"
for(let greet of greeting)
{
    // console.log(`Each char ${greet}`)
}

//Map's

const map = new Map();
map.set("IN","India")
map.set("USA","United State of America")
map.set("FR","France")
// console.log(map)

for(let [key,value] of map)
{
    // console.log(key + " :- " + value)
}

let myObj = {
    game1 : "NFS",
    game2 : "spiderMan"
}
// for(let [key , value] of myObj)
// {
//     console.log(key,value)
// }

