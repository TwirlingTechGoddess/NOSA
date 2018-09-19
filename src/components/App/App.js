import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from '../../containers/Header/Header';
import { Prints } from '../Prints/Prints';
import PostCards from '../../containers/PostCards/PostCards';
import Posters from '../../containers/Posters/Posters';
import GiftCards from '../../containers/GiftCards/GiftCards';
import Stickers from '../../containers/Stickers/Stickers';
import Pics from '../../containers/Pics/Pics';
import Articles from '../Articles/Articles';
import Landing from '../../containers/Landing/Landing';
import Debunks from '../../containers/Debunks/Debunks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/prints" component={Prints} />
        <Route path="/postcards" component={PostCards} />
        <Route path="/posters" component={Posters} />
        <Route path="/giftcards" component={GiftCards} />
        <Route path="/stickers" component={Stickers} />
        <Route path="/pics" component={Pics} />
        <Route path="/articles" component={Articles} />
        <Route exact path="/" component={Landing} />
        <Route path="/debunks" component={Debunks} />
      </div>
    );
  }
}

export default App;
