function BinarySearch(arr,target){
    let start = 0, end = arr.length-1
    let inx = -1

     while(start <= end) {
        let mid = Math.floor(start+end/2)
       
       if(target === arr[mid]) {
            index = mid
            return index
        } else if(target > arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
        start = end+1
     }

}

let arr = [4,8,5,7,3,7,9]
arr = arr.sort()
let target = 8
console.log(arr.length)
//console.log(BinarySearch(arr,target))