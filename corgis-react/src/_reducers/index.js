import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { groups } from './group.reducer';
import { expenses } from './expense.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  groups,
  expenses
});

export default rootReducer;