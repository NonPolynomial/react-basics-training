// index.js
import React from 'react';
import { render } from 'react-dom';

import List from './List';

const App = function({ headline }) {
  return (
    <div>
      <h3>{headline}</h3>
      <List items={['Lorem.', 'Dolorem?', 'Ut?']} />
    </div>
  );
};

render(
  <App headline="Meine Liste" />,
  document.getElementById('app')
);
