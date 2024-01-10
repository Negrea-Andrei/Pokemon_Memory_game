"use client";
import Homepage from "./components/Homepage/Homepage";
import Game from "./components/Game/Game";
import { useState, useEffect } from "react";

const gen1Pokemon = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran-f",
    "nidorina",
    "nidoqueen",
    "nidoran-m",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
    "magnemite",
    "magneton",
    "farfetchd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
    "electrode",
    "exeggcute",
    "exeggutor",
    "cubone",
    "marowak",
    "hitmonlee",
    "hitmonchan",
    "lickitung",
    "koffing",
    "weezing",
    "rhyhorn",
    "rhydon",
    "chansey",
    "tangela",
    "kangaskhan",
    "horsea",
    "seadra",
    "goldeen",
    "seaking",
    "staryu",
    "starmie",
    "mr-mime",
    "scyther",
    "jynx",
    "electabuzz",
    "magmar",
    "pinsir",
    "tauros",
    "magikarp",
    "gyarados",
    "lapras",
    "ditto",
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "porygon",
    "omanyte",
    "omastar",
    "kabuto",
    "kabutops",
    "aerodactyl",
    "snorlax",
    "articuno",
    "zapdos",
    "moltres",
    "dratini",
    "dragonair",
    "dragonite",
    "mewtwo",
    "mew"
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
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error("Error fetching random Pokemon:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  }

  useEffect(() => {
    fetchPokemonData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

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
