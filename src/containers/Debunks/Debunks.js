import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Debunks extends Component {
  render() {
    const newImages = this.props.debunks.map(image => <img className="yessa" alt="" src={image.url} />);
    return (
      <div className="Pics">
        <section>{newImages}</section>
        <NavLink to="/prints">Print Image</NavLink>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  debunks: state.debunks,
});

Debunks.propTypes = {
  debunks: PropTypes.array,
};

export default connect(mapStateToProps, null)(Debunks);
