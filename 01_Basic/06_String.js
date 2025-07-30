const name = "Ankit";
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ankit');
// console.log(gameName)
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"))

const newString = gameName.substring(0,2);
// console.log(newString);

const anotherString = gameName.slice(-2,2);
// console.log(anotherString);

const newStringOne = "        hye     "
// console.log(newString)
// console.log(newString.trim())

const email = "ankitThakur1430-gmail.com";
console.log(email.replace("-","@"))
console.log(email.includes("ankit"))

const name2 = "ankit thakur"
console.log(name2.split(" "))