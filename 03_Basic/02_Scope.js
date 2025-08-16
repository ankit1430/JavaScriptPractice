// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

var c = 200;
if(true)
{
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);


function one()
{
    const userName = "Shivani";
    function two()
    {
        const website = "Instagram";
        console.log(userName);
    }
    // console.log(website)
    // two()
}
one()


//Basic Hosting
console.log(addOne(1))
function addOne(num)
{
    return num + 1;
}

console.log(addTwo(5))
const addTwo = function(num)
{
    return num + 2;
}