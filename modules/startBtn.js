function enablePlay() {
    document.getElementById("startBtn").disabled = false; 
}

function disablePlay() {
    document.getElementById("startBtn").disabled = true; 
}

export { enablePlay, disablePlay };