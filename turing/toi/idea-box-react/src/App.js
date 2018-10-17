import React, { Component } from 'react';
import IdeaContainer from './IdeaContainer';
import IdeaForm from './IdeaForm';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = ({
      ideas: []
    })
  }

  addIdea = ({idea}) => {
    const newIdea = {...idea , id: Date.now()};
    const ideas = [...this.state.ideas, newIdea];
    this.setState({
      ideas: ideas
    })
  }

  removeIdea = (id) => {
    const newState = this.state.ideas.filter(idea => !idea.id)
    this.setState({
      ideas: newState
    })
  }

  render() {
    return (
      <div className="App">
        <IdeaForm idea={idea} 
                  addIdea={this.addIdea} 
        />
        <IdeaContainer  removeIdea={this.removeIdea}
                        ideas={this.state.ideas}
        />
      </div>
    )
  }
}

export default App;
