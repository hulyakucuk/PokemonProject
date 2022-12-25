import React, { useState, useEffect } from "react"
import axios from "axios"
import { capitilizer } from "../utils/utils";

import { useParams } from "react-router-dom";

const Pokemonscreen = () => {
  const [pokemonData, setPokemonData] = useState(null)
  let { pokemonName } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => {
        console.log(res.data);
        setPokemonData(res.data);
      })
  }, [])

  return (
    <div>
      <div style={{display:"grid",
  
        justifyContent:"center",
        color:"#196194"
       
        }}>
      <h1> {capitilizer(pokemonName)} </h1>
      <img src={pokemonData && pokemonData.sprites.other['dream_world']['front_default']} />
    </div>
    
    <div style={{ display: "grid", justifyContent: 'center'}}>
    <div style={{border:"0.1px solid black",textAlign:"center",padding:"20px",borderRadius:"5px",margin:"20px"}}>
            <div>
            <h2 style={{ color: "black" }}>Types: {pokemonData && pokemonData.types[0]["type"]["name"]}</h2>
            </div>
            
          
          
{/* 
            <div>
          <h2 style={{ color: "black" }}>ID:{pokemonData && pokemonData.held_items[2]}</h2>
          </div> */}
         <div>
            {pokemonData && pokemonData.abilities.map(item => {
              return (<h2 style={{ color: "black" }} key={item.url} >Abilities:{item.ability.name}</h2>)
            })}
         </div>
         </div>
        </div>
       
        </div>
  )
}

export default Pokemonscreen
