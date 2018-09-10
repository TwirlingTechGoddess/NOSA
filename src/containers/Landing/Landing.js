import React, { Component } from 'react';
import { fetchNasaPics } from '../../helpers/fetchCalls.js';
import { connect } from 'react-redux';

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      pics: []
    }
  }
 
 componentDidMount = async() => {
  const newArray = await fetchNasaPics()
  this.changeToPic(newArray)
 }

 changeToPic = (array) => {
  array.map(image => {
    const newImage = `https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/${image}`
    return this.setState({
      pic: [...this.state.pics, newImage]
    })
    console.log(this.state.pics)
  })
 }

 render() {
  return(
    <div>
      <button type='submit'>PICS</button>
      <button>ARTICLES</button>
      <button>MERCH</button>
      <img className='pic' alt='' src={this.state.pics[0]}/>
    </div>
  )
 }
}

export const mapStateToProps = (state) => ({
  pics: this.state
})

export default connect(mapStateToProps, null)(Landing)