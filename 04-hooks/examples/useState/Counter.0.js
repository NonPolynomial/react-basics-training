// Counter.js
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  increment() {
    this.setState(({ value }) => ({
      value: value + 1,
    }));
  }

  reset() {
    this.setState({ value: 0 });
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={() => this.increment()}>+</button>
        <br />
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default Counter;
