import {groupConstants, userConstants} from '../_constants';
import {groupService, userService} from '../_services';
import {alertActions} from './';
import {history} from '../_helpers';

export const groupActions = {

    register,
    getById,
    getAll,
    update,
    delete: _delete
};


function register(obj) {
    console.log(obj);
    return dispatch => {
        dispatch(request(obj));

        groupService.register(obj)
            .then(
                obj => {
                    dispatch(success());
                    history.push('/grupo');
                    dispatch(alertActions.success('Sucesso!'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(obj) {
        return {type: groupConstants.REGISTER_REQUEST, obj}
    }

    function success() {
        return {type: groupConstants.REGISTER_SUCCESS}
    }

    function failure(error) {
        return {type: groupConstants.REGISTER_FAILURE, error}
    }
}

function update(obj) {
    console.log(obj);
    return dispatch => {
        dispatch(request(obj));

        groupService.updateGroup(obj)
            .then(
                obj => {
                    dispatch(success());
                    dispatch(alertActions.success('Sucesso!'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error('Erro no cadastro, verifique os campos!'));
                }
            );
    };

    function request(obj) {
        return {type: groupConstants.UPDATE_REQUEST, obj}
    }

    function success() {
        return {type: groupConstants.UPDATE_SUCCESS}
    }

    function failure(error) {
        return {type: groupConstants.UPDATE_FAILURE, error}
    }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        groupService.getAll()
            .then(
                list => dispatch(success(list)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: groupConstants.GETALL_REQUEST}
    }

    function success(list) {
        return {type: groupConstants.GETALL_SUCCESS, list}
    }

    function failure(error) {
        return {type: groupConstants.GETALL_FAILURE, error}
    }
}

function getById(id) {
    return dispatch => {
        dispatch(request());

        groupService.getById(id)
            .then(
                group => dispatch(success(group)),
                error => dispatch(failure(error))
            );
    };

    function request() {
        return {type: groupConstants.GETBYID_REQUEST}
    }

    function success(group) {
        return {type: groupConstants.GETBYID_SUCCESS, group}
    }

    function failure(error) {
        return {type: groupConstants.GETBYID_FAILURE, error}
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {

    return dispatch => {
        dispatch(request(id));

        groupService._delete(id)
            .then(function(list){
                    dispatch(success(list));
                    dispatch(getAll());
            },
                //list => dispatch(success(list)),
                error => dispatch(failure(error))
            );
    };

    function request(id) {
        return {type: groupConstants.DELETE_REQUEST, id}
    }

    function success() {

        return {type: groupConstants.DELETE_SUCCESS}
    }

    function failure(error) {
        return {type: groupConstants.DELETE_FAILURE, error}
    }
}