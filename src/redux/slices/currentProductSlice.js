import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {},
}

export const currentProductSlice = createSlice({
  name: 'currentProduct',
  initialState,
  reducers: {
    getCurrProdData: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { getCurrProdData } = currentProductSlice.actions

export default currentProductSlice.reducer