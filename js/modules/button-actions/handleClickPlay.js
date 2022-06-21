import { elapsedTime } from "../stopwatch/elapsedTime.js";

export function handleClickPlay(buttonPlayOrPause, buttonLapOrReset, execution, timer) {
    const imgPause = document.createElement("img");
    imgPause.src = "../../../assets/images/pause.svg";
    const imgLap = document.createElement("img");
    imgLap.src = "../../../assets/images/lap.svg";
    
    const buttonsContainer = document.querySelector(".buttons-container");
    
    buttonPlayOrPause.innerHTML = "";
    buttonPlayOrPause.classList.remove("button-play");
    buttonPlayOrPause.classList.add("button-pause");
    buttonPlayOrPause.appendChild(imgPause);
    const textPause = document.createTextNode("Pausar");
    buttonPlayOrPause.appendChild(textPause);
    execution.paused = false;

    buttonLapOrReset.innerHTML = "";
    buttonLapOrReset.classList.remove("button-reset");
    buttonLapOrReset.classList.add("button-lap");
    buttonLapOrReset.appendChild(imgLap);
    const textLap = document.createTextNode("Volta");
    buttonLapOrReset.appendChild(textLap);

    if(buttonLapOrReset.style.display = "none") {
      buttonLapOrReset.style.display = "flex";
    }
    
    buttonsContainer.style.justifyContent = "space-between";

    if (timer.laps === undefined) {
      timer.laps = 0;
    }

    elapsedTime(execution, timer);
}