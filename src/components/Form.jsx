import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../redux-store/tasksSlice';
import { addText } from '../redux-store/textSlice';

export default function Form() {  
  const text = useSelector((state) => state.inputText.value)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask(text))
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={text} onChange={(e) => dispatch(addText(e.target.value))} />
      <button>add task</button>
    </form>
  )
}