import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom";

export default class NavbarPokedex extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Pokedex</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav class="mr-auto">
                        <Link class="mr-2 ml-2" to="/">Home</Link>
                        <Link class="mr-2 ml-2" to="/register">Register</Link>
                        <Link class="mr-2 ml-2" to="/showTeam">Voir team</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
