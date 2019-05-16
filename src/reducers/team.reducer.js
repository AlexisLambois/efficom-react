import {
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  GET_TEAM_FAILURE,
  PUT_TEAM_REQUEST,
  PUT_TEAM_SUCCESS,
  PUT_TEAM_FAILURE
} from '../actions/team.action';

const initialState = {
  team: [],
  isFetched: false
}

export default function (state = initialState, action) {
  switch (action.type) {

    // GET
    case GET_TEAM_REQUEST:
      return {
        ...state,
        isFetched: true
      };
    case GET_TEAM_SUCCESS:
      return {
        ...state,
        team: action.payload
      };
    case GET_TEAM_FAILURE:
      return {
        error: action.error
      };

      // PUT
    case PUT_TEAM_REQUEST:
      return {};
    case PUT_TEAM_SUCCESS:
      return {};
    case PUT_TEAM_FAILURE:
      return {
        error: action.error
      };

    default:
      return state
  }
} 