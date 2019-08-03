// store/reducer.js
import { DECREMENT, INCREMENT, RESET } from './actions';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return initialState;
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.value,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.value,
      };
    default:
      return state;
  }
};
