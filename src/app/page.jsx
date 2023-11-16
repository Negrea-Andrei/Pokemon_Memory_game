"use client";
import Homepage from "./components/Homepage/Homepage";
import Game from "./components/Game/Game";
import { useState, useEffect } from "react";

const gen1Pokemon = [
    "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape",
    "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor",
    "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray",
    "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon",
    "burmy", "wormadam", "mothim", "combee", "vespiquen", "pachirisu",
    "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon",
    "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius",
    "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank",
    "bronzor", "bronzong", "bonsly", "mime-jr", "happiny", "chatot", "spiritomb",
    "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas",
    "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine",
    "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile",
    "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire",
    "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor",
    "mamoswine", "porygon-z", "gallade", "probopass", "dusknoir", "froslass",
    "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran",
    "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai",
    "shaymin", "arceus"
  ];

function getRandomPokemon() {  

  const randomPokemon = [];
  while (randomPokemon.length < 15) {
    const randomIndex = Math.floor(Math.random() * gen1Pokemon.length);
    if (!randomPokemon.includes(gen1Pokemon[randomIndex])) {
      randomPokemon.push(gen1Pokemon[randomIndex]);
    }
  }

  return randomPokemon;
}

export default function App() {
  const [start, setStart] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [clickedPokemonNames, setClickedPokemonNames] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const startGame = () => {
    setStart(true);
  };

  async function fetchPokemonData() {
    try {
      const randomPokemon = getRandomPokemon();
      const pokemonDataPromises = randomPokemon.map(async (pokemon) => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
          );
          if (!response.ok) {
            throw Error(`HTTP Error! Status: ${response.status}`);
          }
          const data = await response.json();
          return {
            name: data.name,
            image: data.sprites.front_default,
          };
        } catch (error) {
          console.error("Error fetching Pokemon data:", error);
          return null;
        }
      });

      const data = await Promise.all(pokemonDataPromises);
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching random Pokemon:", error);
    }
  }

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const handleDivClick = (pokemonName) => {
    if (!clickedPokemonNames.includes(pokemonName)) {
      const updatedClickedPokemonNames = [...clickedPokemonNames, pokemonName];
      setClickedPokemonNames(updatedClickedPokemonNames);
      setScore((score) => score + 1);
      fetchPokemonData();
    } else {
      if (score > bestScore) {
        setBestScore(score);
      }
      setGameOver(true);
    }
  };

  const handleRestartGame = () => {
    setClickedPokemonNames([]);
    setScore(0);
    setGameOver(false);
    fetchPokemonData();
  };

  return (
    <div className="container">
      {start ? (
        <Game
          start={start}
          gameOver={gameOver}
          fetchPokemonData={fetchPokemonData}
          handleDivClick={handleDivClick}
          handleRestartGame={handleRestartGame}
          pokemonData={pokemonData}
          score={score}
          bestScore={bestScore}
        />
      ) : (
        <Homepage startGame={startGame} />
      )}
    </div>
  );
}
