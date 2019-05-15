import {
    GET_TEAM_REQUEST,
    GET_TEAM_SUCCESS,
    GET_TEAM_FAILURE
  } from '../actions/team.action';

  const initialState = {
    team: [],
    isFetched: false
  }

  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TEAM_REQUEST:
        return {
          ...state,
          isFetched: true
        };
      case GET_TEAM_SUCCESS:
        console.log(state);
        return {
          ...state,
          team: action.team
        };
      case GET_TEAM_FAILURE:
        return { 
          error: action.error
        };
    
      default:
        return state
    }
  } 