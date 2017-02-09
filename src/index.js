import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokedex from './components/Pokedex.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <div className="row">
    <Pokedex />
  </div>
  , document.getElementById('root')
);
