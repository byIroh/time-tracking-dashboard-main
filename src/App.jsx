import React, { useState } from "react";

import "./App.css";
import data from "./assets/data.json";

import Profile from "./components/Profile";
import Category from "./components/Category";

function App() {
  const [currentPeriod, setPeriod] = useState("weekly");

  function updatePeriod(selected) {
    setPeriod(selected);
  }

  return (
    <div className="container">
      <Profile currentPeriod={currentPeriod} updatePeriod={updatePeriod} />
      {data.map(({ title, timeframes }, i) => {
        return (
          <Category
            key={i}
            title={title}
            currentPeriod={currentPeriod}
            timeframes={timeframes}
          />
        );
      })}
    </div>
  );
}

export default App;
