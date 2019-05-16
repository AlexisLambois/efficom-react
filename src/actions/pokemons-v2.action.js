import { pokemonsV2Constants } from '../constants/pokemons-v2.constant';
import { RSAA } from 'redux-api-middleware'
import { authHeader } from './../helpers/auth.helper';

export const getPokemonsV2 = () => dispatch => {
    return dispatch({
        [RSAA]: {
            endpoint: `https://pokeapi.co/api/v2`,
            method: 'GET',
            types: [
                pokemonsV2Constants.GETALL_REQUEST,
                pokemonsV2Constants.GETALL_SUCCESS,
                pokemonsV2Constants.GETALL_FAILURE
            ],
            headers: authHeader()
        }
    })
}