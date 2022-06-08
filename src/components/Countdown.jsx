import { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  togglecountdownOn,
  timerRestart,
  timerTickBack,
  timerCancel,
  setPercentage,
} from "../redux/slices/countdownSlice";
import { useSelector, useDispatch } from "react-redux";
import { toggleStart } from "../redux/slices/timesetterSlice";

import lead from "./helpers/lead";

function Countdown() {
  const dispatch = useDispatch();
  const {
    seconds: timerSeconds,
    initialSeconds: allSeconds,
    percentage,
  } = useSelector((state) => state.countdown);

  const { countdownOn } = useSelector((state) => state.countdown);

  const hours = ~~(timerSeconds / 3600);
  const minutes = ~~((timerSeconds % 3600) / 60);
  const seconds = ~~((timerSeconds % 3600) % 60);

  const bool = hours + minutes + seconds > 0;

  function handleRestart() {
    dispatch(timerRestart());
    dispatch(setPercentage({ percentage: 100 }));
  }

  function handleCancel() {
    dispatch(timerCancel());
    dispatch(toggleStart());
  }

  useEffect(() => {
    let timer = null;
    if (countdownOn) {
      timer = setInterval(() => {
        if (!hours && !minutes && !seconds) return;
        dispatch(timerTickBack());
        dispatch(
          setPercentage({ percentage: ((timerSeconds - 1) / allSeconds) * 100 })
        );
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="timer__body">
      <div className="timer__countdown">
        <div className="timer__time-counter">
          {bool ? (
            `${lead(hours)}:${lead(minutes)}:${lead(seconds)}`
          ) : (
            <>
              <p style={{ marginBottom: "20px" }}>Timer is over.</p>
              <button className="timer__cancel" onClick={handleCancel}>
                Cancel
              </button>
            </>
          )}
        </div>
        <CircularProgressbar value={percentage} strokeWidth={2} />
      </div>
      <div
        className="timer__buttons"
        style={{ justifyContent: `${bool ? "space-between" : "center"}` }}
      >
        {bool ? (
          <>
            <button className="timer__cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button
              className="timer__toggler"
              onClick={() => dispatch(togglecountdownOn())}
            >
              {countdownOn ? "Stop" : "Resume"}
            </button>
          </>
        ) : (
          <button className="timer__restart" onClick={handleRestart}>
            Restart
          </button>
        )}
      </div>
    </div>
  );
}

export default Countdown;
