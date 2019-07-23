// index.js
import React from 'react';
import { render } from 'react-dom';

import List from './List';

const App = function(props) {
  return (
    <div>
      <h3>{props.headline}</h3>
      <List items={['Lorem.', 'Dolorem?', 'Ut?']} />
    </div>
  );
};

render(
  <App headline="Meine Liste" />,
  document.getElementById('app')
);
