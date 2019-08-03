// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
      <br />
      <button onClick={() => setValue(0)}>Reset</button>
    </div>
  );
};

export default Counter;
