import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from './ui/page/cnt-page';
import Navbar from './component/navbar/Navbar';
import Register from './ui/register/Register';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Navbar/>
          <Route path="/" exact component={Page} />
          <Route path="/register" exact component={Register} />
      </Router>
    )
  }
}
