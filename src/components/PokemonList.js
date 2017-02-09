import React from 'react';
import PokemonItem from './PokemonItem.js';
import Spinner from 'react-spinkit';

export default function PokemonList({ pokemons, loading, onPokemonClick }){
  if( loading ){
    return <Spinner spinnerName='double-bounce' />
  }else{
    return(
      <div>
        <h1>Pokemons</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              pokemons.map(function(item) {
                return(
                  <tr key={item.name}>
                    <td><PokemonItem pokemon={item} onPokemonClick={onPokemonClick} /></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
