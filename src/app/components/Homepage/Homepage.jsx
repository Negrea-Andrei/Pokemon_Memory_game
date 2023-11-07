import React, { useState } from "react";
import "./Homepage.css";

export default function Homepage({ startGame }) {
  const [isFadedOut, setIsFadedOut] = useState(false);

  const pressPokeball = () => {

    setIsFadedOut(true);

    setTimeout(() => {
      startGame();
    }, 700);
  };

  return (
    <div className={`home_page ${isFadedOut ? "fade-out" : ""}`}>
      <div className="top"></div>
      <div className="middle">
        <button className="button" onClick={pressPokeball}></button>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
