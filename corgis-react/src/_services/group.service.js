import { authHeader,urlAppender } from '../_helpers';

export const groupService = {
    register,
    getAll,
    getById,
    update,
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlAppender('/private/collective'), requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlAppender('/groups') + id, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(urlAppender('/group'), requestOptions)
        .then(response => {
            console.log(response);
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
            console.log(response);
            return response;
        });
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(urlAppender('/group/' + user.id), requestOptions).then(response => {
            console.log(response);
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }
            console.log(response);
            return response;
        });
}


function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }
    
    return response.json();
}