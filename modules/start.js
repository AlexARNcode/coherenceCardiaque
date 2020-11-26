import { disableStartBtn, enableStartBtn } from "./startBtn.js";
import { playBgMusic, stopBgMusic, playSound } from "./sound.js";

/*
Main actions to do here
1) Disable play button on it's clicked.
2) Play an audio file for 5 sec, then another audio file for 5 sec, etc etc..
2bis) Play a background music for 5 minutes.
3) Show a progress bar during the 5 minutes.
4) Show an animation: 5 seconds in, 5 seconds out.
4 bis) show "Inhale", "Exhale" every 5 seconds.
5) After 5 minutes : Stop the progressbar, stop animation, stop every sounds, enable the play button.
*/

function start() {
    const totalTime = 60000; // modify this value for testing purposes (ms).

    function stopBells() {
        clearInterval(bells);
    }

    function removeAnimation() {
        ball.classList.replace('ball-animation', 'ball');
    }

    function stop() {
        removeAnimation();
        stopBells();
        stopBgMusic();
        enableStartBtn();
    }

    /* 1) Disable play button */
    disableStartBtn();

    /* 2) and 2bis) : Play an audio file each 5 seconds and play background Music */
    playSound();
    playBgMusic();
    const bells = setInterval(playSound, 5000);

    /* 4) Animation */
    const ball = document.getElementById('ball');
    ball.classList.add('ball-animation');

    /* 5) Stop everything after 5 minutes */
    setTimeout(stop, totalTime);
}

export { start };