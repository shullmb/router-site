import React, { Component } from 'react';

class Store extends Component {
  render() {
    let name = this.props.info[0];
    let address = this.props.info[1];
    let hours = this.props.info[2];

    return (
      <div>
        <h1>{name}</h1>
        <h3>{address}</h3>
        <h3>{hours}</h3>
      </div>
    )
  }
}

export default Store