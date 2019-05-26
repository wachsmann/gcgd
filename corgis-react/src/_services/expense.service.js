import { authHeader,urlAppender } from '../_helpers';

export const expenseService = {
   
    getAll,
    getAllCategory,
    register,
};
function register(expense) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(expense)
    };

    return fetch(urlAppender('/private/expense/create'), requestOptions).then(handleResponse);
}
function getAll($filters) {
    console.log("Filter",$filters);
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body:JSON.stringify($filters)
    };

    return fetch(urlAppender('/private/expense'), requestOptions).then(handleResponse);
}

function getAllCategory() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(urlAppender('/expense/getAllCategory'), requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }
    
    return response.json();
}