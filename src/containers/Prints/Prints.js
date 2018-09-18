import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Prints = () => {
  return(
    <div className="Prints">
      <article>
        <NavLink to='/posters'>Posters</NavLink>
      </article>
      <article>
        <NavLink to='/postcards'>Post Cards</NavLink>
      </article>
      <article>
        <NavLink to='/giftcards'>Gift Cards</NavLink>
      </article>
      <article>
        <NavLink to='/stickers'>Stickers</NavLink>
      </article>
    </div>
  )
}