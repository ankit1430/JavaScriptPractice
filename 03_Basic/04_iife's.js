// Immediately Invoked Function Expression (IIFE)
// Why do we use IIFE?
// -> To avoid polluting the global scope.
// -> IIFE creates its own private scope so variables inside it
//    don’t interfere with variables outside.

(function hello(){
    console.log("Hello IIFE's") //Named IIFE
})();

((name)=>{
    console.log(`Hello ${name}`) //Simple IIFE
})("Ankit")