import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Counter from './components/Counter';
import Quotes from './components/Quote';

export default () => (
  <Router>
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/counter">Counter</Link>
        <Link to="/">Quotes</Link>
      </div>

      <Route path="/counter" component={Counter} />
      <Route
        path="/"
        render={() => (
          <Quotes
            quotes={[
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, eum?',
              'Nostrum, natus a. Repellat est dolor id error delectus molestias.',
              'Nemo doloribus totam inventore commodi at cupiditate amet modi quia.',
              'Quisquam ut a ea dignissimos dolorem magni harum hic voluptatibus!',
              'Enim eaque quis amet autem error ipsa, exercitationem dignissimos tenetur?',
            ]}
          />
        )}
      />
    </div>
  </Router>
);
