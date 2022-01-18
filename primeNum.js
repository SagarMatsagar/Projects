let obj = {
    name : 'Sagar',
    program : 'Find prime Number in array.',
    arr : [2,1,10,3,15,0,45,51,36,63,12,11,33,49,17],
    check : function(){
        for(let i=0;i<this.arr.length;i++){
            let count = 0
            if(this.arr[i]<=1){
                count++
            }else{
                for(let j=2;j<this.arr[i]/2;j++){
                    if(this.arr[i]%j===0){
                        count++
                        break;
                    }
                }
                if(count===0){
                    console.log(this.arr[i])
                }                
            }
        }
    }
}
obj.check()