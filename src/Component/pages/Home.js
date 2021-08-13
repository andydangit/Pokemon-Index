import React from 'react'
import Navbar from "../Navbar"
import Search from '../Search'
import PokeDetail from './PokemonList'

export default function Home() {
    return (
        <div className="Home">
            <Navbar />  
            <PokeDetail />           
        </div>
    )
}
