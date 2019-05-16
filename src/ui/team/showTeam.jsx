import React from "react";
import hardtack from 'hardtack';
import Table from 'react-bootstrap/Table';
import Search from '../../component/search/search';
import './showTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "react-bootstrap";

export default class ShowTeam extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
            pokemonsIds: [],
            team: [],
            error: null
        }
    }

    componentDidMount() {

        // List pokemon
        this.props.getPokemons().then(action => {
            if (action.error) {
                return this.setState({
                    error: action.payload.message
                })
            }

            const searchString = hardtack.get('searchString')
            const { collection } = this.props

            if (!searchString) {
                return this.setState({
                    pokemonsIds: Object.keys(collection)
                })
            }

            const pokemonsIds = Object.keys(collection).filter(pokemonId => {
                const pokemon = collection[pokemonId]

                return pokemon.name.includes(searchString)
            })

            this.setState({
                pokemonsIds,
                searchString
            })
        });


        // Team
        this.props.getTeam().then(response => {
            if(response.error) {
                return this.setState({
                    error: response.payload.message
                })
            }

            const {team} = this.props;
            this.setState({
                team
            })
        });
    }

    handleSearch = event => {
        const value = event.currentTarget.value;
        const { collection, team } = this.props

        hardtack.set('searchString', value, {
            maxAge: '31536000'
        })

        if (value === '') {
            return this.setState({
                pokemonsIds: Object.keys(collection),
                searchString: value
            })
        }

        const pokemonsIds = Object.keys(collection).filter(pokemonId => {
            const pokemon = collection[pokemonId]

            return pokemon.name.includes(value)
        })

        this.setState({
            pokemonsIds,
            searchString: value,
            team
        })
    }


    deletePokemon(id) {
        const team = [...this.state.team];
        const filteredItems = team.filter(item => item !== id);
        this.putTeam(filteredItems);
    }

    addPokemon(id) {
        const team = [...this.state.team];
        team.push(id);
        this.putTeam(team);
    }

    putTeam(team) {
        this.props.putTeam(team).then(action => {
            if (action.error) {
                return this.setState({
                    error: action.payload.response.message
                })
            }
            this.setState({
                team
            })
        })
    }

    render() {
        const { searchString, pokemonsIds, error, team } = this.state;
        const { collection, isFetched } = this.props;

        const pokemons = pokemonsIds.map(pokemonId => {
            const pokemon = collection[pokemonId]

            return (
                <li className="pokemons" key={pokemon.id} onClick={() => this.addPokemon(pokemon.id)}>
                    <div className="d-flex flex-row content">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
                        <p> {pokemon.name}</p>
                    </div>
                </li>
            )
        })

        const myTeam = team.map(pokemonId => {
            const pokemon = collection[pokemonId];

            return (
                <tr>
                    <td>{pokemon.id}</td>
                    <td>{pokemon.name}</td>
                    <td><Button variant="danger" size="sm" onClick={() => this.deletePokemon(pokemon.id)}><FontAwesomeIcon icon="times" /></Button></td>
                </tr>
            )
        })

        return (
            <div className="page page_team d-flex flex-row">
                <div className="sidebar">
                    {error && <div className="page__error">{error}</div>}
                    <div className="page__search">
                        <Search onChange={this.handleSearch} value={searchString} />
                    </div>
                    {isFetched ? (
                        <p>Loading...</p>
                    ) : (
                            <ul className="pokemons_team">{pokemons}</ul>
                        )}
                </div>
                <div className="container pt-5">
                    <Table striped bordered variant="light">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myTeam}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}