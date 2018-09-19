import React from 'react';
import { NavLink } from 'react-router-dom';

export const Prints = () => (
  <div className="Prints">
    <article>
      <NavLink to="/posters">Posters</NavLink>
    </article>
    <article>
      <NavLink to="/postcards">Post Cards</NavLink>
    </article>
    <article>
      <NavLink to="/giftcards">Gift Cards</NavLink>
    </article>
    <article>
      <NavLink to="/stickers">Stickers</NavLink>
    </article>
  </div>
);
