import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visability: false,
}

export const headSelectSlice = createSlice({
  name: 'headSelect',
  initialState,
  reducers: {
    toggleSelect: (state, action) => {
      state.visability = action.payload
    },
  },
})

export const { toggleSelect } = headSelectSlice.actions

export default headSelectSlice.reducer