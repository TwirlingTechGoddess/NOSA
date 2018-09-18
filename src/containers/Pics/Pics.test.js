import React from 'react';
import { shallow } from 'enzyme';
import Pics, { handleYessa, handleNosa, mapStateToProps, mapDispatchToProps } from './Pics';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index.js';
import { addDebunks } from '../../actions/index.js';

describe('Pics container', () => {
  let wrapper;
  let mockStore = createStore(rootReducer);

  describe('Pics component', () => {

    beforeEach(() => {
      wrapper = (
        <Provider store={mockStore}>
          <Pics />
        </Provider>
      );
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should invoke handleYessa when yes-button is clicked', () => {
      const mockEvent = jest.fn();
      wrapper.find('.yes-button').simulate('click', { mockEvent });
      wrapper.instance().handleYessa(mockEvent)
      expect(mockEvent).toBeCalled();
    });

    it('should update state when handleYessa is invoked', () => {
      wrapper.setStat({url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''});
      const expected = {url: 'https://epic.crab.nasa.gov.png', id: 7, text: ''};
      wrapper.instance().handleYessa(mockEvent)
      expect(wrapper.state(pic)).toEqual(expected)
    })

    it('handleYessa should be called with the correct params', () => {
      const mockEvent = jest.fn()
      const mockImages = [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}]
      wrapper.dive().dive().instance().handleYessa(mockEvent)
      expect(mockEvent).toHaveBeenCalledWith(mockImages)
    })

    it('should invoke handleNosa when no-button is clicked', () => {
      const mockEvent = jest.fn();
      wrapper.find('.no-button').simulate('click', { mockEvent });
      wrapper.instance().handleNosa(mockEvent)
      expect(mockEvent).toBeCalled();
    });

    it('should update state when handleNosa is invoked', () => {
      wrapper.setStat({url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''});
      const expected = {url: 'https://epic.crab.nasa.gov.png', id: 7, text: ''};
      wrapper.instance().handleNosa(mockEvent)
      expect(wrapper.state(pic)).toEqual(expected)
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