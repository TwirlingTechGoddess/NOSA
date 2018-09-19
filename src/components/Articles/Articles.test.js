import React from 'react';
import { shallow } from 'enzyme';
import Articles from './Articles';

describe('Articles', () => {
  const wrapper = shallow(<Articles />);

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
