import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stickers extends Component {
  constructor() {
    super()
    this.state = {
      default: {
        title:'YOU\'RE CRAZY!!!',
        text: '...if you think that the Earth is ROUND!??!',
        id: -1
      },

      messages: [
        {
          title: 'Knock Knock... Who\'s there?',
          text: 'EARTH IS FLAT!!!',
          id: 0
        },
        {
          title: 'BABY... GOT... FLAT!',
          text: 'I like flat earth and I cannot lie',
          id: 1
        },
        {
          title: 'If I could be a frisbee...',
          text: 'I WOULD BE THE EARTH',
          id: 2
        },
        {
          title: 'When I say FLAT, you say EARTH',
          text: 'FLAT!!  EARTH!!  FLAT!!  EARTH!!',
          id: 3
        }
      ],

      currentPrintPic: '',
      hidden: 'sure'
    }
  }

  changeText = () => {
    const updatedDefault = this.state.messages.find((message, index) => message.id > this.state.default.id)
    this.setState({
      default: updatedDefault
    })
    if(this.state.default.id >= 3) {
      this.setState({
        default: {
          title:'YOU\'RE CRAZY!!!',
          text: '...if you think that the Earth is ROUND!??!',
          id: -1
        }
      })
    }
  }

  toggleDebunksDisplay = () => {
    this.setState({
      hidden: 'nope'
    })
  }

  addPicToPrint = (url) => {
    this.setState({
      currentPic: url
    })
  }

  printOut = () => {
    window.print()
  }

  render() {
    const newImages = this.props.debunks.map(image => <img onClick={() => this.addPicToPrint(image.url)} alt='' src={image.url}/>)
    return(
      <div>
        <div className="DebunksContainer">
          <div className = "TemplateContainer">
            <div className="Stickers">
              <h1>{this.state.default.title}</h1>
              <img className='currentPrintPic' alt='' src={this.state.currentPic} />
              <h3>{this.state.default.text}</h3>
            </div>
            <button onClick={this.toggleDebunksDisplay}>Show Debunked Images</button>
            <button onClick={this.changeText}>Change Text</button>
            <button onClick={this.printOut}>PRINT</button>
          </div>
          <div className={this.state.hidden}>
            {newImages}
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = ({debunks}) => ({debunks})

export default connect(mapStateToProps, undefined)(Stickers)
