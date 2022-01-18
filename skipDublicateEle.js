let arr = [2,4,,9,4,7,2,1,9,6]

let newArr = arr.filter((e)=>{
    return arr.indexOf(e) === arr.lastIndexOf(e)
})

console.log(newArr)