import React, { Component } from 'react';
import { connect } from 'react-redux'

class Prints extends Component {
  render() {
    return(
      <div>
        <article>Posters</article>
        <article>Post Cards</article>
        <article>Gift Cards</article>
        <article>Stickers</article>
      </div>
    )
  }
}

export default connect(null, null)(Prints)