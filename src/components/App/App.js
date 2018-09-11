import React, { Component } from 'react';
import './App.css';
import Header from '../../containers/Header/Header';
import Prints from '../../containers/Prints/Prints';
import Pics from '../../containers/Pics/Pics';
import Articles from '../Articles/Articles';
import Landing from '../../containers/Landing/Landing';
import Debunks from '../../containers/Debunks/Debunks';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/prints" component={Prints} />
          <Route path="/pics" component={Pics} />
          <Route path="/articles" component={Articles} />
          <Route exact path="/" component={Landing} />
          <Route path="/debunks" component={Debunks} />
        </Switch>
      </div>
    );
  }
}

export default App;
