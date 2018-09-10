import React, { Component } from 'react';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="App-header">
        <header>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/debunks'>
            <p>Debunks:</p>
          </NavLink>
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to NOSA</h1>
        <p className="App-intro">
          Debunking NASA space images since 2018.
        </p>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  debunks: state.debunks
}

export default connect(mapStateToProps, null)(Header)