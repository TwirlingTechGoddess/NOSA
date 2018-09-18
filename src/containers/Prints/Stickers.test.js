import React from 'react';
import { shallow } from 'enzyme';
import Stickers, { mapStateToProps, changeText, toggleDebunksDisplay, addPicToPrint, printOut } from './Stickers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index.js';
import { addDebunks } from '../../actions/index.js';

describe('Stickers container', () => {
  let initial;
  let expected;
  let wrapper;
  let mockStore = createStore(rootReducer);


  describe('Stickers component', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={mockStore}>
          <Stickers />
        </Provider>,
        { disableLifecycleMethods: true }
      );
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should have a default state of default', () => {
      const mockState = {
        title:'YOU\'RE CRAZY!!!',
        text: '...if you think that the Earth is ROUND!??!',
        id: -1
      };
      expected = 'YOU\'RE CRAZY!!!'
      wrapper.setState({ mockState })
      console.log(wrapper)
      expect(wrapper.find('.joke')).toEqual(expected);
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
      initial = wrapper.state().messages;
      expect(initial).toEqual(expected);
    });

    it('should have a default state of currentPicPrint', () => {
      expected = '';
      initial = wrapper.state('currentPicPrint');
      expect(initial).toEqual(expected);
    });

    it('should have a default state of hidden', () => {
      expected = 'sure';
      initial = wrapper.state('hidden');
      expect(initial).toEqual(expected);
    });

    it('should invoke changeText when change-text button is clicked', () => {
      const spy = jest.spyOn(wrapper.instance(), 'mockChangeText');
      wrapper.instance().forceUpdate();
      const mockEvent = { target: {value: {
        title: 'Knock Knock... Who\'s there?',
        text: 'EARTH IS FLAT!!!',
        id: 0
      }}}
      wrapper.find('change-text').simulate('click', mockEvent)
      expect(spy).toHaveBeenCalled()
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
      wrapper.instance().toggleDebunksDisplay(mockEvent);
      expect(toggleDebunksDisplay).toHaveBeenCalled()
    })

    it('should update the state of hidden when toggleDebunksDisplay is invoked', () => {
      initial = wrapper.setState({ hidden: 'sure'})
      const mockEvent = jest.fn()
      toggleDebunksDisplay(mockEvent)
      expected = { hidden: 'nope'}
      expect(wrapper.state('hidden')).toEqual(expected)
    })

    it('should invoke addPicToPrint when the current-pic button is clicked', () => {
      const mockEvent = jest.fn
      wrapper.instance().addPicToPrint(mockEvent);
      expect(addPicToPrint).toHaveBeenCalled()
    })

    it('should update the state of hidden when addPicToPrint is invoked', () => {
      initial = wrapper.setState({ currentPic: ''})
      const mockEvent = jest.fn()
      addPicToPrint(mockEvent)
      expected = { currentPic: "https://epic.gsfc.nasa.gov/archive/natural/2018/09/16/png/epic_1b_20180916003633.png"}
      expect(wrapper.state('currentPic')).toEqual(expected)
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
