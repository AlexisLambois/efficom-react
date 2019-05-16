import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './component/navbar/NavbarPokedex';
import ShowTeam from './containers/showteam.container';
import {RegisterPage} from './ui/register/register.page';
import {LoginPage} from './ui/login/login.page';
import Pokemon from './containers/pokemon.container';
import Pokemons from './containers/pokemons.container';
import PokemonsV2 from './containers/pokemon-v2.container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {PrivateRoute} from './helpers/private-route.helper'

library.add(faTimes)

export default class App extends Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Route path="/" exact component={Pokemons} />
                <Route path="/pokemonV2" exact component={PokemonsV2} />
                <Route path="/pokemon/:id" exact component={Pokemon} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute path="/showTeam" component={ShowTeam} />
            </Router>
        )
    }
}
