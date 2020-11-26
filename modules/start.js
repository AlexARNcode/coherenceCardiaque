import { disablePlay, enablePlay } from "./startBtn.js";

/*
Main actions to do here
1/ Disable play button for 5 minutes.
2/ Play an audio file for 5 sec, then another audio file for 5 sec, etc etc... until 5 minutes total.
3/ Show a progress bar during the 5 minutes.
4/ After 5 minutes : Stop the progressbar, stop the sound, and enable the play button
*/

function start() {
    // 1/ Disable play button for 5 minutes.
    disablePlay();
    setTimeout(enablePlay, 3000); // 3000ms : set to 3s instead of 5 minutes for testing purposes

    // 2/ Play an audio file for 5 sec, then another audio file for 5 sec, etc etc... until 5 minutes total.

}

export { start };