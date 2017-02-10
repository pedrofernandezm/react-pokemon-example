import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PokemonItem from '../components/PokemonItem.js';

let pokemon = {
  url: "http://pokeapi.co/api/v2/pokemon/1/",
  name: "bulbasaur"
};
let mockClick = jest.fn();

describe('PokemonItem', () => {

  it('renders without crashing', () => {
    var component = shallow(<PokemonItem pokemon={pokemon} onPokemonClick={mockClick} />)
    var link = component.find('a');
    expect(link.exists()).toBe(true);
  });

  it('renders the pokemon name', () => {
    var component = shallow(<PokemonItem pokemon={pokemon} onPokemonClick={mockClick} />)
    var link = component.find('a');
    expect(link.contains(pokemon.name)).toBe(true);
  });

  it('sends the url when clicked', () => {
    var component = shallow(<PokemonItem pokemon={pokemon} onPokemonClick={mockClick} />)
    var link = component.find('a');
    link.simulate('click');
    expect(mockClick.mock.calls.length).toBe(1);
    expect(mockClick.mock.calls[0][0]).toBe(pokemon.url);
  });

});
