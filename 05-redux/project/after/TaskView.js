// src/components/TaskView.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import useForceUpdate from '../hooks/useForceUpdate';
import { selectTask } from '../store/actions';
import { Task } from '../types';

const propTypes = {
  task: Task.isRequired,
  onStatusChange: PropTypes.func,
  onDeselect: PropTypes.func,
};
const defaultProps = {
  onStatusChange: Function.prototype,
  onDeselect: Function.prototype,
};

const TaskView = ({ task, onStatusChange, onDeselect }) => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      <button onClick={() => onDeselect()}>Back to task overview</button>
      <h3>Task: {task.title}</h3>
      <h4>Description</h4>
      <p>{task.description}</p>
      <h4>Status</h4>
      <select
        value={task.status}
        onChange={e => {
          const status = e.target.selectedOptions[0].value;
          onStatusChange(task, status);
          forceUpdate();
        }}
      >
        <option>todo</option>
        <option>progress</option>
        <option>done</option>
      </select>
    </div>
  );
};

TaskView.propTypes = propTypes;
TaskView.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch, { task: self }) => ({
  onDeselect: () => dispatch(selectTask(null)),
});

export default connect(
  null,
  mapDispatchToProps
)(TaskView);
