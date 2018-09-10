import React, { Component } from 'react';
import { fetchNasaPics } from '../../helpers/fetchCalls.js';
import { connect } from 'react-redux';
import { createPicArray } from '../../actions/index.js';

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      pics: []
    }
  }
 
 componentDidMount = async() => {
  const newArray = await fetchNasaPics()
  this.props.createPicArray(newArray)
 }

 createPicArray = (array) => {
  array.map(image => {
    const newImage = {url: `https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/${image}`, id: (Math.random() * Date.now()).toFixed(0)}
    return this.setState({
      pics: [...this.state.pics, newImage]
    })
    this.props.nasaImages = this.state.pics
  })
  console.log(this.state.pics)
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
  nasaImages: state.landingReducer,

})

export const mapDispatchToProps = (dispatch) => ({
  createPicArray: ((array) => dispatch(createPicArray(array))),
})



export default connect(mapStateToProps, mapDispatchToProps)(Landing)