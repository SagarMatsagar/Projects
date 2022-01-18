let obj = {
    name : 'Sagar',
    course : 'Bcs',
    Place : 'India',

}
console.log(Object.entries(obj))

for(x in obj){
    console.log(x+' : '+obj[x])
}
