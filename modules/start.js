import { disableStartBtn, enableStartBtn } from "./startBtn.js";
import { playBgMusic, stopBgMusic, playSound } from "./sound.js";
import { animateBall, removeBallAnimation, inhaleExhaleAnimation } from "./animation.js";

/*
Main actions to do here
1) Hide and disable play button when clicked.
2) Play a sound each 5 seconds.
2bis) Play a background music for 5 minutes.
3) Show a progress bar during the 5 minutes.
4) Show an animation: A ball expanding for 5 seconds, and coming back for 5 seconds.
4 bis) show "Inhale", "Exhale" every 5 seconds.
5) After 5 minutes : Stop the progressbar, stop animation, stop every sounds, enable the play button.
*/

function start() {
    const totalTime = 300000; // modify this value for testing purposes (ms). 300000ms = 5 minutes.

    function stopBells() {
        clearInterval(bells);
    }

    function stop() {
        stopBells();
        stopBgMusic();
        enableStartBtn();
        removeBallAnimation();
    }

    /* 1) Hide and disable play button when clicked. */
    disableStartBtn();

    /* 2) Play a sound each 5 seconds. and 2)bis Play a background music for 5 minutes. */
    playSound();
    playBgMusic();
    const bells = setInterval(playSound, 5000);

    /* 3) Show a progress bar during the 5 minutes. */
    var i = 0;
    function move() {
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
    move();

    /* 4) Show an animation: A ball expanding for 5 seconds, and coming back for 5 seconds. */
    animateBall();

    /* 4 bis) show "Inhale", "Exhale" every 5 seconds. */
    inhaleExhaleAnimation();
    
    /* 5) Stop everything after 5 minutes */
    setTimeout(stop, totalTime);
}

export { start };