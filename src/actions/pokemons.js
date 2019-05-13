import { RSAA } from 'redux-api-middleware'

export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST'
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE'

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
