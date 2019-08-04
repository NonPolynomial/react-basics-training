// Quotes.js
import React from 'react';
import PropTypes from 'prop-types';

import useQuoteRotation from './useQuoteRotation';

const propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
};

const defaultProps = {
  delay: 1500,
};

const Quotes = ({ quotes, delay }) => {
  const current = useQuoteRotation({ quotes, delay });

  return <p>{quotes[current]}</p>;
};

Quotes.propTypes = propTypes;
Quotes.defaultProps = defaultProps;

export default Quotes;
