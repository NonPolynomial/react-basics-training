// Quotes.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
};

const defaultProps = {
  delay: 1500,
};

const Quotes = ({ quotes, delay }) => {
  const [current, setNext] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const next = current + 1;
      setNext(quotes[next] ? next : 0);
    }, delay);
  });

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  return <p>{quotes[current]}</p>;
};

Quotes.propTypes = propTypes;
Quotes.defaultProps = defaultProps;

export default Quotes;
