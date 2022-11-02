import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Form from './components/Form';
import TasksList from './components/TasksList';
import { fetchTasks } from './redux-store/tasksSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks())
  })
  return (
    <div className="App">
      <Form />
      <TasksList  />
    </div>
  );
}

export default App;
