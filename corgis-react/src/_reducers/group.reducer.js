import { groupConstants } from '../_constants';

export function groups(state = {}, action) {
  switch (action.type) {
    case groupConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case groupConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case groupConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };

    default:
      return state;      

  }
}