import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers/index';
import Header, { mapStateToProps } from './Header';

describe('Header', () => {
  let wrapper
  let mockState
  let expected

  describe('React attributes of the Header component', () => {
    const mockStore = createStore(rootReducer);

    it('should match the snapshot', () => {
      wrapper = shallow(
        <Provider store={mockStore}>
          <Header />
        </Provider>
      );

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    it('should return a debunks object', () => {
      mockState = {
        debunks: [ { url: 'https://epic.gsfc.nasa.gov.png', id: 3 } ]
      }
      expected = {
        debunks: [ { url: 'https://epic.gsfc.nasa.gov.png', id: 3 } ]
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(mockState)
    })
  })

})