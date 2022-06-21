export function removeAllLapResults () {
    const mainContainer = document.querySelector(".main-container");
    const resultLapsContainer = document.querySelector(".result-laps-container");
    mainContainer.removeChild(resultLapsContainer);
}