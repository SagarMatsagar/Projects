let inputArray = [
    {name : "Sagar", iceCream : true},
    {name : "Sonali", iceCream : false},
    {name : "Dattu", iceCream : true},
    {name : "Ak", iceCream : false},
]

let whoLikeIceCream = []

whoLikeIceCream = inputArray.filter(function (value){
    return value.iceCream === true
})

// Using Map()
// whoLikeIceCream = inputArray.map(function (value){
//     if(value.iceCream === true)
//         return value.name
// })

console.log(whoLikeIceCream)