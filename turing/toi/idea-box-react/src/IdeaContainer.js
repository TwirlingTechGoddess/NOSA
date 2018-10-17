import React from 'react';
import IdeaCard from './IdeaCard';

const IdeaContainer = ({ideas, removeIdea}) => {
	const details = ideas.map(idea => {
		<IdeaCard 	{...idea}
					key={idea.id}
					removeIdea={removeIdea}
		/>
	})

	return(
		<div className='Container'>
			{details}
		</div>
	)
}

export default IdeaContainer