import {userConstants} from '../_constants';
import {userService} from '../_services';
import {alertActions} from './';
import {history} from '../_helpers';

export const userActions = {
    login,
    logout,
    register,
    update,
    getAll,
    getGroups,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({username}));


        userService.login(username, password)
            .then(
                obj => {
                    dispatch(success(obj.user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("E-mail ou senha incorretos!"));
                }
            );
    };

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}

function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Sucesso!'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Erro no cadastro, verifique os campos!"));
                }
            );
    };

    function request(user) {
        return {type: userConstants.REGISTER_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.REGISTER_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.REGISTER_FAILURE, error}
    }
}

function getGroups(userId) {
    return dispatch => {
        dispatch(request(userId));

        userService.getGroups(userId)
            .then(
                groups => {
                    dispatch(success(groups));
                    dispatch(alertActions.success('Sucesso!'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Erro na requisição, verifique os campos!"));
                }
            );
    };

    function request(userId) {
        return {type: userConstants.GROUPS_REQUEST, userId}
    }

    function success(groups) {
        return {type: userConstants.GROUPS_SUCCESS, groups}
    }

    function failure(error) {
        return {type: userConstants.GROUPS_FAILURE, error}
    }
}

function update(user) {
    return dispatch => {
        dispatch(request(user));

        userService.update(user)
            .then(
                user => {
                    dispatch(success());
                    dispatch(alertActions.success('Sucesso!'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Erro no cadastro, verifique os campos!"));
                }
            );
    };

    function request(user) {
        return {type: userConstants.UPDATE_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.UPDATE_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.UPDATE_FAILURE, error}
    }
}

function getAll(filter = "") {
    return dispatch => {
        dispatch(request());

        userService.getAll(filter)
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: userConstants.GETALL_REQUEST}
    }

    function success(users) {
        return {type: userConstants.GETALL_SUCCESS, users}
    }

    function failure(error) {
        return {type: userConstants.GETALL_FAILURE, error}
    }
}


// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => {
                    history.push('/login');
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) {
        return {type: userConstants.DELETE_REQUEST, id}
    }

    function success() {
        return {type: userConstants.DELETE_SUCCESS}
    }

    function failure(error) {
        return {type: userConstants.DELETE_FAILURE, error}
    }
}