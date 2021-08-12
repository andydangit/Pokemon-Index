import React from 'react'
import Navbar from "../Navbar"
import PokeDetail from './PokeDetail'

export default function Home() {
    return (
        <div className="Home">
            <Navbar />  
            <PokeDetail />           
        </div>
    )
}
