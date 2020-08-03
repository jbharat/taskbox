import React from 'react';
import { string, shape, func } from 'prop-types';

/**
 * Use `Task` to show how awesome task is.
 * Some more description here.
 * Some more.
 */

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name='checked'
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)}/>
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
          style={{ textOverflow: 'ellipsis' }}
        />
      </div>
      <div className="actions" onClick={event => event.stopPropagation()}>
        { state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-start`} />
          </a>
        )}
      </div>
    </div>
  );
};

Task.propTypes = {
  task: shape({
    id: string.isRequired,
    title: string.isRequired,
    state: string.isRequired,
  }),
  onArchiveTask: func,
  onPinTask: func,
};

export default Task;
