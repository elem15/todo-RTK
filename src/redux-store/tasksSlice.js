import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchTasks = createAsyncThunk('tasksList/fetchTasks', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    if (!response.ok) throw new Error('Server error')
    const data = response.json()
    return data
  } catch (e) {
    return rejectWithValue(e.message)
  }
})
export const deleteTask = createAsyncThunk('tasksList/deleteTask', async (id, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) throw new Error('Can\'t delete task. Server error')
    dispatch(removeTask(id))
  } catch (e) {
    return rejectWithValue(e.message)
  }
})
export const toggleTask = createAsyncThunk('tasksList/toggleTask', async (id, { rejectWithValue, dispatch, getState }) => {
  const { completed } = getState().tasksList.tasks.find(task => task.id === id)
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "applications/json"
      },
      body: JSON.stringify({
        completed
      })
    })
    if (!response.ok) throw new Error('Can\'t toggle status. Server error')
  
    dispatch(toggleCheck(id))
  } catch (e) {
    return rejectWithValue(e.message)
  }
})
export const addNewTask = createAsyncThunk('tasksList/addTask', async (title, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'POST',
      headers: {
        "Content-type": "applications/json; charset=UTF-8"
      },
      body: JSON.stringify({
        userId: 1,
        title,
        completed: false
      })
    })
    if (!response.ok) throw new Error('Can\'t add task. Server error')
    const data = await response.json()
    console.log(data) 
    const { id } = data
    dispatch(addTask({title, id}))
  } catch (e) {
    return rejectWithValue(e.message)
  }
})
const errorHandling = (state, action) => {
  state.status = 'rejected'
  state.error = action.payload
}
const errorRemove = (state) => {
  state.status = 'resolved'
  state.error = null
}
const tasksSlice = createSlice({
  name: 'tasksList',
  initialState: {
    tasks: [],
    status: null,
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      const completed = false
      const userId = 1
      const {title, id} = action.payload
      if (title.trim().length) state.tasks.push({ userId, id, title, completed })
    },
    toggleCheck: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload)
      task.completed = !task.completed
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
  },
  extraReducers: {
    [fetchTasks.pending]: (state) => { state.status = 'loading' },
    [fetchTasks.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.tasks = action.payload;
    },
    [fetchTasks.rejected]: errorHandling,

    [deleteTask.fulfilled]: errorRemove,
    [deleteTask.rejected]: errorHandling,

    [toggleTask.fulfilled]: errorRemove,
    [toggleTask.rejected]: errorHandling,

    [addNewTask.fulfilled]: errorRemove,
    [addNewTask.rejected]: errorHandling,
  }
})

export const { addTask, toggleCheck, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
