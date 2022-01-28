let bankBal = [30000,1000,50000,20000,40000]

let newbankBal = bankBal.map((amm)=>{
    let temp = amm
    //console.log(String(amm)[0])
    while(temp>=10){
        temp = temp/10
    }

    if(temp%2===0){
        return amm+(amm/100)*20
    }else{
        return amm+(amm/100)*35
    }
})

console.log(newbankBal)