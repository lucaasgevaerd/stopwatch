import { insertStopwatch } from "../stopwatch/insertStopwatch.js";

export function elapsedTime(execution, timer) {
    const currentTime = new Date();
    if (execution.paused === false) {
      execution.id_timer = setInterval(() => {
        if (timer.aux === undefined) {
          timer.timeDifference = Date.now() - currentTime;
        } else {
          timer.timeDifference = timer.aux + Date.now() - currentTime;
        }
        timer.milliseconds = parseInt(timer.timeDifference.toString().slice(-3));
        timer.seconds = timer.timeDifference / 1000;
        timer.minutes = timer.seconds / 60;
        timer.hours = timer.minutes / 60;
        timer.seconds = timer.seconds % 60;
        timer.minutes = timer.minutes % 60;
        timer.hours = timer.hours % 60;
        insertStopwatch(timer);
      }, 51);
    } else if (execution.paused === true) {
      clearInterval(execution.id_timer);
    }
    timer.aux = timer.timeDifference;
  }