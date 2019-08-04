import React, { useState } from 'react';

const Form = () => {
  const [inputName, setName] = useState('');
  const [name, submitName] = useState(inputName);

  return (
    <form onSubmit={(e) => {
      submitName(inputName);
      e.preventDefault();
    }}>
      <label>
        Name:
        <input
          type="text"
          value={inputName}
          onChange={(e) => {
            setName(e.target.value.toUpperCase());
          }}
        />
      </label>
      <input type="submit" value="Submit" />
      <p>Your name is: {name}</p>
    </form>
  );
};

export default Form;
