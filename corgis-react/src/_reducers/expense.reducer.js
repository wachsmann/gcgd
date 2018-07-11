import { expenseConstants } from '../_constants';

export function expenses(state = {}, action) {
  switch (action.type) {
    case expenseConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case expenseConstants.GETALL_SUCCESS:
 
      return {
        list: action.list
      };
    case expenseConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };

    default:
      return state;      

  }
}