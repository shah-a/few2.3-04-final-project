import { ACTION } from '../actions';

const initialState = 0;

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      return state + action.payload.val;
    default:
      return state;
  }
};

export default stateReducer;
