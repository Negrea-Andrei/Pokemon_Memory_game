"use client"
import Homepage from "./components/Homepage/Homepage";
import Game from "./components/Game/Game";
import { useState } from "react";


export default function App() {
  const [start, setStart] = useState(false);

  const startGame = () => {
    setStart(true)
  }

  return (
    <div className="container">
      {start ? <Game /> : <Homepage startGame={startGame} />}
    </div>
  );
}
