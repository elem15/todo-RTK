import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

export default function TasksList() {
  const tasks = useSelector(state => state.tasksList.tasks)
  return (
    <ul>
      {tasks.map(task => <Task task={task} key={task.id} />)}
    </ul>
  )
}