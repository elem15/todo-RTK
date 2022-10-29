import { createSlice, configureStore } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
    text: ''
  },
  reducers: {
    addText: (state, action) => {
      state.text = action.payload;
    }
  }
})

export const { addText } = todoSlice.actions;
export const store = configureStore({
  reducer: todoSlice.reducer
})

