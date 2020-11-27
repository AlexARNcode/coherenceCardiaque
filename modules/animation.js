const ball = document.getElementById('ball');

function animateBall() {
    ball.classList.add('ball-animation');
}

function removeBallAnimation() {
    ball.classList.replace('ball-animation', 'ball');
}

export { animateBall, removeBallAnimation };