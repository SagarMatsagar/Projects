let arr = [1,2,1,4,1,3,1,5,1]

// function funName(value,index){
//     console.log(index+' - '+value)
// }

//arr.forEach(funName)
let newarr = []
arr.forEach(function funName(value){
    //console.log(index+' - '+value)
    if(value===1)
        newarr[newarr.length]=value
})

console.log(newarr)