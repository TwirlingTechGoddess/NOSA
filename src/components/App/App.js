import React, { Component } from 'react';
import './App.css';
import Header from '../../containers/Header/Header';
import Prints from '../../containers/Prints/Prints';
import Articles from '../Articles/Articles';
import Landing from '../../containers/Landing/Landing';
import Debunks from '../../containers/Debunks/Debunks';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route path="/prints" component={Prints} />
        <Route path="/articles" component={Articles} />
        <Route exact path="/" component={Landing} />
        <Route path="/debunks" component={Debunks} />
      </div>
    );
  }
}

export default App;
