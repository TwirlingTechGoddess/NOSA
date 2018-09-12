import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Landing, { mapStateToProps, mapDispatchToProps } from './Landing';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index.js';
import { Provider } from 'react-redux';

describe('Landing', () => {
  let wrapper
  let mockStore = createStore(rootReducer);

  it('should match the snapshot', () => {
    wrapper = shallow(
      <Provider store={mockStore}>
        <Landing />
      </Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })



})