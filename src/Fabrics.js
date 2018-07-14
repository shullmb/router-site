import React, { Component } from 'react';
import FabricListing from './FabricListing';

class Fabrics extends Component {
  render() {
    const fabricsMap = this.props.fabrics.map( (fabric, i) => <FabricListing key={i} fabric={fabric} />)
    return (
      <div>
        <h1>This is for all fabrics</h1>
        {fabricsMap}
      </div>
    )
  }
}

export default Fabrics