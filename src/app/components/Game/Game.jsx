import React, { useState } from "react";
import "./Game.css";

export default function Game({
  handleDivClick,
  handleRestartGame,
  fetchPokemonData,
  gameOver,
  start,
  pokemonData,
}) {
  const [isFadedIn, setIsFadedIn] = useState(false);

  setTimeout(() => {
    setIsFadedIn(true);
  }, 100);

  return (
    <div className={`container ${isFadedIn ? "fade-in" : ""}`}>
      {start ? (
        <div className="game">
          <h1>Gen 1 Pokemon</h1>
          <div className="pokemon-grid">
            {pokemonData.map((pokemon, index) => (
              <div
                key={index}
                className="pokemon-card"
                onClick={() => handleDivClick(pokemon.name)}
              >
                <img src={pokemon.image} alt={`Pokemon ${index + 1}`} />
                <p>{pokemon.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  );
}
