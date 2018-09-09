import React, { Component } from 'react';

export default class Debunks extends Component {
  constructor() {
    super()
    this.state = []
  }

  render() {
    return this.state.map(image => <img src={image}/>)
  }
}