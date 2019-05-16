import { pokemonsV2Constants 
  } from '../constants/pokemons-v2.constant'
  
  const initialState = {
    collection: {},
    isFetched: false
  }
  
  export default function pokemonsV2(state = initialState, action) {
    switch (action.type) {
      case pokemonsV2Constants.GETALL_REQUEST:
        return {
          ...state,
          isFetched: true
        }
  
        case pokemonsV2Constants.GETALL_SUCCESS:
        return {
            ...state,
            collection: {
                ...state.collection,
                ...action.payload.results.reduce((accumulator, item) => {
              const name = item.name;
              return {
                ...accumulator,
                [name]: {
                  name,
                  ...item
                }
              }
            }, {})
          },
          isFetched: false
        }
  
      case pokemonsV2Constants.GETALL_FAILURE:
        return {
          ...state,
          isFetched: false
        }
    
      default:
        return state
    }
  }
  