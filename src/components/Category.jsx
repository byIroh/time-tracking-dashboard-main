import React, { useEffect, useState } from "react";

import Time from "./Time";

function Category({ title, currentPeriod, timeframes }) {
  const iconName = title.toLowerCase().replace(/ /g, "-");
  const imgSrc = `/images/icon-${iconName}.svg`;

  const { daily, weekly, monthly } = timeframes;

  return (
    <div className="category">
      <div className={`category-hue ${iconName}`}></div>
      <div className="category-icon-container">
        <img className={`${iconName}-icon`} src={imgSrc} />
      </div>
      <div className="category-content">
        <div className="category-description">
          <h2 className="category-title">{title}</h2>
          <img className="ellipsis-icon" src="/images/icon-ellipsis.svg" />
        </div>
        <div className="time-section">
          {currentPeriod === "daily" && (
            <Time time={daily.current} prevTime={daily.previous} />
          )}
          {currentPeriod === "weekly" && (
            <Time time={weekly.current} prevTime={weekly.previous} />
          )}
          {currentPeriod === "monthly" && (
            <Time time={monthly.current} prevTime={monthly.previous} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
