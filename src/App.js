import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import React, { Component } from 'react'
import Character from './Character';
import Header from './components/Header'

const Home = () => (
  <div className="App">
    <p className="App-intro">Hello world</p>
    <Link className="btn" to={'/character'}>Cliquez ici pour créer un personnage</Link>
  </div>
)

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header ></Header>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/character" component={Character}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
