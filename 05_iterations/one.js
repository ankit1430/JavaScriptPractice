//for looo's
for(let i = 1 ; i<11;i++)
{
    // console.log(i)
}

//Nested loop
// for(let i = 1 ; i<=10;i++)
// {
    // console.log(`Table of ${i}`)
    // for(let j = 1;j<=10;j++)
    // {
        // console.log(`Inner Loop value ${j}`)
        // console.log(`${i} * ${j} = ${i*j}`)
    // }
// }

let myArr = ["flash" , "batman", "superMan" ]
for(let i = 0 ;i<myArr.length;i++)
{
    // console.log(myArr[i])
}

//break and continue

// for(let i = 1 ;i<21;i++)
// {
    // if(i==5)
    // {
        // console.log(`Detected 5`);
        // break;
    // }
    // console.log(`Value of i is ${i}`)
// }

for(let i = 1 ;i<21;i++)
{
    if(i==5)
    {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`)
}
