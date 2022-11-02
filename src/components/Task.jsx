import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux-store/tasksSlice';

export default function Task({ task }) {
  const dispatch = useDispatch();
  return (
    <li>
      <input type="checkbox" className="check" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))} />
      <span>{task.title}</span>
      <span className='close' onClick={() => dispatch(deleteTask(task.id))}>&#10006;</span>
    </li>
  )
}