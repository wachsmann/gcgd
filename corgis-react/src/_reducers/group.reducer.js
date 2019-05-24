import {groupConstants} from '../_constants';

export function groups(state = {}, action) {
    switch (action.type) {
        /*
        * REGISTER
        */
        case groupConstants.REGISTER_REQUEST:
            return {
                loading: true
            };
        case groupConstants.REGISTER_SUCCESS:
            return {};
        case groupConstants.REGISTER_FAILURE:
            return {
                error: action.error
            };
        /*
        * UPDATE
        */
        case groupConstants.UPDATE_REQUEST:
            return {
                loading: true
            };
        case groupConstants.UPDATE_SUCCESSTE:
            return {};
        case groupConstants.UPDATE_FAILURE:
            return {
                error: action.error
            };
        /*
        * GETALL
        */
        case groupConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case groupConstants.GETALL_SUCCESS:

            return {
                list: action.list
            };
        case groupConstants.GETALL_FAILURE:
            return {
                error: action.error
            };

        /* GETBYID */
        case groupConstants.GETBYID_REQUEST:
            return {
                loading: true
            };
        case groupConstants.GETBYID_SUCCESS:

            return {
                group: action.group
            };
        case groupConstants.GETBYID_FAILURE:
            return {
                error: action.error
            };

        default:
            return state;

    }
}