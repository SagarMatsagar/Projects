function BubbleSort(nums){
   
    // for(let i=0;i<nums.length;i++){
    //     for(let j=0;j<nums.length-1;j++)
    //     {
    //         if(nums[j]<nums[j+1])
    //         {
    //             let temp=nums[j]
    //             nums[i]=nums[j+1]
    //             nums[j+1]=temp

    //         }
            
           
    //     }
          
    //  }
    let arr = nums
    let n = arr.length
    for(let i=0; i < n; i++){ 

        for(let j=1; j < (n-i); j++){  

            if(arr[j-1] > arr[j]){   
                let temp = arr[j-1];  
                arr[j-1] = arr[j];  
                arr[j] = temp;  
            }  
                 
        }  
    }  
    
    return arr
}
let nums = [2,5,4,1,3]
console.log(BubbleSort(nums))