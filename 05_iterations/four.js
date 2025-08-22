const myObj = {
    js : "JavaScript",
    cpp : "C++",
    swift: "swift by apple",
    rb : "ruby"
}

for (const key in myObj) {
    // console.log(`${key} shortcut for ${myObj[key]}`)
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key])
}