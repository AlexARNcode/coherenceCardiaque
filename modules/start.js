import { disableStartBtn, enableStartBtn } from "./startBtn.js";
import { playBgMusic, stopBgMusic, playSound } from "./sound.js";

/*
Main actions to do here
1) Hide and disable play button on it's clicked.
2) Play an audio file for 5 sec, then another audio file for 5 sec, etc etc..
2bis) Play a background music for 5 minutes.
3) Show a progress bar during the 5 minutes.
4) Show an animation: 5 seconds in, 5 seconds out.
4 bis) show "Inhale", "Exhale" every 5 seconds.
5) After 5 minutes : Stop the progressbar, stop animation, stop every sounds, enable the play button.
*/

function start() {
    const totalTime = 9000; // modify this value for testing purposes (ms).
    let inhale = true;

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
        document.getElementById("instructions").style.display = "none";
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

    /* 1) Disable play button */
    disableStartBtn();

    /* 2) and 2bis) : Play an audio file each 5 seconds and play background Music */
    playSound();
    playBgMusic();
    const bells = setInterval(playSound, 5000);

    /* 4) Animation and 4bis) */
    const ball = document.getElementById('ball');
    ball.classList.add('ball-animation');

    /* 4 bis) show "Inhale", "Exhale" every 5 seconds. */
    document.getElementById("instructions").style.display = "block";
    document.getElementById("instructions").innerHTML = "Inhale";
    setInterval(instructions, 5000);
    
    /* 5) Stop everything after 5 minutes */
    setTimeout(stop, totalTime);
}

export { start };