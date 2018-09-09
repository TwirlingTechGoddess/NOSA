import React, { Component } from 'react';
import { fetchNasaPics } from '../../helpers/fetchCalls.js';

export default class Landing extends Component {
 
 componentDidMount = () => {
  fetchNasaPics()
 }

 changeToPic = () => {
  console.log('changing from landing to judging Pic')
 }

 render() {
  return(
    <div>
      <button type='submit' onSubmit={this.changeToPic}>PICS</button>
      <button>ARTICLES</button>
      <button>MERCH</button>
    </div>
  )
 }
}