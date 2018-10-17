import React from 'react';
import { shallow } from 'enzyme';
import IdeaCard from './IdeaCard.js';

describe('IdeaCard', () => {
		const mockIdea = { title: 'Testing2', body: 'Now that I love it, I am unstoppable.', id: Date.now() }
	// beforeEach(() => {
	// })

	it('should have a title, body, and delete button', () => {
		let wrapper = shallow(<IdeaCard {...mockIdea}
								key={mockIdea.id}
								removeIdea={jest.fn()}
								/>)
		expect(wrapper.find('Card')).children.toBe(3)
	})

	it('should match the snapshot', () => {
		let wrapper = shallow(<IdeaCard {...mockIdea}
								key={mockIdea.id}
								removeIdea={jest.fn()}
								/>)
		expect(wrapper).toMatchSnapshot()
	})

	it('should invoke the removeIdea function when the delete button is clicked', () => {
		const mockEvent = jest.fn()
		let wrapper = shallow(<IdeaCard {...mockIdea}
								key={mockIdea.id}
								removeIdea={mockEvent}
								/>)
		wrapper.find('Card').simulate('click')
		expect(mockEvent).toHaveBeenCalled();
		expect(mockEvent).toHaveBeenCalledWith(mockIdea.id);

	})

})