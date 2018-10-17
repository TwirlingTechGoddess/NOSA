import React, {Component} from 'react';

class IdeaForm extends Component {
	constructor() {
		super()

		this.state = ({
			title: '',
			body: ''
		})
	}

	handleInput = (e) => {
		const { name, value} = event
		this.setState({
			[name]: value
		})
	}

	render(props) {
		return(
			<form onSubmit={this.props.addIdea}>
				<input className='Input' type='text' name='title' onClick={this.handleInput}>{idea.title}</input>
				<input className='Input' type='text' name='body' onClick={this.handleInput}>{idea.body}</input>
				<button>Submit</button>
			</form>

		)
	}
}



export default IdeaForm
