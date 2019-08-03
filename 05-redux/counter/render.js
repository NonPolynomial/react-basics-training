import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducer';

import Counter from './Counter';

const store = createStore(reducer);

export default () =>(
  <Provider store={store}>
    <Counter />
  </Provider>
);
