import { padTo2Digits, padTo3Digits } from "../utils/padTo2Or3Digits.js";
import { insertResultByLap } from "../lap-results/insertResultByLap.js";
import { calculatePartTime } from "../lap-results/calculatePartTime.js";

export function handleClickLap(timer) {
  timer.laps++;
  timer.milliseconds = parseInt(timer.timeDifference.toString().slice(-3));
  timer.seconds = timer.timeDifference / 1000;
  timer.minutes = timer.seconds / 60;
  timer.hours = timer.minutes / 60;
  timer.seconds = timer.seconds % 60;
  timer.minutes = timer.minutes % 60;
  timer.hours = timer.hours % 60;

  const partContent = calculatePartTime(timer.timeDifference);
  const totalContent = `${padTo2Digits(Math.floor(timer.hours))}:${padTo2Digits(
    Math.floor(timer.minutes)
  )}:${padTo2Digits(Math.floor(timer.seconds))}.${padTo3Digits(
    Math.floor(timer.milliseconds)
  )}`;

  insertResultByLap(timer.laps, partContent, totalContent);
}
