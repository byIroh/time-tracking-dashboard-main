import React from "react";

function Time({ time, prevTime }) {
  return (
    <div>
      <h3 className="time">
        {time}
        {time === 1 ? "hr" : "hrs"}
      </h3>
      <p className="last-week-time">
        Last Week - {prevTime}
        {prevTime === 1 ? "hr" : "hrs"}
      </p>
    </div>
  );
}

export default Time;
