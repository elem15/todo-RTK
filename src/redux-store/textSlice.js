import { createSlice } from '@reduxjs/toolkit'

const textSlice = createSlice({
  name: 'inputText',
  initialState: {
    value: ''
  },
  reducers: {
    addText: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { addText } = textSlice.actions;
export default textSlice.reducer

