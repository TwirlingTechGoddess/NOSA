import React, { Component } from 'react';
import './App.css';
import Header from '../../containers/Header/Header';
import Login from '../../containers/Login/Login';
import SignUp from '../../containers/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header"/>
        
      </div>
    );
  }
}

export default App;
