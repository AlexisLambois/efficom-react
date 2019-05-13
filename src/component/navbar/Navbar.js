import React from 'react'
import { Link } from "react-router-dom";


export default class Navbar extends React.Component {
  render() {
    return (
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </nav>
      );
  }
}
