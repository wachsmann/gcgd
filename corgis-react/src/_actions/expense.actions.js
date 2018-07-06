import { expenseConstants } from '../_constants';
import { expenseService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const expenseActions = {

    //register,
    getAll,
};
/*

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
*/
function getAll() {
    return dispatch => {
        dispatch(request());
        
        expenseService.getAll()
            .then(
                list => dispatch(success(list)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: expenseConstants.GETALL_REQUEST } }
    function success(list) { return { type: expenseConstants.GETALL_SUCCESS, list } }
    function failure(error) { return { type: expenseConstants.GETALL_FAILURE, error } }
}
