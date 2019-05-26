import { expenseConstants } from '../_constants';
import { expenseService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const expenseActions = {

    register,
    getAll,
    getAllCategory
};


function register(obj) {
    return dispatch => {
        dispatch(request(obj));

        expenseService.register(obj)
            .then(
                obj => { 
                    dispatch(success());
                    history.push('/despesa');
                    dispatch(alertActions.success('Sucesso!'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(obj) { return { type: expenseConstants.REGISTER_REQUEST, obj } }
    function success() { return { type: expenseConstants.REGISTER_SUCCESS } }
    function failure(error) { return { type: expenseConstants.REGISTER_FAILURE, error } }
}

function getAll($filters) {
    return dispatch => {
        dispatch(request());
        
        expenseService.getAll($filters)
            .then(
                list => dispatch(success(list)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: expenseConstants.GETALL_REQUEST } }
    function success(list) { return { type: expenseConstants.GETALL_SUCCESS, list } }
    function failure(error) { return { type: expenseConstants.GETALL_FAILURE, error } }
}

function getAllCategory() {
    return dispatch => {
        dispatch(request());

        expenseService.getAllCategory()
            .then(
                categories => dispatch(success(categories)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: expenseConstants.GETALLCATEGORY_REQUEST } }
    function success(categories) { return { type: expenseConstants.GETALLCATEGORY_SUCCESS, categories } }
    function failure(error) { return { type: expenseConstants.GETALLCATEGORY_FAILURE, error } }
}
