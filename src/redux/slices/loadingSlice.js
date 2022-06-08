import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	loading: true,
}

export const loadingSlice = createSlice({
	name: "headSelect",
	initialState,
	reducers: {
		toggleLoading: (state, action) => {
			state.loading = action.payload
		},
	},
})

export const { toggleLoading } = loadingSlice.actions

export default loadingSlice.reducer
