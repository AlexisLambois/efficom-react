import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import './NavbarPokedex.css'
import Image from 'react-bootstrap/Image'
import logo from '../../assets/img/Logo-pokemon.png'

export default class NavbarPokedex extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Image className="logo" src={logo} fluid />
                <Navbar.Brand><h1 className="title">Pokedex</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="links">
                    <Nav className="">
                        <Link className="mr-2 ml-2 link" to="/">Accueil</Link>
                        <Link className="mr-2 ml-2 link" to="/showTeam">Voir team</Link>
                        <Link className="mr-2 ml-2 link" to="/register">S'inscrire</Link>
                        <Link className="mr-2 ml-2 link" to="/login">Se connecter</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
