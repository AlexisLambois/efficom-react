import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './component/navbar/NavbarPokedex';
import Register from './ui/register/Register';
import Pokemon from './containers/pokemons';
import ShowTeam from './containers/showteam.container';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Navbar/>
          <Route path="/" exact component={Pokemon} />
          <Route path="/register" exact component={Register} />
          <Route path="/showTeam" exact component={ShowTeam} />
      </Router>
    )
  }
}
