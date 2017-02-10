import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PokemonProfile from '../components/PokemonProfile.js';
import Loader from '../components/Loader.js';
import Stats from '../components/Stats.js';

let pokemon;
let loading;
let component;

describe('PokemonProfile while loading', function() {

  beforeEach( () => {
    pokemon = { name: "Pikachu" };
    loading = true;
    component = <PokemonProfile pokemon={pokemon} loading={loading}/>;
  });

  it('renders loader without crashing', () => {
    loading = true;
    expect(shallow(component).contains(<Loader />)).toBe(true);
  });

});

describe('PokemonProfile with a pokemon', () => {

  beforeEach( () => {
    pokemon = { name: "Pikachu" };
    loading = false;
    component = <PokemonProfile pokemon={pokemon} loading={loading}/>;
  });

  it('renders without crashing', () => {
    expect(shallow(component).contains(<h1>Pikachu</h1>)).toBe(true);
  });

  it('does not render the spinner', () => {
    expect(shallow(component).contains(<Loader />)).toBe(false);
  });

  it('renders pokemon stats', () => {
    expect(shallow(component).contains(<Stats pokemon={pokemon} />)).toBe(true);
  });

});

describe('PokemonProfile without a pokemon', () => {

  beforeEach( () => {
    pokemon = null;
    loading = false;
    component = <PokemonProfile pokemon={pokemon} loading={loading}/>;
  });

  it('renders text advicing selection', () => {
    expect(shallow(component).contains(<p>Please select a pokemon from the list</p>)).toBe(true);
  });
});
