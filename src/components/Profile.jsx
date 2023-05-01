import React, { useEffect } from "react";

function Profile({ currentPeriod, updatePeriod }) {
  useEffect(() => {
    document.getElementById(`${currentPeriod}-btn`).checked = true;
  }, []);

  function handleChange(e) {
    updatePeriod(e.target.value);
  }

  return (
    <div className="profile">
      <div className="profile-details-section">
        <img className="profile-img" src="images/image-jeremy.png" />
        <div className="profile-details-wrapper">
          <p className="profile-text">Report for</p>
          <h1 className="profile-name">Jeremy Robson</h1>
        </div>
      </div>
      <div className="profile-period-btn-section">
        <input
          type="radio"
          name="period"
          value="daily"
          id="daily-btn"
          onChange={handleChange}
        />
        <label className="period-btn first-period-btn" htmlFor="daily-btn">
          Daily
        </label>
        <input
          type="radio"
          name="period"
          value="weekly"
          id="weekly-btn"
          onChange={handleChange}
        />
        <label className="period-btn" htmlFor="weekly-btn">
          Weekly
        </label>
        <input
          type="radio"
          name="period"
          value="monthly"
          id="monthly-btn"
          onChange={handleChange}
        />
        <label className="period-btn last-period-btn" htmlFor="monthly-btn">
          Monthly
        </label>
      </div>
    </div>
  );
}

export default Profile;
