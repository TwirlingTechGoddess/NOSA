import React from 'react';
import { shallow, mount } from 'enzyme';
import { Posters, mapStateToProps, changeText, toggleDebunksDisplay, addPicToPrint, printOut } from './Posters';
import { addDebunks } from '../../actions/index.js';

describe('Posters container', () => {
  let initial;
  let expected;
  let wrapper;

  describe('Posters component', () => {
    wrapper = shallow(<Posters />);

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have a default state of default', () => {
      const mockState = {
        title:'YOU\'RE CRAZY!!!',
        text: '...if you think that the Earth is ROUND!??!',
        id: -1
      };
      expect(wrapper.contains(mockState.title)).toEqual(true);
    });

    it('should have a default state of messages', () => {
      expected = [
        {
          title: 'Knock Knock... Who\'s there?',
          text: 'EARTH IS FLAT!!!',
          id: 0
        },
        {
          title: 'BABY... GOT... FLAT!',
          text: 'I like flat earth and I cannot lie',
          id: 1
        },
        {
          title: 'If I could be a frisbee...',
          text: 'I WOULD BE THE EARTH',
          id: 2
        },
        {
          title: 'When I say FLAT, you say EARTH',
          text: 'FLAT!!  EARTH!!  FLAT!!  EARTH!!',
          id: 3
        }
      ];
      initial = wrapper.state('messages')
      expect(initial).toEqual(expected);
    });

    it('should have a default state of currentPicPrint', () => {
      wrapper.debug()
      expected = '';
      initial = wrapper.state('currentPrintPic');
      expect(initial).toEqual(expected);
    });

    it('should have a default state of hidden', () => {
      expected = 'sure';
      initial = wrapper.state('hidden');
      expect(initial).toEqual(expected);
    });

    it('should invoke changeText when change-text button is clicked', () => {
      const changeTextMock = jest.fn()
      wrapper = mount(<Posters changeText={changeTextMock}/>)
      wrapper.find('.change-text').simulate('click')
      expect(changeTextMock).toHaveBeenCalled()
    })

    it('should update the state of default when changeText is invoked', () => {
      initial = {
        title:'YOU\'RE CRAZY!!!',
        text: '...if you think that the Earth is ROUND!??!',
        id: -1
      }
      expected = {
        title: 'Knock Knock... Who\'s there?',
        text: 'EARTH IS FLAT!!!',
        id: 0
      }
      wrapper.setState({ default: initial });
      wrapper.instance().changeText();
      expect(wrapper.state('default')).toEqual(expected)
    })

    it('should invoke toggleDebunksDisplay when the toggle-display button is clicked', () => {
      const mockEvent = jest.fn
      wrapper.find('.toggle-display').simulate('click')
      expect(toggleDebunksDisplay).toHaveBeenCalled()
    })

    it('should update the state of hidden when toggleDebunksDisplay is invoked', () => {
      initial = 'sure';
      expected = 'nope';
      wrapper.setState({ hidden: initial });
      wrapper.instance().toggleDebunksDisplay();
      expect(wrapper.state('hidden')).toEqual(expected);
    })

    it('should invoke addPicToPrint when the current-pic button is clicked', () => {
      const mockEvent = jest.fn
      wrapper.find('.add-pic').simulate('click');
      expect(addPicToPrint).toHaveBeenCalled()
    })

    it('should update the state of hidden when addPicToPrint is invoked', () => {
      initial = ''
      expected = "https://epic.gsfc.nasa.gov/archive/natural/2018/09/16/png/epic_1b_20180916003633.png"
      wrapper.setState({ currentPrintPic: initial })
      wrapper.instance().addPicToPrint()
      expect(wrapper.state('currentPrintPic')).toEqual(expected)
    })

    it('should call addPicToPrint with the correct params', () => {
      expected = "https://epic.gsfc.nasa.gov/archive/natural/2018/09/16/png/epic_1b_20180916003633.png"
      wrapper.instance().addPicToPrint()
      expect(addPicToPrint).toHaveBeenCalledWith(expected)
    })

    it('should invoke printOut when the print-out button is clicked', () => {
      const mockEvent = jest.fn
      wrapper.instance().printOut(mockEvent);
      expect(printOut).toHaveBeenCalled()
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
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

})