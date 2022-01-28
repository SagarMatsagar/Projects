let x=5
let y=5
console.log("Promise code Start.")
let promise = new Promise(function(resolve, reject){
    if(x===y)
        setTimeout(function(){
            resolve('X and Y are equal. this was resolved in 5sec')
        }, 5000)        
    else
        reject("Rejected State")
})

console.log(promise)

promise.then(function(resolveMsg){
    console.log("this was resolved. with msg- "+resolveMsg)
    console.log(promise)
}, function(rejectMsg){
    console.log("this was rejectrd. with msg- "+rejectMsg)
})

console.log("promise code End")