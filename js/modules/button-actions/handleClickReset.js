import { removeAllLapResults } from "../lap-results/removeAllLapResults.js";
import { lapVector } from "../lap-results/calculatePartTime.js";
import { insertStopwatch } from "../stopwatch/insertStopwatch.js";

export function handleClickReset(execution, timer, buttonPlayOrPause, buttonLapOrReset) {

  const imgPlay = document.createElement("img");
  imgPlay.src = "../../../assets/images/play.svg";

  const buttonsContainer = document.querySelector(".buttons-container");
  if (document.querySelector(".result-laps-container") !== null) {
    removeAllLapResults();
  }
  execution.id_timer = undefined;
  timer.timeDifference = 0;
  timer.milliseconds = 0;
  timer.seconds = 0;
  timer.minutes = 0;
  timer.hours = 0;
  timer.aux = 0;
  timer.laps = 0;
  lapVector.length = 0;

  insertStopwatch(timer);
  buttonPlayOrPause.innerHTML = "";
  buttonPlayOrPause.appendChild(imgPlay);
  const textPlay = document.createTextNode("Iniciar");
  buttonPlayOrPause.appendChild(textPlay);
  buttonLapOrReset.style.display = "none";
  buttonsContainer.style.justifyContent = "center";
}
