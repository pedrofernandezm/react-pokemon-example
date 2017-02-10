import React from 'react';
import Stats from './Stats.js';
import Loader from './Loader.js';

function renderProfile(pokemon, loading){
  if( loading ){
    return <Loader />
  }else{
    if( pokemon ){
      return(
        <div className="container">
          <div>
            <img src={`http://pokemongifs.surge.sh/${pokemon.name}.gif`} alt={pokemon.name} />
            <h2>{ pokemon.name }</h2>
          </div>
          <Stats pokemon={pokemon} />
        </div>
      );
    }else{
      return(
        <div className="container">
          <h2>Please select a pokemon from the list</h2>
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
