// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [current, setNext] = useState(0);

  return (
    <div>
      <p>{current}</p>
      <button onClick={() => setNext(current + 1)}>+</button>
      <br />
      <button onClick={() => setNext(0)}>Reset</button>
    </div>
  );
};

export default Counter;
