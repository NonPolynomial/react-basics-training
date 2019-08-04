import React, { useState } from 'react';

const errorStyles = {
  label: {
    color: 'red',
  },
  input: {
    outline: '1px solid red',
    color: 'red',
  },
};

const Form = () => {
  const [hasErrors, setErrors] = useState(false);
  const [inputName, setName] = useState('');
  const [name, submitName] = useState(inputName);

  return (
    <form
      onSubmit={e => {
        if (!hasErrors) {
          submitName(inputName);
        }
        e.preventDefault();
      }}
    >
      <label style={hasErrors ? errorStyles.label : null}>
        Name:
        <input
          type="text"
          style={hasErrors ? errorStyles.input : null}
          value={inputName}
          onChange={e => {
            const newValue = e.target.value;
            setErrors(/\d/.test(newValue));
            setName(newValue);
          }}
        />
      </label>
      <input type="submit" value="Submit" disabled={hasErrors} />
      <p>Your name is: {name}</p>
    </form>
  );
};

export default Form;
