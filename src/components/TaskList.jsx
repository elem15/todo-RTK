import React from 'react';
import Task from './Task';

export default function TaskList({ tasks, toggleCheck, removeTask }) {
  return (
    <ul>
      {tasks.map(task => <Task task={task} key={task.id} toggleCheck={toggleCheck} removeTask={removeTask} />)}
    </ul>
  )
}