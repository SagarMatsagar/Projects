let arr = [1,4,8,4,51]

let anyPrime = arr.some(function(e){
    
    if(e<2){
        return false
    }else{
        let Divisible=0
        for(let i=2;i<=e/2;i++){
            if(e%i===0){
                Divisible++
            }
        }
        return Divisible === 0
    }
    
})

console.log(anyPrime? "yes":"NO")