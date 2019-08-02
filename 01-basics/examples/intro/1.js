// index.js
import React from 'react';
import { render } from 'react-dom';

const App = (
  <div>
    <h3>Headline</h3>
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
