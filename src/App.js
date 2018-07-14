import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Store from './Store';
import Fabrics from './Fabrics';
import Fabric from './Fabric';

const storeInfo = ['Fabric+ - GA', '123 Seneca St', 'M-F 6am - 3am']
const fabricInfo = [
  {
    id: 1,
    name: 'Camel Wool',
    price: '$6.00 / sq in',
    desc: 'Itchy as hell',
    stock: true,
    type: 'Wool',
    color: 'beige'
  },
  {
    id: 2,
    name: 'Sensual Silk',
    price: '$10 / sq in',
    desc: 'Shiny, Soft, Sensual',
    stock: false,
    type: 'Silk',
    color: 'red'
  },
  {
    id: 3,
    name: 'Licorice',
    price: '$39.99 / sq mi',
    desc: 'Sweaty',
    stock: true,
    type: 'Polyester',
    color: 'Sweaty'
  },
  {
    id: 4,
    name: 'Winter Reed',
    price: '$21.99',
    desc: 'Soft yet durable',
    stock: true,
    type: 'Linen',
    color: 'Brown'
  }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>FABRIC+</h1>
          <Navbar />
          <div>
            <h2>render area</h2>
            <Route exact path='/' component={Home} />
            <Route path='/store' component={ () => <Store info={storeInfo} /> }  />
            <Route exact path='/fabrics' component={ () => <Fabrics fabrics={fabricInfo} /> }  />
            <Route path='/fabrics/:id' component={ (props) => <Fabric fabrics={fabricInfo} {...props} /> } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
