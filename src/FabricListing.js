import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FabricListing extends Component {
  render() {
    const fabric = this.props.fabric
    return (
      <div>
        <hr/>
        <h1>{fabric.name}</h1>
        <p> price: {fabric.price} inStock? {fabric.stock.toString()}</p>
        <p>{fabric.desc}</p>
        <Link to={`/fabrics/${fabric.id}`}>More Info!</Link>
        <hr/>
      </div>
    )
  }
}

export default FabricListing