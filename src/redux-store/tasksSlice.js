import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasksList',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
      const id = new Date().toISOString()
      const completed = false
      const text = action.payload
      state.tasks.push({ id, text, completed })
    },
    toggleCheck: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload)
      task.completed = !task.completed
    },
    removeTask: (state, action) => {      
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
  }
})

export const { addTask, toggleCheck, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
