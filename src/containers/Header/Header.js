import React, { Component } from 'react';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';


export default class Header extends Component {
  constructor(props) {
    super(props)
  }


  render(){
    return(
      <div>
        <NavLink to='/'>
          Home
        </NavLink>
        <NavLink to='/debunks'>
          Debunks: {this.props.debunks}
        </NavLink>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Nosa</h1>
        <p className="App-intro">
          Debunking NASA space images since 2018.
        </p>
        <aside>
        edits: {this.props.edits}
        </aside>
      </div>
    )
  }
}