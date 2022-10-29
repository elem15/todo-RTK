import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  const text = useSelector((state) => state.text)
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
      <Form handleSubmit={handleSubmit} text={text} />
      <TaskList tasks={tasks} toggleCheck={toggleCheck} removeTask={removeTask} />
    </div>
  );
}

export default App;
