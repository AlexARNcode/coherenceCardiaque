function enableStartBtn() {
    document.getElementById("startBtn").disabled = false; 
    document.getElementById("startBtn").style.display = "block"; 
}

function disableStartBtn() {
    document.getElementById("startBtn").disabled = true; 
    document.getElementById("startBtn").style.display = "none"; 
}

export { enableStartBtn, disableStartBtn };