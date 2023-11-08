import React, { useState } from "react";
import "./Game.css";

export default function Game({
  handleDivClick,
  gameOver,
  start,
  pokemonData,
  score,
  bestScore,
}) {
  return (
    <div className="container">
      {start ? (
        <div className="game">
          {gameOver ? (
            <>
              <p className="game-over">Game Over</p>
              <p style={{ color: "white" }}>Score:{score}</p>
              <p style={{ color: "white" }}>Best Score:{bestScore}</p>
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
                    <img src={pokemon.image} alt={`Pokemon ${index + 1}`} />
                    <p>
                      {pokemon.name.slice(0, 1).toUpperCase() +
                        pokemon.name.slice(1)}
                    </p>
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
