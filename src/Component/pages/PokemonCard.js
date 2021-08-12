import React, {useState, useEffect} from 'react'
import axios from "axios";


function PokemonCard({ pokemonData }) {
    const [pokemon, setPokemon] = useState();
  
    useEffect(() => {
      //make function to get data
      const getPokemon = async () => {
        const res = await axios.get(pokemonData.url);
        return res.data;
      };
  
      // data
      getPokemon().then((data) => {
        setPokemon(data);
      });
    }, []);
  
    return (
      <div className="bg-gray-100 px-6 mx-4 h-24 w-60 my-6 border-2 hover:text-white transition duration-150 hover:border-gray-500 rounded-md hover:shadow-md hover:bg-blue-500">
        <h3>{pokemon?.name}</h3>
      </div>
    );
  }
  
  export default PokemonCard;
  