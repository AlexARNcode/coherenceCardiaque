import { disablePlay, enablePlay } from "./startBtn.js";
import { playBgMusic, stopBgMusic, playSound } from "./sound.js";

/*
Main actions to do here
1/ Disable play button on it's clicked.
2/ Play an audio file for 5 sec, then another audio file for 5 sec, etc etc..
2bis/ Play a background music for 5 minutes.
3/ Show a progress bar during the 5 minutes.
4/ Show an animation: 5 seconds in, 5 seconds out.
4/ After 5 minutes : Stop the progressbar, stop animation, stop every sounds, enable the play button.
*/

function start() {
    // 1/ Disable play button.
    disablePlay();

    // 2/ Play an audio file each 5 seconds.
    playBgMusic();
    const bells = setInterval(playSound, 5000);

    // 4/ After 5 minutes : Stop the progressbar, stop animation, stop every sounds, enable the play button.
    const totalTime = 15000; // modify this value for testing purposes (ms).

    function stopBells() {
        clearInterval(bells);
    }

    setTimeout(stopBells, totalTime);
    setTimeout(stopBgMusic, totalTime);
    setTimeout(enablePlay, totalTime);
}

export { start };