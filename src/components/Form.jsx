import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addText } from '../redux-store/store';

export default function Form({ handleSubmit, setText }) {
  const text = useSelector((state) => state.text)
  const dispatch = useDispatch()
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={text} onChange={(e) => dispatch(addText(e.target.value))} />
      <button>add task</button>
    </form>
  )
}