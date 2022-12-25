import { capitilizer } from '../../utils/utils'
import React from 'react'
import { CardContainer,Title,PokemonImage} from './style'
import {Link} from "react-router-dom";


const Card = (props) => {
  return (
    <Link style={{ textDecoration:"none"}}
    to={`/pokemon/${props.name}`}>
    <CardContainer>
      <PokemonImage 
      src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg` }/>
      <Title>
      {capitilizer(props.name)}
      </Title>

    </CardContainer>
    </Link>
  )
}

export default Card

