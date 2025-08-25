// const coding = ["js","ruby","java","python","cpp"];

// const newNum = coding.forEach((item)=>{
//     console.log(item)
//     return item;
// })
// console.log(newNum);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((item)=>{
//  return item>4;
// })

const newNums = []
myNums.forEach((item)=>{
    if(item>4)
    {
        newNums.push(item)
    }
})

// console.log(newNums);

