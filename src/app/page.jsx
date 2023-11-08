"use client"
import Homepage from "./components/Homepage/Homepage";
import Game from "./components/Game/Game";
import { useState } from "react";

function getRandomPokemon() {
  const gen1Pokemon = [
    "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
    "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
    "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot",
    "rattata", "raticate", "spearow", "fearow", "ekans", "arbok",
    "pikachu", "raichu", "sandshrew", "sandslash", "nidoran-f", "nidorina",
    "nidoqueen", "nidoran-m", "nidorino", "nidoking", "clefairy", "clefable",
    "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat",
    "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth",
    "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey",
    "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath",
    "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout",
    "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler",
    "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton",
    "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder",
    "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno",
    "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone",
    "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing",
    "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra",
    "goldeen", "seaking", "staryu", "starmie", "mr. mime", "scyther", "jynx",
    "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras",
    "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte",
    "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno",
    "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"
  ];

  const randomPokemon = [];
  while (randomPokemon.length < 10) {
    const randomIndex = Math.floor(Math.random() * gen1Pokemon.length);
    if (!randomPokemon.includes(gen1Pokemon[randomIndex])) {
      randomPokemon.push(gen1Pokemon[randomIndex]);
    }
  }

  return randomPokemon;
}


export default function App() {
  const [start, setStart] = useState(false);

  const startGame = () => {
    setStart(true)
  }

  console.log(getRandomPokemon())

  return (
    <div className="container">
      {start ? <Game /> : <Homepage startGame={startGame} />}
    </div>
  );
}
