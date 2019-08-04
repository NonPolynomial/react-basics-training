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
        if (/\d/.test(inputName)) {
          setErrors(true);
        }else {
          setErrors(false);
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
            setName(e.target.value);
          }}
        />
      </label>
      <input type="submit" value="Submit" />
      <p>Your name is: {name}</p>
    </form>
  );
};

export default Form;
