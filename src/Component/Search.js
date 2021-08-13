import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';


function Search() {

    const [ pokemonName, setPokemonName] = useState("");

     

    const searchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`). then((response) => {
            console.log(response);
        }
        );
    }

    return (
        <div className="Search">
            <input type='text' onChange ={( e ) =>
                {setPokemonName( e.target.value)} 
            }/> 
            <button onClick={ searchPokemon }>Pokemon Search</button> 
        </div>
    )
}

export default Search
