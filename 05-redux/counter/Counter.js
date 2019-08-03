// Counter.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment, decrement, reset } from './store/actions';

const propTypes = {
  value: PropTypes.number.isRequired,
  dispatch: PropTypes.func,
};
const defaultProps = {
  dispatch: Function.prototype,
};

const Counter = ({ value, dispatch }) => (
  <div>
    <button onClick={() => dispatch(decrement(100))}>- 100</button>
    <button onClick={() => dispatch(decrement(10))}>- 10</button>
    <button onClick={() => dispatch(decrement())}>- 1</button>
    <span>{value}</span>
    <button onClick={() => dispatch(increment())}>+ 1</button>
    <button onClick={() => dispatch(increment(10))}>+ 10</button>
    <button onClick={() => dispatch(increment(100))}>+ 100</button>
    <br />
    <button onClick={() => dispatch(reset())}>Reset</button>
  </div>
);

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Counter);
