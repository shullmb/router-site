import React, { Component } from 'react';

class Fabric extends Component {
  render() {
    let fabric = this.props.fabrics.find( fabric => {
      return fabric.id === parseInt(this.props.match.params.id, 10)
    })
    return (
      <div>
        <h1>{fabric.name}</h1>
      </div>
    )
  }
}

export default Fabric