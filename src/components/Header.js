import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App'
import { Link } from 'react-router-dom'


class Header extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <Link to={process.env.PUBLIC_URL + '/'}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h2>Jeu de rôle</h2>
        </div>
      </div>
    )
  }

}

export default Header;