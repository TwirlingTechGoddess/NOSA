import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
		let wrapper;
		let mockIdea;
		let expected;

	// beforeEach(() => {
	// 	wrapper = shallow(<App />)
	// })

	it('should have a default state of an empty array', () => {
		wrapper = shallow(<App />)
		expect(wrapper.state('ideas').length).toBe(0)
	})

	it('should match the snapshot', () => {
		wrapper = shallow(<App />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should add an idea to state when the addIdea function is invoked', () => {
		wrapper = shallow(<App />)
		mockIdea = { title: 'Testing', body: 'I used to hate it, but now I love it.', id: Date.now() }
		expected = [{ title: 'Testing', body: 'I used to hate it, but now I love it.', id: Date.now() }]
		wrapper.instance().addIdea(mockIdea)
		expect(wrapper.state('ideas')).toBe(expected)
	})

	it('should remove an idea from state when the removeIdea function is invoked', () => {
		wrapper = shallow(<App />)
		mockIdea = { title: 'Testing', body: 'I used to hate it, but now I love it.', id: Date.now() }
		expected = []
		wrapper.instance().removeIdea(mockIdea.id)
		expect(wrapper.state('ideas')).toBe(expected)
	})

})
