// Counter.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment, decrement, reset } from './store/actions';

const propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onReset: PropTypes.func,
};
const defaultProps = {
  onIncrement: Function.prototype,
  onDecrement: Function.prototype,
  onReset: Function.prototype,
};

const Counter = ({ value, onIncrement, onDecrement, onReset }) => (
  <div>
    <button onClick={() => onDecrement(100)}>- 100</button>
    <button onClick={() => onDecrement(10)}>- 10</button>
    <button onClick={() => onDecrement()}>- 1</button>
    <span>{value}</span>
    <button onClick={() => onIncrement()}>+ 1</button>
    <button onClick={() => onIncrement(10)}>+ 10</button>
    <button onClick={() => onIncrement(100)}>+ 100</button>
    <br />
    <button onClick={() => onReset()}>Reset</button>
  </div>
);

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = ({ value }) => ({ value });
const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(increment(value)),
  onDecrement: value => dispatch(decrement(value)),
  onReset: () => dispatch(reset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
