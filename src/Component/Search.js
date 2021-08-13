import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

function Search() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);

  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
      });
  };

  return (
    <div className="Search">
      <input
        type="text"
        onChange={(e) => {
          setPokemonName(e.target.value);
        }}
      />
      <button onClick={searchPokemon}>Pokemon Search</button>

      <div className="display">
        {!pokemonChosen ? (
          <h1> Please pick a Pokemon </h1>
        ) : (
          <h1> {pokemonName} </h1>
        )}
      </div>
    </div>
  );
}

export default Search;
