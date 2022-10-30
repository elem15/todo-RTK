import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleCheck } from '../redux-store/tasksSlice';

export default function Task({ task }) {
  const dispatch = useDispatch();
  return (
    <li>
      <input type="checkbox" className="check" checked={task.completed} onChange={() => dispatch(toggleCheck(task.id))} />
      <span>{task.text}</span>
      <span className='close' onClick={() => dispatch(removeTask(task.id))}>&#10006;</span>
    </li>
  )
}