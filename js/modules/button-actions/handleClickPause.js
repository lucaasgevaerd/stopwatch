import { elapsedTime } from "../stopwatch/elapsedTime.js";

export function handleClickPause(buttonPlayOrPause, buttonLapOrReset, execution, timer) {

    const imgPlay = document.createElement("img");
    imgPlay.src = "../../../assets/images/play.svg";
    const imgReset = document.createElement("img");
    imgReset.src = "../../../assets/images/reset.svg";

    buttonPlayOrPause.innerHTML = "";
    buttonPlayOrPause.classList.remove("button-pause");
    buttonPlayOrPause.classList.add("button-play");
    buttonPlayOrPause.appendChild(imgPlay);
    const textPlay = document.createTextNode("Continuar");
    buttonPlayOrPause.appendChild(textPlay);
    execution.paused = true;

    buttonLapOrReset.innerHTML = "";
    buttonLapOrReset.classList.remove("button-lap");
    buttonLapOrReset.classList.add("button-reset");
    buttonLapOrReset.appendChild(imgReset);
    const textReset = document.createTextNode("Resetar");
    buttonLapOrReset.appendChild(textReset);

    elapsedTime(execution, timer);
}