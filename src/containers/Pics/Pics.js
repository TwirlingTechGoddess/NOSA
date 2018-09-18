import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDebunks } from '../../actions/index.js';
import { NavLink } from 'react-router-dom';

class Pics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pic: this.props.images[0],
      debunked: 'nosa'
    }
  }

  handleYessa = (images) => {
    const nextImage = this.props.images.find(image => {
      return image.id > this.state.pic.id
    })
    this.setState({
      pic: nextImage,
      debunked: 'nosa'
    })
  }

  handleNosa = () => {
    this.setState({
      debunked: 'yessa'
    })
    this.props.addDebunks([...this.props.debunks, this.state.pic])
  }

  render () {
    return (
      <div className='Pics'>
        <img className={this.state.debunked} alt='' src={this.state.pic.url}/>
        <aside>
          <button className="yes-button" onClick={this.handleYessa}>{this.state.debunked==='nosa' && 'YESSA' || 'NEXT'}</button>
          <NavLink className="no-button" to="/prints">Print Image</NavLink>
          <button onClick={this.handleNosa}>NOSA</button>
        </aside>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  images: state.images,
  debunks: state.debunks
})

export const mapDispatchToProps = (dispatch) => ({
  addDebunks: ((pic) => dispatch(addDebunks(pic)))
})

export default connect(mapStateToProps, mapDispatchToProps) (Pics)