// Quotes.js
import React, { useState } from 'react';
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

  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     const { quotes } = this.state;
  //     const next = this.state.current + 1;
  //     this.setState({
  //       current: quotes[next] ? next : 0,
  //     });
  //   }, this.props.delay);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  return <p>{quotes[current]}</p>;
};

Quotes.propTypes = propTypes;
Quotes.defaultProps = defaultProps;

export default Quotes;
