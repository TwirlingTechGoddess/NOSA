import React, { Component } from 'react';
import { fetchNasaPics } from '../../helpers/fetchCalls.js';

export default class Landing extends Component {
  constructor() {
    super()
    this.state = {
      pic: ''
    }
  }
 
 componentDidMount = async() => {
  const newArray = await fetchNasaPics()
  this.changeToPic(newArray)
 }

 changeToPic = (array) => {
  array.map(image => {
    return this.setState({
      pic: image
    })
  })
 }

 render() {
  return(
    <div>
      <button type='submit' onSubmit={this.changeToPic}>PICS</button>
      <button>ARTICLES</button>
      <button>MERCH</button>
      <img className='pic' alt='' src={`https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/${this.state.pic}`}/>
    </div>
  )
 }
}