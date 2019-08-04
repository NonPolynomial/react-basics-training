// components/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <span>{counter}</span>
      &nbsp;
      <button onClick={() => setCounter(counter + 1)}>+</button>
      &nbsp;
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Counter;
