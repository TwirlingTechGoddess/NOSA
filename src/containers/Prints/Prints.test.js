import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Prints } from './Prints';

describe('Prints', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Prints />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});