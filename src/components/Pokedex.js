import React, { Component } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.js';
import PokemonProfile from './PokemonProfile.js';

export default class Pokedex extends Component{

  constructor(){
    super();
    this.state = {
      pokemonList: [],
      loadingList: false,
      loadingPokemon: false,
      pokemon: null
    };
    this.getPokemons = this.getPokemons.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
  }

  getPokemons(){
    this.setState({
      loadingList: true
    });
    return axios.get('http://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        this.setState({
          pokemonList: response.data.results,
          loadingList: false
        });
      });
  }

  getPokemon(url){
    this.setState({
      loadingPokemon: true
    });
    return axios.get(url)
      .then((response) => {
        this.setState({
          pokemon: response.data,
          loadingPokemon: false
        });
      });
  }

  componentDidMount(){
    this.getPokemons();
  }

  render() {
    return(
      <div>
        <div className="col-md-3">
          <PokemonList pokemons={ this.state.pokemonList } loading={ this.state.loadingList } onPokemonClick={this.getPokemon} />
        </div>
        <div className="col-md-9">
          <div className="text-center">
            <PokemonProfile pokemon={ this.state.pokemon } loading={ this.state.loadingPokemon } />
          </div>
        </div>
      </div>
    );
  }
}
