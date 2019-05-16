import { pokemonsV2Constants 
  } from '../constants/pokemons-v2.constant'
  
  const initialState = {
    collection: {},
    isFetched: false
  }
  
  export default function pokemonsV2(state = initialState, action) {
    switch (action.type) {
      case pokemonsV2Constants.GETALL_POKEMONS_REQUEST:
        return {
          ...state,
          isFetched: true
        }
  
      case pokemonsV2Constants.GETALL_POKEMONS_SUCCESS:
        return {
          ...state,
          collection: {
            ...state.collection,
            ...action.payload.results.map((accumulator, item) => {
              const id = item.id;
                console.log('item',item)
                console.log('accumulator',accumulator)
              return {
                ...accumulator,
                [id]: {
                  id,
                  ...item
                }
              }
            }, {})
          },
          isFetched: false
        }
  
      case pokemonsV2Constants.GETALL_POKEMONS_FAILURE:
        return {
          ...state,
          isFetched: false
        }
    
      default:
        return state
    }
  }
  