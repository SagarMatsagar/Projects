const stopwatch = document.getElementById("display")

const playButton = document.getElementById("playButton")
const pauseButton = document.getElementById("pauseButton")
const resetButton = document.getElementById("resetButton")

var hr = 0
var min = 0
var sec = 0
 var timeStopped = true

function startStopwatch(){
    if(timeStopped){
        timeStopped = false
        setTimeout(stopWatchCycle,1000)
        showbutton("PAUSE")
    }
    
}
function stopWatchCycle(){
    if(timeStopped === false){
        sec=parseInt(sec)
        min=parseInt(min)
        hr=parseInt(hr)

        sec+=1
        if(sec===60){
            min+=1
            sec=0
        }
        if(min===60){
            hr+=1
            min=0
            sec=0
        }
    
    hr = String(hr).padStart(2,"0")
    min = String(min).padStart(2,"0")
    sec = String(sec).padStart(2,"0")
    stopwatch.innerHTML = `${hr}:${min}:${sec}`
    
    setTimeout(stopWatchCycle,1000)
    }
}

function pauseStopwatch(){
    showbutton("PLAY")

    timeStopped = true
}

function resetStopwatch(){
    stopwatch.innerHTML="00:00:00"
    timeStopped = true
    hr = 0
    min = 0
    sec = 0
    showbutton("PLAY")

}

function showbutton(buttonkey){
    let buttonToShow,buttonToHide

    if(buttonkey === "PLAY"){
        buttonToShow = playButton
        buttonToHide = pauseButton
    }else{
        buttonToShow = pauseButton
        buttonToHide = playButton
    }

    buttonToShow.style.display = "block"
    buttonToHide.style.display = "none"
}

playButton.addEventListener("click",startStopwatch)
pauseButton.addEventListener("click",pauseStopwatch)
resetButton.addEventListener("click",resetStopwatch)


