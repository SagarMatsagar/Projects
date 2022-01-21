const textel = document.getElementById("text")
const speedel = document.getElementById("speed")

const text = "We Love Programming!"

let ind = 0
let time = 500/speedel.value
writeText()

function writeText(){
    textel.innerHTML = text.slice(0,ind)
    ind++

    if(ind>text.length){
        ind = 1
    }

    setTimeout(writeText,time)
}

speedel.addEventListener("input",(e)=> time = 500/e.target.value)