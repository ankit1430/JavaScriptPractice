const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["spiderman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const newArray = marvel_heros.concat(dc_heros);
// console.log(newArray)

// const allNewHeroes = [...marvel_heros,...dc_heros]; //Spread Operator's
// console.log(allNewHeroes)

// const anotherArray = [1,2,3,[4,5,6],7,[8,9,[1,2,3]]];
// console.log(anotherArray.flat(Infinity))

console.log(Array.isArray("Ankit"))
console.log(Array.from("Ankit"))

console.log(Array.from({name:"Ankit"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))