import React from "react";
import hardtack from 'hardtack'
import Pokemon from './../pokemon/card-pokemon';
import Table from 'react-bootstrap/Table'
import Search from './../search/search';
import '../../component/team/showTeam.css';
import { getPokemonById } from "../../actions/pokemons.action";

export default class ShowTeam extends React.Component {
    state = {
        searchString: '',
        pokemonsIds: [],
        error: null
    }

    appendPokemon(test) {
        console.log(test);
    }

    componentDidMount() {
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
        })
    }

    handleSearch = event => {
        const value = event.currentTarget.value.toLowerCase().trim()
        const { collection } = this.props

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
            searchString: value
        })
    }

    render() {
        const { searchString, pokemonsIds, error } = this.state
        const { collection, isFetched } = this.props

        const pokemons = pokemonsIds.map(pokemonId => {
            const pokemon = collection[pokemonId]

            return (
                <li className="pokemons__item_team" key={pokemon.id} onClick={() => console.log(pokemon.id)}>
                    <div className="d-flex flex-row name_poke">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                            pokemon.id
                            }.png`} />
                        <p> {pokemon.name}</p>
                    </div>
                </li>
            )
        })

        return (
            <div className="page page_team">
                {error && <div className="page__error">{error}</div>}
                <div className="page__search">
                    <Search onChange={this.handleSearch} value={searchString} />
                </div>
                {isFetched ? (
                    <p>Loading...</p>
                ) : (
                        <ul className="pokemons_team">{pokemons}</ul>
                    )}
                <Table striped bordered hover className="teamTable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                        </tr>
                    </tbody>
                </Table>

            </div>



        )
    }
}
