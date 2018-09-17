import React from 'react';
import Debunks, { mapStateToProps } from './Debunks';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';


describe('Debunks container', () => {
  let wrapper
  let mockStore = createStore(rootReducer);

  describe('Debunks component', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={mockStore}>
          <Debunks />
        </Provider>
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should iterate over the debunks array and return an array of image elements', () => {
      const mockState = {
        debunks: [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}],
      }
      const expected = [<img className='yessa' src='https://epic.gsfc.nasa.gov.png'/>]
      expect(wrapper.find('.yessa')).toEqual(1)
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with the debunks array', () => {
      const mockState = {
        debunks: [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}],
      }
      const expected = {
        debunks: [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}]
      }
      console.log(mapStateToProps)
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

})