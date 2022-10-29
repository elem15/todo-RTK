import React from 'react';

export default function Task({ task, toggleCheck, removeTask }) {
  return (
    <li>
      <input type="checkbox" className="check" checked={task.completed} onChange={() => toggleCheck(task.id)} />
      <span>{task.text}</span>
      <span className='close' onClick={() => removeTask(task.id)}>&#10006;</span>
    </li>
  )
}