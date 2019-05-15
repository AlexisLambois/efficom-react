
import { teamService } from './../services/team.service';

export const GET_TEAM_REQUEST = 'GET_TEAM_REQUEST';
export const GET_TEAM_SUCCESS = 'GET_TEAM_SUCCESS';
export const GET_TEAM_FAILURE = 'GET_TEAM_FAILURE';

export const teamActions = {
    getTeam
};

function getTeam() {
    return dispatch => {
        dispatch(request());

        teamService.getTeam()
            .then(
                team => dispatch(success(team)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: GET_TEAM_REQUEST } }
    function success(team) { return { type: GET_TEAM_SUCCESS, team } }
    function failure(error) { return { type: GET_TEAM_FAILURE, error } }
}