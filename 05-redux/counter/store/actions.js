// store/actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const increment = (value = 1) => ({
  value,
  type: INCREMENT,
});

export const decrement = (value = 1) => ({
  value,
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});
