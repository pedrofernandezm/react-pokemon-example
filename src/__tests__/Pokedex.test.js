import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Pokedex from '../components/Pokedex.js';
import sinon from 'sinon';
import axios from 'axios';
import pokemons from '../fixtures/pokemons.js';

let component;

describe('Pokedex', function() {

  it('renders loader without crashing', (done) => {
    const response = sinon.stub(axios, 'get').returns(Promise.resolve( { data: pokemons } ));
    var component = mount(<Pokedex />);
    var state = component.state();
    expect(state.loadingList).toBe(true);
    setImmediate(() => {
      state = component.state();
      expect(state.loadingList).toBe(false);
      expect(state.pokemonList).toHaveLength(pokemons.results.length);
      done();
    });
  });

});
