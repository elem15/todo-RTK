import { configureStore } from '@reduxjs/toolkit';
import textReducer from './textSlice';
import tasksReducer from './tasksSlice';

export default configureStore({
  reducer: {
    inputText: textReducer,
    tasksList: tasksReducer
  }
})