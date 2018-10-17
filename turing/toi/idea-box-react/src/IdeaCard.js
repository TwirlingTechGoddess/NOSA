import React from 'react';
import IdeaForm from './IdeaForm';

const IdeaCard = ({title, body, id, removeIdea}) => {
	return(
		<div className="Card">
			<h3>{title}</h3>
			<p>{body}</p>
			<button onClick={() => removeIdea(id)}>Delete</button>
		</div>
		)
}

export default IdeaCard