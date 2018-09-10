import React, { Component } from 'react';
import './App.css';
import Header from '../../containers/Header/Header';
import Login from '../../containers/Login/Login';
import SignUp from '../../containers/SignUp/SignUp';
import Landing from '../../containers/Landing/Landing';
import Debunks from '../../containers/Debunks/Debunks';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header"/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Landing} />
        <Route path="/debunks" component={Debunks} />
        
      </div>
    );
  }
}

export default App;
