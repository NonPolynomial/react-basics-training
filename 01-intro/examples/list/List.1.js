// List.js
import React from 'react';

import ListItem from './ListItem';

class List extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </ul>
    );
  }
}

export default List;
