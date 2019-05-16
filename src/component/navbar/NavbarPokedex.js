import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './NavbarPokedex.css'
import Image from 'react-bootstrap/Image'
import logo from '../../assets/img/Logo-pokemon.png'

class NavbarPokedex extends React.Component {
    render() {
        const { loggedIn, logout } = this.props;

        return (
            <Navbar bg="light" expand="lg">
                <Image className="logo" src={logo} fluid />
                <Navbar.Brand><h1 className="title">Pokedex</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="links">
                    <Nav className="">
                        <Link className="mr-2 ml-2 link" to="/">Accueil</Link>
                        <Link className="mr-2 ml-2 link" to="/showTeam">Voir team</Link>
                        {loggedIn
                            ? (<button onClick={logout}>Deconnexion</button>)
                            : (<Link className="mr-2 ml-2 link" to="/login">Mon Compte</Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authentication.loggedIn
});

const mapDispatchToProps = dispatch => ({
    logout: function () { 
        dispatch({ type: 'USERS_LOGOUT' }) 
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarPokedex);

