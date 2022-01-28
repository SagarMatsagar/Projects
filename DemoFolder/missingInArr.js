//let arr = [1,3,5,2,0]

let arr = [3,4,6,0,1,2]


for(let i=0;i<=arr.length;i++){
    let missing = true
    arr.forEach((ele)=>{
        if(ele===i){
            missing = false
        }
    })

    if(missing === true){
        console.log(i)
    }
}
