import { combineReducers } from 'redux';
import clickCounter from './clickCounter/reducers';
import companies from './companies/reducer';

const rootReducer = combineReducers({
  companies
});
export default rootReducer;