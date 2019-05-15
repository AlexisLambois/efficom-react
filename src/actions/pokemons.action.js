import { RSAA } from 'redux-api-middleware'

export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST'
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE'

export const GET_POKEMON_REQUEST = 'GET_POKEMON_REQUEST'
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS'
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE'

export const getPokemons = (options = {}) => dispatch => {
  const { limit = 151 } = options

  return dispatch({
    [RSAA]: {
      endpoint: `http://51.75.122.159:3000/pokemons?offset=0&limit=${limit}`,
      method: 'GET',
      types: [
        'GET_POKEMONS_REQUEST',
        'GET_POKEMONS_SUCCESS',
        'GET_POKEMONS_FAILURE'
      ]
    }
  })
}

export const getPokemonById = (id) => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: `http://51.75.122.159:3000/pokemons/${id}`,
      method: 'GET',
      types: [
        'GET_POKEMON_REQUEST',
        'GET_POKEMON_SUCCESS',
        'GET_POKEMON_FAILURE'
      ]
    }
  })
}
