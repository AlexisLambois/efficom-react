import environement from '../environement'
import { authHeader } from '../helpers/auth.helper';

export const teamService = {
    getTeam
};

function getTeam() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${environement.apiUrl}/trainers/me/team`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log('data', data);
        if(data.statusCode === 403){
            return Promise.reject('error');
        }
        return data;
    });
}


