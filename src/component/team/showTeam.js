import React from "react";
import hardtack from 'hardtack'
import Pokemon from './../pokemon/card-pokemon';
import Search from './../search/search';

export default class ShowTeam extends React.Component {
    state = {
        searchString: '',
        pokemonsIds: [],
        error: null
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

    render() {
        const { searchString, pokemonsIds, error } = this.state
        const { collection, isFetched } = this.props

        const pokemons = pokemonsIds.map(pokemonId => {
            const pokemon = collection[pokemonId]

            return (
                <li className="pokemons__item_team" key={pokemon.id}>
                    <Pokemon pokemon={pokemon} />
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
            </div>
        )
    }
}
