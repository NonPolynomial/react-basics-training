// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <br />
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Counter;
