import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {

  render(){
    return(
      <div className="App-header">
        <header>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          <img src='https://wiki.tfes.org/images/4/43/Map.png' className="App-logo" alt="logo" />
          <NavLink to='/debunks'>
            <p>Debunks:{this.props.debunks.length}</p>
          </NavLink>
        </header>
        <h1 className="App-title">Welcome to NOSA</h1>
        <p className="App-intro">
          Debunking NASA space images since 2018.
        </p>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  debunks: state.debunks
})

export default connect(mapStateToProps, null)(Header)