import React from 'react';
import { shallow } from 'enzyme';
import Pics, { mapStateToProps, mapDispatchToProps } from './Pics';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index.js';
import { addNosa } from '../../actions/index.js';

describe('Pics', () => {
  let wrapper;
  let mockStore = createStore(rootReducer);

  it('should match the snapshot', () => {
    wrapper = (
      <Provider store={mockStore}>
        <Pics />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot()
  })
})