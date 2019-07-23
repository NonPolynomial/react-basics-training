// index.js
import React from 'react';
import { render } from 'react-dom';

import ListItem from './ListItem';

const headline = 'Meine Liste';

const App = (
  <div>
    <h3>{headline}</h3>
    <ul>
      <ListItem>Lorem.</ListItem>
      <ListItem>Dolorem?</ListItem>
      <ListItem>Ut?</ListItem>
    </ul>
  </div>
);

render(
  App,
  document.getElementById('app')
);










// ListItem.js
import React from 'react';

class ListItem extends React.Component {
  render() {
    return <li>{this.props.children}</li>;
  }
}

export default ListItem;
