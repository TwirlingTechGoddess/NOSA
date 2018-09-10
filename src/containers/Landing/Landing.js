import React, { Component } from 'react';
import { fetchNasaPics } from '../../helpers/fetchCalls.js';
import { connect } from 'react-redux';
import { addImages } from '../../actions/index.js';
import { NavLink } from 'react-router-dom'

class Landing extends Component {
  constructor() {
    super()
  }
 
 componentDidMount = async() => {
  const images = await fetchNasaPics()
  // debugger
  await this.props.addImages(images)
 }

 // createPicArray = (images) => {
 //  const newImageList = images.map(image => {
 //    const newImage = {url: `https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/${image}`, id: (Math.random() * Date.now()).toFixed(0)}
 //    return newImage
 //  })
 //    console.log(newImageList)
 //    return newImageList
 // }

 render() {
  return(
    <div>
      <NavLink to='/prints'>
        <button>PRINTS</button>
      </NavLink>
      <NavLink to='/pics'>
        <button type='submit'>PICS</button>
      </NavLink>
      <NavLink to='/articles'>
        <button>ARTICLES</button>
      </NavLink>
    </div>
  )
 }
}

export const mapStateToProps = (state) => ({
  images: state.images,

})

export const mapDispatchToProps = (dispatch) => ({
  addImages: ((images) => dispatch(addImages(images))),
})



export default connect(mapStateToProps, mapDispatchToProps)(Landing)