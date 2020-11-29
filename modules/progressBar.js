function progressBar() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("inProgressBar");
        var width = 1;
        var id = setInterval(frame, 1000); // 1000ms = 1sec
        function frame() {
            if (width >= 300) {
            clearInterval(id);
            i = 0;
            } else {
                width++;
                elem.style.width = width + "px";
                }
        }
    }
    
}

export { progressBar };