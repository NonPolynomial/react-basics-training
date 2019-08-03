// App.js
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducer';

import Counter from './Counter';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('app')
);

