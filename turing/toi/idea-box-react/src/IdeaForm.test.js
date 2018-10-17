import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import IdeaForm from './IdeaForm';

describe('IdeaForm', () => {

	it('should update the state when the input value changes', () => {
		const wrapper = shallow(<IdeaForm updateInput={mockEvent} />)
		const mockEvent = {target: {value: 'Hy U! Durin?'}}
		const expected = 'Hy U! Durin?'
		wrapper.instance().updateInput(mockEvent)
		expect(wrapper.state(body)).toEqual(expected)
	})

	it('should update the state when the input value changes', () => {
		const wrapper = shallow(<IdeaForm updateInput={mockEvent} />)
		const mockEvent = {target: {value: 'I\'m good!'}}
		const expected = 'I\'m good!'
		wrapper.find('Input').simulate('click')
		expect(wrapper.state(body)).toEqual(expected)
	})

})