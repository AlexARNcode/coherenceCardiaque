import { disablePlay, enablePlay } from "./startBtn.js";
import { playBgMusic, stopBgMusic, playSound } from "./sound.js";

/*
Main actions to do here
1/ Disable play button for 5 minutes.
2/ Play an audio file for 5 sec, then another audio file for 5 sec, etc etc... until 5 minutes total.
2bis/ Play a background music for 5 minutes.
3/ Show a progress bar during the 5 minutes.
4/ After 5 minutes : Stop the progressbar, stop the sound, and enable the play button
*/

function start() {
    // 1/ Disable play button for 5 minutes.
    disablePlay();

    // 2/ Play an audio file for 5 sec, then another audio file for 5 sec, etc etc... until 5 minutes total.
    playBgMusic();
    window.setInterval(playSound, 5000);

    // Stop everything after 5 minutes
    setTimeout(enablePlay, 15000);
    setTimeout(stopBgMusic, 15000);
}

export { start };