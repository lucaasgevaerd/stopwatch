import { createContainerLapResults } from "./modules/lap-results/createContainerLapResults.js";
import { handleClickLap } from "./modules/button-actions/handleClickLap.js";
import { handleClickReset } from "./modules/button-actions/handleClickReset.js";
import { handleClickPlay } from "./modules/button-actions/handleClickPlay.js";
import { handleClickPause } from "./modules/button-actions/handleClickPause.js";

let execution = {
  paused: undefined,
  id_timer: undefined
}

let timer = {
  timeDifference: undefined,
  aux: undefined,
  hours: undefined,
  minutes: undefined,
  seconds: undefined,
  milliseconds: undefined,
  laps: undefined
}

const buttonPlayOrPause = document.querySelector(".button-play");
const buttonLapOrReset = document.querySelector(".button-reset");

buttonPlayOrPause.addEventListener("click", handleClickPlayOrPause);

function handleClickPlayOrPause() {
  buttonLapOrReset.addEventListener("click", handleClickLapOrReset);
  if (buttonPlayOrPause.classList[1] === "button-play") {
    handleClickPlay(buttonPlayOrPause, buttonLapOrReset, execution, timer);
  } else if (buttonPlayOrPause.classList[1] === "button-pause") {
    handleClickPause(buttonPlayOrPause, buttonLapOrReset, execution, timer);
  }
}

function handleClickLapOrReset() {
  if (buttonLapOrReset.classList[1] === "button-lap") {
    if (document.querySelector(".result-laps-container") === null) {
      createContainerLapResults();
    }
    handleClickLap(timer);
  } else if (buttonLapOrReset.classList[1] === "button-reset") {
    handleClickReset(execution, timer, buttonPlayOrPause, buttonLapOrReset);
  }
}