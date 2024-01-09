import React from "react";
import "./Game.css";

export default function Game({
  handleDivClick,
  gameOver,
  start,
  pokemonData,
  handleRestartGame,
  score,
  bestScore,
}) {
  return (
    <div className="container-game">
      {start ? (
        <div className="game">
          {gameOver ? (
            <>
              <p className="game-over">Game Over</p>
              <p style={{ color: "white" }}>Score:{score}</p>
              <p style={{ color: "white" }}>Best Score:{bestScore}</p>
              <button className="restart" onClick={handleRestartGame}>
                Try again?
              </button>
            </>
          ) : (
            <>
              <h1>Gen 1 Pokemon</h1>
              <div className="pokemon-grid">
                <div className="points">
                  <p>Score:{score}</p>
                  <p>Best Score:{bestScore}</p>
                </div>
                {pokemonData.map((pokemon, index) => (
                  <div
                    key={index}
                    className="pokemon-card"
                    onClick={() => handleDivClick(pokemon.name)}
                  >
                    <img src={pokemon} alt={`Pokemon ${index + 1}`} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
