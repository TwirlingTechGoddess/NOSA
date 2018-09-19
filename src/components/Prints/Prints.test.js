import React from 'react';
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

  it('should return 4 articles', () => {
    expect(wrapper.find('article').length).toEqual(4);
  });
});
