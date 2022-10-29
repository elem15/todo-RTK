import React from 'react';

export default function Form({ handleSubmit, text, setText }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button>add task</button>
    </form>
  )
}