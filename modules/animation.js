const ball = document.getElementById('ball');
let inhale = true;

function animateBall() {
    ball.classList.add('ball-animation');
}

function removeBallAnimation() {
    ball.classList.replace('ball-animation', 'ball');
}

function instructions() {
    if (inhale) {
        document.getElementById("instructions").innerHTML = "Exhale";
        inhale = false;
    }
    else 
    {
        document.getElementById("instructions").innerHTML = "Inhale";     
        inhale = true;
    }
}

function inhaleExhaleAnimation() {
    document.getElementById("instructions").style.display = "block";
    document.getElementById("instructions").innerHTML = "Inhale";
    setInterval(instructions, 5000);
}

export { animateBall, removeBallAnimation, inhaleExhaleAnimation };