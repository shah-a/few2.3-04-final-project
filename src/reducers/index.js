import { combineReducers } from 'redux';
import arraysReducer from './arraysReducer';

const rootReducer = combineReducers({
  arrays: arraysReducer,
});

export default rootReducer;
