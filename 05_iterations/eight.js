const myNums = [1,2,3,4]
const myTotal = myNums.reduce((accc, currVal)=>{
    console.log(`acc is ${accc} and currVal is ${currVal}`)
    return accc + currVal
},0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "DSA's Course",
        price : 4999
    },
    {
        itemName : "AI and ML Course",
        price : 9999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    }
]

const shoppingTotal = shoppingCart.reduce((acc,item)=>{
    console.log(`acc is ${acc} and itemValue is ${item.price}`)
    return acc + item.price;
},0)

console.log(shoppingTotal)