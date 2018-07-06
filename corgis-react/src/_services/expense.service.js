import { authHeader,urlAppender } from '../_helpers';

export const expenseService = {
   
    getAll,

};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlAppender('/private/expense'), requestOptions).then(handleResponse);
}



function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }
    
    return response.json();
}