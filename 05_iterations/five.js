const coding = ["js","java","ruby","py","cpp"];

coding.forEach((item)=>{
    // console.log(item)
})

function printing(item)
{
    console.log(item)
}

// coding.forEach(printing)

coding.forEach((item , index, arr)=>{
    // console.log(item , index, arr)
})

const myCoding = [
    {
        langName : "javaScript",
        langFileName : "js"
    },
     {
        langName : "java",
        langFileName : "java"
    },
    {
        langName : "python",
        langFileName : "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langFileName)
})