// components/Quote/index.js
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
  const currentQuote = useQuoteRotation({ quotes, delay });

  return <p>{currentQuote}</p>;
};

Quotes.propTypes = propTypes;
Quotes.defaultProps = defaultProps;

export default Quotes;
