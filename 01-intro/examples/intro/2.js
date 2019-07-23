// index.js
import React from 'react';
import { render } from 'react-dom';

const headline = 'Meine Liste';

const App = (
  <div>
    <h3>{headline}</h3>
    <ul>
      <li>Lorem.</li>
      <li>Dolorem?</li>
      <li>Ut?</li>
    </ul>
  </div>
);

render(
  App,
  document.getElementById('app')
);
