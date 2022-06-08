import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: false,
}

export const headBurgerSlice = createSlice({
	name: "burger",
	initialState,
	reducers: {
		toggleBurger: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { toggleBurger } = headBurgerSlice.actions

export default headBurgerSlice.reducer
