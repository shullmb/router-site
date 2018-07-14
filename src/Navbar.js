import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  
  render() {
    return (
      <div>
        <Link to="/">HOME</Link>{` `}
        <Link to="/store">STORE</Link>{` `}
        <Link to="/about">ABOUT</Link>{` `}
        <Link to="/fabrics">FABRICS</Link>
      </div>
    )
  }
}

export default Navbar