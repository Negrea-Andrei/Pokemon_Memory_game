import React, { useState } from "react";
import './Game.css'

export default function Game() {
  const [isFadedIn, setIsFadedIn] = useState(false);

  setTimeout(() => {
    setIsFadedIn(true);
  },100);

  return <div className={`test ${isFadedIn ? "fade-in" : ""}`}>Test</div>;
}
