import { userConstants } from '../_constants';
import { groupService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const groupActions = {

    register,
    getAll,
};


function register(obj) {
    return dispatch => {
        dispatch(request(obj));

        groupService.register(obj)
            .then(
                obj => { 
                    dispatch(success());
                    history.push('/grupo');
                    //dispatch(alertActions.success('Sucesso!'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(obj) { return { type: userConstants.REGISTER_REQUEST, obj } }
    function success(obj) { return { type: userConstants.REGISTER_SUCCESS, obj } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        groupService.getAll()
            .then(
                objs => dispatch(success(objs)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(objs) { return { type: userConstants.GETALL_SUCCESS, objs } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
