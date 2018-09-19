import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Landing, mapStateToProps, mapDispatchToProps } from './Landing';
import { addImages } from '../../actions';

describe('Landing container', () => {
  let wrapper;

  describe('Landing component', () => {
    it('should match the snapshot', () => {
      wrapper = shallow(<Landing />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with the images array', () => {
      const mockState = {
        images: [{ url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: '' }],
        clicked: true,
      };
      const expected = {
        images: [{ url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: '' }],
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should calls dispatch when the addImages funtion is invoked', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addImages([{ url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: '' }]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addImages([{ url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: '' }]);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
