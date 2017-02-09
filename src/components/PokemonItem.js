import React from 'react';

export default function PokemonItem({ pokemon, onPokemonClick }){
  return(
    <div>
      <a href='#' onClick={function(){ onPokemonClick(pokemon.url); }}>{ pokemon.name }</a>
    </div>
  );
}
