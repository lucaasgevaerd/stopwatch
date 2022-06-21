import { padTo2Digits, padTo3Digits } from "../utils/padTo2Or3Digits.js";

let millisecondDiff;
let secondDiff;
let minuteDiff;
let hourDiff;

export const lapVector = [];
let newTimeDifference;
let oldTimeDifference;
let timeDifferenceResult;

export function calculatePartTime(timeDifference) {
  lapVector.push(timeDifference);
  newTimeDifference = lapVector[lapVector.length - 1];
  oldTimeDifference = lapVector[lapVector.length - 2];

  if (oldTimeDifference === undefined) {
      millisecondDiff = parseInt(timeDifference.toString().slice(-3));
      secondDiff = timeDifference / 1000;
      minuteDiff = secondDiff / 60;
      hourDiff = minuteDiff / 60;
      secondDiff = secondDiff % 60;
      minuteDiff = minuteDiff % 60;
      hourDiff = hourDiff % 60;
  } else {
      timeDifferenceResult = newTimeDifference - oldTimeDifference;
      millisecondDiff = parseInt(timeDifferenceResult.toString().slice(-3));
      secondDiff = timeDifferenceResult / 1000;
      minuteDiff = secondDiff / 60;
      hourDiff = minuteDiff / 60;
      secondDiff = secondDiff % 60;
      minuteDiff = minuteDiff % 60;
      hourDiff = hourDiff % 60;
  }
  return `${padTo2Digits(Math.floor(hourDiff))}:${padTo2Digits(
    Math.floor(minuteDiff)
  )}:${padTo2Digits(Math.floor(secondDiff))}.${padTo3Digits(
    Math.floor(millisecondDiff)
  )}`;
}
