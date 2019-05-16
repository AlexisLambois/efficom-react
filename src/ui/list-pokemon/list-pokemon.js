import React, { Component } from 'react'
import hardtack from 'hardtack'
import Pokemon from '../../component/pokemon/card-pokemon'
import Search from '../../component/search/search'

class ListPokemon extends Component {
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

  handleSearch = event => {
    const value = event.currentTarget.value;
    const {collection} = this.props

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
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      )
    })

    return (
      <div className="page">
        {error && <div className="page__error">{error}</div>}
        <div className="page__search">
          <Search onChange={this.handleSearch} value={searchString} />
        </div>
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-pokemons">{pokemons}</ul>
        )}
      </div>
    )
  }
}

export default ListPokemon
