import React from 'react';
import { Debunks, mapStateToProps } from './Debunks';
import { shallow } from 'enzyme';


describe('Debunks container', () => {
  let wrapper

  describe('Debunks component', () => {
    beforeEach(() => {
      wrapper = shallow(<Debunks />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should iterate over the debunks array and return an array of image elements', () => {
      const mockState = {url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}
      const expected = [<img className='yessa' src={mockState.url}/>]
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