import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE
} from '../actions/pokemons.action'

const initialState = {
  collection: {},
  isFetched: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return {
        ...state,
        isFetched: true
      }

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        collection: {
          ...state.collection,
          ...action.payload
        },
        isFetched: false
      }

    case GET_POKEMON_FAILURE:
      return {
        ...state,
        isFetched: false
      }

    default:
      return state
  }
}
