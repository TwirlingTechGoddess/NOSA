import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNosa } from '../../actions/index.js'

class Pics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pic: this.props.images[0],
      debunked: 'yessa'
    }
  }

  handleYessa = (images) => {
    console.log('hittin')
    const nextImage = this.props.images.find(image => {
      return image.id > this.state.pic.id
    })
    console.log(nextImage)
    this.setState({
      pic: nextImage,
      debunked: 'nosa'
    })
  }

  handleNosa = () => {
    console.log(this.state.pic)
    this.setState({
      debunked: 'yessa'
    })
    this.props.addNosa([...this.props.debunks, this.state.pic])
  }

  render () {
    return (
      <div className='Pics'>
        <img className={this.state.debunked} alt='' src={this.state.pic.url}/>
        <aside>
          <button onClick={this.handleYessa}>YESSA</button>
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
  addNosa: ((pic) => dispatch(addNosa(pic)))
})

export default connect(mapStateToProps, mapDispatchToProps) (Pics)