const bgMusic = new Audio("./media/bgMusic.mp3");

function playBgMusic() {
    bgMusic.play();
}

function stopBgMusic() {
    bgMusic.pause();
}

function playSound() {
    const audio = new Audio("./media/bell1.wav");
    audio.play();
}

export { playSound, playBgMusic, stopBgMusic };