import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().toISOString()
    const completed = false
    setTasks([
      ...tasks, 
      {id, text, completed},
    ])
  }
  const toggleCheck = (id) => {     
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,          
          completed: !task.completed,
        }
      }
      return task
    }))

  }
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button>add task</button>
      </form>
      <ul>
        {tasks.map(task => <li key={task.id}>
          <input type="checkbox" className="check" checked={task.completed} onChange={() => toggleCheck(task.id)} />
          <span>{task.text}</span>
          <span className='close' onClick={() => removeTask(task.id)}>&#10006;</span>
        </li>)}
      </ul>
    </div>
  );
}

export default App;
