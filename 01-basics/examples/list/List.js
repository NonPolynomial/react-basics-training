// List.js
import React from 'react';

import ListItem from './ListItem';

class List extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <ListItem>{item}</ListItem>
        ))}
      </ul>
    );
  }
}

export default List;
