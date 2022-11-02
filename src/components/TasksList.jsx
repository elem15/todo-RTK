import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

export default function TasksList() {
  const { tasks, status, error } = useSelector(state => state.tasksList)
  return (
    <>
      {status === 'loading'
        ? <div>loading...</div>
        : <ul>
          {tasks.map(task => <Task task={task} key={task.id} />)}
        </ul>}
        {error && <div>An error occurred: {error}</div>} 
    </>
  )
}