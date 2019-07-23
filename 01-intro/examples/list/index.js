// index.js
import React from 'react';
import { render } from 'react-dom';

import List from './List';

const headline = 'Meine Liste';

const App = (
  <div>
    <h3>{headline}</h3>
    <List items={['Lorem.', 'Dolorem?', 'Ut?']} />
  </div>
);

render(
  App,
  document.getElementById('app')
);
