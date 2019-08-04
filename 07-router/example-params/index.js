import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Debugger = ({ location, match }) => (
  <div>
    <pre>{JSON.stringify(match, null, 2)}</pre>
  </div>
);

export default () => (
  <Router>
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/param/foo">foo</Link>
        &nbsp;|&nbsp;
        <Link to="/param/bar">bar</Link>
        &nbsp;|&nbsp;
        <Link to="/param/baz">baz</Link>
      </div>

      <Route path="/param/:text" component={Debugger} />
    </div>
  </Router>
);
