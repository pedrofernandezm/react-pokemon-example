import React from 'react';
import Stats from './Stats.js';
import Loader from './Loader.js';

function renderProfile(pokemon, loading){
  if( loading ){
    return <Loader />
  }else{
    if( pokemon ){
      return(
        <div>
          <div>
            <img src={`http://pokemongifs.surge.sh/${pokemon.name}.gif`} alt={pokemon.name} />
            <h1>{ pokemon.name }</h1>
          </div>
          <Stats pokemon={pokemon} />
        </div>
      );
    }else{
      return(
        <div>
          <p>Please select a pokemon from the list</p>
        </div>
      );
    }
  }
}


export default function PokemonProfile({ pokemon, loading }){
  return(
    renderProfile(pokemon, loading)
  );
}
