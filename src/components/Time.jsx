import React from "react";

function Time({ time, prevTime }) {
  return (
    <div>
      <p className="time">
        {time}
        {time === 1 ? "hr" : "hrs"}
      </p>
      <p className="last-week-time">
        Last Week - {prevTime}
        {prevTime === 1 ? "hr" : "hrs"}
      </p>
    </div>
  );
}

export default Time;
