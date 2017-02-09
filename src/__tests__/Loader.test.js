import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Loader from '../components/Loader.js';
import Spinner from 'react-spinkit';

describe('Loader', function() {

  it('renders without crashing', () => {
    expect(shallow(<Loader />).contains(<Spinner spinnerName='double-bounce' />)).toBe(true);
  });

  it('should be selectable by class "spinner"', () => {
    expect(shallow(<Loader />).is('.spinner')).toBe(true);
  });

});
