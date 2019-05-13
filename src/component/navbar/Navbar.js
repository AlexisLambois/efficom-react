import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './../../views/home/Home';

export default class Navbar extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
    
            <Route path="/" exact component={Home} />
          </div>
        </Router>
      );
  }
}
