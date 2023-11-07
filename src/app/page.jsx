"use client"
import Homepage from "./components/Homepage/Homepage";
import { useState } from "react";


export default function App() {
  const [start, setStart] = useState(false);

  const startGame = () => {
    setStart(true)
  }

  return (
    <>
      {start ? null : <Homepage startGame={startGame} />}
    </>
  );
}
