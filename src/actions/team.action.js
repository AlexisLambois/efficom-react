
import { RSAA } from 'redux-api-middleware'
import { authHeader } from './../helpers/auth.helper';

export const GET_TEAM_REQUEST = 'GET_TEAM_REQUEST';
export const GET_TEAM_SUCCESS = 'GET_TEAM_SUCCESS';
export const GET_TEAM_FAILURE = 'GET_TEAM_FAILURE';

export const PUT_TEAM_REQUEST = 'PUT_TEAM_REQUEST';
export const PUT_TEAM_SUCCESS = 'PUT_TEAM_SUCCESS';
export const PUT_TEAM_FAILURE = 'PUT_TEAM_FAILURE';

export const getTeam = () => dispatch => {

    return dispatch({
        [RSAA]: {
            endpoint: `http://51.75.122.159:3000/trainers/me/team`,
            method: 'GET',
            types: [
                'GET_TEAM_REQUEST',
                'GET_TEAM_SUCCESS',
                'GET_TEAM_FAILURE'
            ],
            headers: authHeader()
        }
    })
}

export const putTeam = (team) => dispatch => {
    console.log('team', team);
    return dispatch({
        [RSAA]: {
            endpoint: `http://51.75.122.159:3000/trainers/me/team`,
            method: 'PUT',
            types: [
                'PUT_TEAM_REQUEST',
                'PUT_TEAM_SUCCESS',
                'PUT_TEAM_FAILURE'
            ],
            headers: {...authHeader(), 'Content-Type': 'application/json'},
            body: JSON.stringify(team)
        }
    })
}
