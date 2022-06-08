import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: {},
}

export const currentCategorySlice = createSlice({
	name: "currentCategory",
	initialState,
	reducers: {
		getCurrentCategory: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { getCurrentCategory } = currentCategorySlice.actions

export default currentCategorySlice.reducer
