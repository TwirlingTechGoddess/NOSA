import React from 'react';
import { shallow } from 'enzyme';
import Pics, { mapStateToProps, mapDispatchToProps } from './Pics';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index.js';
import { addDebunks } from '../../actions/index.js';

describe('Pics container', () => {
  let wrapper;
  let mockStore = createStore(rootReducer);

  describe('Pics component', () => {

    it('should match the snapshot', () => {
      wrapper = (
        <Provider store={mockStore}>
          <Pics />
        </Provider>
      );
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {

    it('should return an object with the images array', () => {
      const mockState = {
        images: [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}],
        clicked: true
      }
      const expected = {
        images: [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}]
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

    it('should return an object with the debunks array', () => {
      const mockState = {
        debunks: [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}],
      }
      const expected = {
        debunks: [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}]
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should calls dispatch when the addDebunks funtion is invoked', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = addDebunks([{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}])
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addDebunks([{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

})