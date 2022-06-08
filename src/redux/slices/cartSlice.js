import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	prods: [],
	totalCartPrice: 0,
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		onAddToCart: (state, action) => {
			const findItem = state.prods.find((obj) => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++
			} else {
				state.prods.push({
					...action.payload,
					count: 1,
					totalPrice: 0,
				})
			}
			state.totalCartPrice += action.payload.price
		},
		onDeleteFromCart: (state, action) => {
			state.prods = state.prods.filter((obj) => obj.id !== action.payload.id)
			state.totalCartPrice = state.totalCartPrice - action.payload.totalPrice
		},
		incrementCount: (state, action) => {
			const findItem = state.prods.find((obj) => obj.id === action.payload.id)
			if (findItem) {
				findItem.count++
				findItem.totalPrice = 0
				findItem.totalPrice = findItem.price * findItem.count
				state.totalCartPrice += findItem.price
			}
		},
		decrementCount: (state, action) => {
			const findItem = state.prods.find((obj) => obj.id === action.payload.id)
			if (findItem) {
				findItem.count--
				findItem.totalPrice = 0
				findItem.totalPrice = findItem.price / findItem.count
				state.totalCartPrice -= findItem.price
			}
		},
	},
})

export const { onAddToCart, onDeleteFromCart, incrementCount, decrementCount } = cartSlice.actions

export default cartSlice.reducer
