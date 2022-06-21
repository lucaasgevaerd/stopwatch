import { padTo2Digits, padTo3Digits } from "../utils/padTo2Or3Digits.js";

const resultHours = document.querySelector(".result-hours");
const resultMinutes = document.querySelector(".result-minutes");
const resultSeconds = document.querySelector(".result-seconds");
const resultMilliseconds = document.querySelector(".result-milliseconds");
const resultFirstDivisionColon = document.querySelector(".first-division-colon");
const resultSecondDivisionColon = document.querySelector(".second-division-colon");
const resultThirdDivisionPeriod = document.querySelector(".third-division-period");

export function insertStopwatch(timer) {
  resultHours.innerHTML = `${padTo2Digits(Math.floor(timer.hours))}`;
  resultFirstDivisionColon.innerHTML = ":";
  resultMinutes.innerHTML = `${padTo2Digits(Math.floor(timer.minutes))}`;
  resultSecondDivisionColon.innerHTML = ":";
  resultSeconds.innerHTML = `${padTo2Digits(Math.floor(timer.seconds))}`;
  resultThirdDivisionPeriod.innerHTML = ".";
  resultMilliseconds.innerHTML = `${padTo3Digits(timer.milliseconds)}`;
}