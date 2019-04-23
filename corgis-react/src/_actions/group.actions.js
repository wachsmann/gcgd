import { groupConstants } from '../_constants';
import { groupService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const groupActions = {

    register,
    getAll,
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

    function request(obj) { return { type: groupConstants.REGISTER_REQUEST, obj } }
    function success() { return { type: groupConstants.REGISTER_SUCCESS } }
    function failure(error) { return { type: groupConstants.REGISTER_FAILURE, error } }
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

    function request() { return { type: groupConstants.GETALL_REQUEST } }
    function success(list) { return { type: groupConstants.GETALL_SUCCESS, list } }
    function failure(error) { return { type: groupConstants.GETALL_FAILURE, error } }
}
