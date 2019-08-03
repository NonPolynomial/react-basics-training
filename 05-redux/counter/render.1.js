import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducer';

import Counter from './Counter.1';

const store = createStore(reducer);
console.dir(store.getState());
store.subscribe(() => console.dir(store.getState()));

export default () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
