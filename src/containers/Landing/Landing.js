import React, { Component } from 'react';
import { fetchNasaPics } from '../../helpers/fetchCalls.js';
import { connect } from 'react-redux';
import { addImages } from '../../actions/index.js';
import { NavLink } from 'react-router-dom'

class Landing extends Component {
 
 componentDidMount = async() => {
  const images = await fetchNasaPics()
  await this.props.addImages(images)
 }

 render() {
  return(
    <div className='Landing'>
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