import React, { Component } from 'react'

export default class Item extends Component {
  render() {

    let {prod} = this.props;

    return (
      <div className='card'>
        <img src={prod.image} alt="..." />
        <div className='card-body'>
            <h3>{prod.Name}</h3>
            <p>{prod.price}</p>
            <button className='btn bg-dark text-white'>Add to cart</button>
        </div>
      </div>
    )
  }
}
