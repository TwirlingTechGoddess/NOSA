import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Articles extends Component {
  render() {
    return(
      <div className='Articles'>
        <article>
          <h3>Why We Don't Fall Off the Edge of Our Planet</h3>
          <img alt='' src='https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5OS81OTgvb3JpZ2luYWwvZmxhdC1lYXJ0aC1OTy1SRVVTRS5qcGc='/>
          <Link to='https://www.livescience.com/62454-flat-earthers-explain-pac-man-effect.html'>
          Read Full Story</Link>
        </article>
        <article>
          <h3>Flat-Earther Blasts-Off in Homemade Rocket</h3>
          <img alt='' src='https://img.purch.com/h/1400/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5OS8wNTUvb3JpZ2luYWwvTWlrZS1IdWdoZXMtTk8tUkVVU0UuanBn'/>
          <Link to='https://www.livescience.com/62115-flat-earther-mike-hughes-launches-homemade-rocket.html'>
          Read Full Story</Link>
        </article>
        <article>
          <h3>Millennials Are Confused About This Fact</h3>
          <img alt='' src='https://img.purch.com/rc/360x240/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5OS8yMzQvb3JpZ2luYWwvZmxhdC1lYXJ0aC5qcGc='/>
          <Link to='https://www.livescience.com/62220-millennials-flat-earth-belief.html'>
          Read Full Story</Link>
        </article>
        <article>
          <h3>Measuring the Universe with A Flat Earth</h3>
          <img alt='' src='https://ka-perseus-images.s3.amazonaws.com/af5238aabdddaeb02aeae246a605286dde1ad743.jpg'/>
          <Link to='https://www.khanacademy.org/partner-content/nasa/measuringuniverse/measure-the-solarsystem/a/a-flat-earth'>
          Read & Practice</Link>
        </article>
        <article>
          <h3>Flat-Earthers Don't Reject Climate Science</h3>
          <img alt='' src='https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ni84NDMvb3JpZ2luYWwvZmxhdC1lYXJ0aC5qcGc='/>
          <Link to='https://www.livescience.com/63470-flat-earth-climate-science.html'>
          Read Full Story</Link>
        </article>
        <article>
          <h3>Flat Earth Games</h3>
          <img alt='' src='https://cdn.shopify.com/s/files/1/0017/8887/0729/articles/FEresearcher_1512x.jpg?v=1532986964'/>
          <Link to='https://www.flatearth.games/blogs/news'>
          Play Today</Link>
        </article>
      </div>
    )
  }
}